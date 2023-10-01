import Link from "next/link";
import React from "react";
// import route from "@/app/api/users/route";

interface Props {
  label: string;
  urlBase: string;
  urlEnd?: string;
  params: { id: number };
}

const BtnUrlLink = ({ label, urlBase, urlEnd, params }: Props) => {
  console.log("log :" + params);

  const urlConstructor = () => {
    return urlBase + urlEnd;
  };
  return <Link href={urlConstructor()}>{label}</Link>;
};

export default BtnUrlLink;
