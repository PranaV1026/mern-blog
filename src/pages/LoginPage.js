import { useState } from "react";

export default function LoginPage()
{
    const [username,setUsername] = useState(' ');
    const [password,setPassword] = useState(' ');
    async function login(ev){
        ev.preventDefault();
        await fetch('http://localhost:5000/login',{
            method:'POST',
            body: JSON.stringify({username,password}),
            header: {'Content-Type':'application/json'},
        })
    }
    return(
        <form className="login" onSubmit={login}>
            <h1>Login</h1>
                <input type="text" 
                    placeholder="username" 
                    value={username} 
                    onChange={ev =>setUsername(ev.target.value)}/>
                <input type="password" 
                    placeholder="password" 
                    value={password} 
                    onChange={ev => setPassword(ev.target.value)}/>
                <button type="submit">Login</button>
        </form>
    );
}