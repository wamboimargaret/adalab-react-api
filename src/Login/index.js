import React, {useState} from "react";
import './index.css'

const Login = ()=>{
    const [username, setUsername] = useState('')
    const[password,setPassword] = useState('')
    console.log({username});
    console.log({password});

    const handleSubmit = (e)=>{
    e.preventDefault();
    const data = {
        
    }
    }

    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1> Login</h1>
                <input placeholder="Enter username" type="text"
                 onChange = {(e)=>{setUsername(e.target.value)}} 
                 />
               
                <br/>   
                <br/>
                <input placeholder="Enter username" type="password"
                onChange={(e) => {setPassword (e.target.value)}}
                />
                <br/>   
                <br/>
                <button> Login</button>

                </form>
        </div>
    );
};

export default Login;