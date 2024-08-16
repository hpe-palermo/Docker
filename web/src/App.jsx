import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListUsers from "./pages/ListUsers.jsx";
import CreateUser from "./pages/CreateUser.jsx";
import EditUser from './pages/EditUser.jsx';

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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListUsers />} />
        <Route path='/create' element={<CreateUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

