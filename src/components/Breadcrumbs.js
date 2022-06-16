import React, { useState } from "react";
import styled from "styled-components";
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
    <BreadcrumbContainer>
      {urlPaths.map((path, idx) => {
        return (
          <BreadcrumbItem key={idx}>
            <Link to={"/" + makeUrl(idx)}>{capitalizeFirstLetter(path)}</Link>
          </BreadcrumbItem>
        );
      })}
    </BreadcrumbContainer>
  );
};

const BreadcrumbContainer = styled(Breadcrumb)`
 position: absolute;
 height: 2rem;
left: 20%;
display: flex;
align-items: center;
`;
export default Breadcrumbs;
