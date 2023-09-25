import React from "react";
import { GET } from "../api/users/[id]/route";
interface Props {
  url: string;
}

const GetUser = ({ url }: Props) => {
  const userGet = GET("http://localhost:3000/api/users/5", "5");
  return (
    <div>
      GetUser {url}
      {userGet()}
    </div>
  );
};

export default GetUser;
