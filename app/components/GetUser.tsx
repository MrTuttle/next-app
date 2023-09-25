import React from "react";
import { GET } from "../api/users/[id]/route";
interface Props {
  url: string;
}

const GetUser = ({ url }: Props) => {
  return <div>GetUser {url}</div>;
};

export default GetUser;
