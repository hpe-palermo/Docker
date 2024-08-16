import { useState } from 'react';

function CreateUser() {
    const [name, setName] = useState("Palermo");
    const [email, setEmail] = useState("palermo@gmail.com");

    async function addUser(event) {
        event.preventDefault();
        
        const URL = "http://localhost:3000/create/";
        const dataToSend = { name, email };

        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
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

    const changeName = (e) => {
        setName(e.target.value);
    }

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div className="container mt-5 border border-dark p-5">
            <h1>Create User</h1>
            <form onSubmit={addUser}>
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

export default CreateUser;
