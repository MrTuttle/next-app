// app/users/[id]/page.tsx

import { notFound } from "next/navigation";

interface Props {
  params: { id: number };
}
const dashBoardDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return (
    <>
      <div>
        <h1>Dashboard Page {id}</h1>
      </div>
      <div>
        <p>log access only, if you see this, you are logged</p>
      </div>
    </>
  );
};

export default dashBoardDetailPage;
