import React, { useState, useEffect } from "react";
import { useParams, useSearchParams, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";

import { ProgrammingLanguageAvatar } from "./ProgrammingLanguageAvatar";
import { SelectInput } from "./SelectInput";
import { setSearchParamsToObj } from "../../../utils/setSearchParamsToObj";
import { programmingLanguages } from "../../../data/programmingLanguages";

const sortOptions = [
  {
    value: "default",
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

const experienceOptions = [
  {
    value: "default",
    label: "wszystkie",
  },
  {
    value: "intern",
    label: "staż",
  },
  {
    value: "junior",
    label: "junior",
  },
  {
    value: "mid",
    label: "mid",
  },
  {
    value: "senior",
    label: "senior",
  },
];

function DrawerContent() {
  const [selectedProgrammingLanguage, selectProgrammingLanguage] =
    useState("all");

  const location = useLocation();
  const { category } = useParams();
  let searchParams = {};

  if (location.search) {
    searchParams = setSearchParamsToObj(location.search);
  }

  let [, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (category === undefined) {
      selectProgrammingLanguage("all");
    } else {
      selectProgrammingLanguage(category);
    }
  }, [category]);

  const formik = useFormik({
    initialValues: {
      orderBy: searchParams.orderBy ? searchParams.orderBy : "default",
      experienceLevel: searchParams.experienceLevel
        ? searchParams.experienceLevel
        : "default",
    },
    onSubmit: (values) => {
      let searchUrl = "";
      for (const key in values) {
        if (values[key] !== "default") {
          searchUrl += `&${key}=${values[key]}`;
        }
      }
      searchUrl = "?" + searchUrl.slice(1);
      setSearchParams(searchUrl);
    },
  });

  // clear form if homepage
  useEffect(() => {
    if (location.pathname === "/" && !location.search) {
      formik.resetForm({
        values: {
          orderBy: "default",
          experienceLevel: "default",
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.search]);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <SelectInput
          label="Sortuj według"
          selectOptions={sortOptions}
          value={formik.values.orderBy}
          onChange={formik.handleChange}
          submitForm={formik.submitForm}
          name="orderBy"
        />
        <SelectInput
          label="Doświadczenie"
          selectOptions={experienceOptions}
          value={formik.values.experienceLevel}
          onChange={formik.handleChange}
          submitForm={formik.submitForm}
          name="experienceLevel"
        />
      </form>
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
            paddingBottom: "30px",
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
            paddingBottom: "30px",
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
