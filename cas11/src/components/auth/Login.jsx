import React,{useState} from 'react';

export const Login = () =>{
    const [loginData,setLoginData] = useState({username:"",password:""});
    return(
        <div id="login">
            <label>Username:</label>
            <input
                type={"text"}
                placeholder="Enter Username"
                value={loginData.username}
                onChange={(e)=>{setLoginData({...loginData,username:e.target.value})}}
            />
            <br/>
            <br/>
            <label>Password:</label>
            <input 
                type={"password"}
                placeholder="Enter Password"
                value={loginData.password}
                onChange={(e)=>{setLoginData({...loginData,password:e.target.value})}}
            />
            <br/>
            <br/>
            <button>Log In</button>
        </div>
    )
}