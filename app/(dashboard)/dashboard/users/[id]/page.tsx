import { Params } from "next/dist/server/request/params";
import React from "react";

const Id = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <h1>User Profile {id}</h1>;
};

export default Id;
