import { useEffect, useState } from 'react'

function App() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const URL = "http://localhost:3000/users/";
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data.users);
    console.log(data.users);
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
      <div className="container mt-5 border border-dark p-5">
        <h1>Usuários</h1>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr>
                  <th scope="row">{index}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
