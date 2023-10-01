// app/users/[id]/page.tsx

import { notFound } from "next/navigation";

interface Props {
  params: { id: number };
}
const UserDetailPage = ({ params: { id } }: Props) => {
  // if (id > 10) notFound();
  return (
    <div>
      <h1>UserDetailPage {id}</h1>
    </div>
  );
};

export default UserDetailPage;
