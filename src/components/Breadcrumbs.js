import React, { useState } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  let urlPaths = useLocation().pathname.split("/").slice(1);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const makeUrl = (idx) => {
    let url = [];

    urlPaths.forEach((path, index) => {
      index <= idx && url.push(path);
    });
  
    return url.join("/");
  };

  return (
    <Breadcrumb style={{ position: "absolute", left: "19%" }}>
      {urlPaths.map((x, idx) => {
        return (
          <BreadcrumbItem>
            <Link to={"/" + makeUrl(idx)}>{capitalizeFirstLetter(x)}</Link>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};
export default Breadcrumbs;
