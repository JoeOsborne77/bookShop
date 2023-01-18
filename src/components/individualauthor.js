import React from "react";
import { useParams } from "react-router-dom";

function IndividualAuthor() {
  let { id } = useParams();

  return <div>Individual Author {id}</div>;
}

export default IndividualAuthor;
