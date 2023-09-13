// app / users / page.tsx;

import UserTable from "./UserTable";

interface Props {
  searchParams: {
    sortOrder: string;
  };
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);
  // log return "email" or "name"

  return (
    <>
      <div>
        <h1>UsersPage</h1>
      </div>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
