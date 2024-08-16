import { useEffect, useState } from 'react'

function CreateUser() {
    const [users, setUsers] = useState([]);

    async function addUser() {
        const URL = "http://localhost:3000/create/";
        const response = await fetch(URL, {"Content-Type": "application/json", body: []});
        const data = await response.json();
        setUsers(data.users);
        console.log(data.users);
    }

    useEffect(() => {
        addUser();
    }, []);

    return (
        <>
            <div className="container mt-5 border border-dark p-5">
                <h1>Create User</h1>
                <form method='post' onSubmit={addUser}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Username</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='nome' />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='nome@gmail.com' />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default CreateUser;

