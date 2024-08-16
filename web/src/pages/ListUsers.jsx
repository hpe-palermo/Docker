import { useEffect, useState } from 'react'

function ListUsers() {
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
  }, []);

  async function delUSer(index) {
    const URL = `http://localhost:3000/users/${index}`;

    const settings = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await fetch(URL, settings);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      window.location.href = "http://localhost:5173/";
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
      <div className="container mt-5 border border-dark p-5">
        <h1>Usuários</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">...</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => window.location.href = `http://localhost:5173/edit/${index}`} className="btn btn-warning me-2">
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button onClick={() => delUSer(index)} className="btn btn-danger">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <a href="/create" className="btn btn-success">Add User</a>
      </div>
    </>
  )
}

export default ListUsers;

