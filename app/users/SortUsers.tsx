"use client";

import { useState } from "react";

interface Props {
  label: string;
}

const SortUsers = ({ label }: Props) => {
  const [sortByA, setSortByA] = useState(false);
  const handleClick = () => {
    setSortByA(true);
  };

  return <th onClick={() => console.log("click" + useState)}> {label}</th>;
};

export default SortUsers;
