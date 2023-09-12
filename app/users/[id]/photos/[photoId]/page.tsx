// app/users/[id]/photos/[photoId]/page.tsx

interface Props {
  params: { id: number; photoId: number };
}
const UserPhoto = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      UserPhoto {id} - UserId {photoId}
    </div>
  );
};

export default UserPhoto;
