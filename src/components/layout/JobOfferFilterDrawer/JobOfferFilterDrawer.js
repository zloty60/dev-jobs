import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";

import { ProgrammingLanguageAvatar } from "./ProgrammingLanguageAvatar";
import { SelectInput } from "./SelectInput";
import javascript from "../../../assets/icons/javascript.png";
import python from "../../../assets/icons/python.png";
import java from "../../../assets/icons/java.png";
import dotnet from "../../../assets/icons/dotnet.png";
import php from "../../../assets/icons/php.png";
import ruby from "../../../assets/icons/ruby.png";
import cPlusPlus from "../../../assets/icons/c++.png";
import golang from "../../../assets/icons/golang.png";
import android from "../../../assets/icons/android.png";
import ios from "../../../assets/icons/ios.png";
import devops from "../../../assets/icons/devops.png";
import other from "../../../assets/icons/other.png";

const sortOptions = [
  {
    value: "latest",
    label: "najnowsze ogłoszenia",
  },
  {
    value: "salaryMax",
    label: "pensja max",
  },
  {
    value: "salaryMin",
    label: "pensja min",
  },
];

const programmingLanguages = [
  {
    value: "javascript",
    src: javascript,
  },
  {
    value: "python",
    src: python,
  },
  {
    value: "java",
    src: java,
  },
  {
    value: ".net",
    src: dotnet,
  },
  {
    value: "php",
    src: php,
  },
  {
    value: "ruby",
    src: ruby,
  },
  {
    value: "c++",
    src: cPlusPlus,
  },
  {
    value: "golang",
    src: golang,
  },
  {
    value: "android",
    src: android,
  },
  {
    value: "ios",
    src: ios,
  },
  {
    value: "devops",
    src: devops,
  },
  {
    value: "inne",
    src: other,
  },
];

function DrawerContent() {
  const [selectedProgrammingLanguage, selectProgrammingLanguage] =
    useState("all");
  return (
    <>
      <SelectInput label="Sortuj według" selectOptions={sortOptions} />
      <SelectInput label="Doświadczenie" selectOptions={sortOptions} />
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: "space-between", marginTop: 1 }}
      >
        {programmingLanguages.map((el) => (
          <ProgrammingLanguageAvatar
            key={el.value}
            src={el.src}
            value={el.value}
            selectedProgrammingLanguage={selectedProgrammingLanguage}
            selectProgrammingLanguage={selectProgrammingLanguage}
          />
        ))}
      </Grid>
    </>
  );
}

export function JobOfferFilterDrawer({
  isMobileDrawerOpen,
  setMobileDrawerOpen,
}) {
  return (
    <>
      <Drawer
        variant="temporary"
        open={isMobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        anchor="left"
        sx={{
          display: { xs: "block", md: "none" },
          width: 270,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            paddingTop: "100px",
            paddingLeft: "20px",
            paddingRight: "20px",
            width: 270,
            boxSizing: "border-box",
          },
        }}
      >
        <DrawerContent />
      </Drawer>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          display: { xs: "none", md: "block" },
          width: 270,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            paddingTop: "100px",
            paddingLeft: "20px",
            paddingRight: "20px",
            width: 270,
            boxSizing: "border-box",
          },
        }}
      >
        <DrawerContent />
      </Drawer>
    </>
  );
}
