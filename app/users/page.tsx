// app / users / page.tsx;

interface User {
  name: string;
  id: number;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <>
      <div>UsersPage</div>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th> Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
