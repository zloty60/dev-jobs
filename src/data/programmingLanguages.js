import {
  yellow,
  blue,
  orange,
  deepPurple,
  purple,
  pink,
  cyan,
  lightBlue,
  green,
  deepOrange,
  lime,
  blueGrey,
} from "@mui/material/colors";

import javascript from "../assets/icons/javascript.png";
import python from "../assets/icons/python.png";
import java from "../assets/icons/java.png";
import dotnet from "../assets/icons/dotnet.png";
import php from "../assets/icons/php.png";
import ruby from "../assets/icons/ruby.png";
import cPlusPlus from "../assets/icons/c++.png";
import golang from "../assets/icons/golang.png";
import android from "../assets/icons/android.png";
import ios from "../assets/icons/ios.png";
import devops from "../assets/icons/devops.png";
import other from "../assets/icons/other.png";

export const programmingLanguages = [
  {
    value: "javascript",
    src: javascript,
    borderColor: yellow[600],
  },
  {
    value: "python",
    src: python,
    borderColor: blue[600],
  },
  {
    value: "java",
    src: java,
    borderColor: orange[600],
  },
  {
    value: ".net",
    src: dotnet,
    borderColor: deepPurple[600],
  },
  {
    value: "php",
    src: php,
    borderColor: purple[600],
  },
  {
    value: "ruby",
    src: ruby,
    borderColor: pink[600],
  },
  {
    value: "c++",
    src: cPlusPlus,
    borderColor: cyan[600],
  },
  {
    value: "golang",
    src: golang,
    borderColor: lightBlue[600],
  },
  {
    value: "android",
    src: android,
    borderColor: green[600],
  },
  {
    value: "ios",
    src: ios,
    borderColor: deepOrange[600],
  },
  {
    value: "devops",
    src: devops,
    borderColor: lime[600],
  },
  {
    value: "inne",
    src: other,
    borderColor: blueGrey[600],
  },
];
