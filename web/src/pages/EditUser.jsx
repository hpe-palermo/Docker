import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            const URL = `http://localhost:3000/users/${id}`;
            const response = await fetch(URL);
            const data = await response.json();
            setName(data.user.name);
            setEmail(data.user.email);
            console.log(data.user);
        }

        fetchUser();
    }, []);

    const editUser = async (e) => {
        e.preventDeafult()
        const URL = `http://localhost:3000/${id}`;
        const dataToSend = { name, email };
        const settings = {
            "Content-Type": "application/json",
            method: "PUT",
            body: JSON.stringify(dataToSend)
        }
        const response = await fetch(URL, settings);
        const data = await response.json();
        window.location.href = "http://localhost:5173/";
    }

    const changeName = (e) => {
        setName(e.target.value);
    }

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div className="container mt-5 border border-dark p-5">
            <h1>Edit User</h1>
            <form onSubmit={editUser}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        value={name}
                        onChange={changeName}
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder='nome'
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        value={email}
                        onChange={changeEmail}
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder='nome@gmail.com'
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default EditUser;
