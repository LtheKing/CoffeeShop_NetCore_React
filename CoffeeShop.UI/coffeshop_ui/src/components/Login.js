import React, { Component, useState, useEffect } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import App from "../App";

function Login() {
    const history = useHistory();
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const [auth, setAuth] = useState({
       token: '',
       refreshToken: '' 
    });

    useEffect(() => {
        if (auth.token.length > 0) {
            console.log(auth);
        }
    }, [auth])

    const UsernameOnChange = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const PasswordOnChange = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onLoginClick(e) {
        e.preventDefault();
        var dataAuth = {
            UserName : user.username,
            Password : user.password,
            ConfirmPassword : user.password
        };
        
        const coffee = await fetch("https://localhost:5001/api/Auth/Login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataAuth)
        });

        const toJSON = await coffee.json();
        // localStorage.setItem('token', toJSON.value.token);
        setAuth({
            token: toJSON.value.token,
            refreshToken: 'this is refresh token'
        });

        history.push("/ListCoffee");
    }

    return (
        <div className="container_home">
            <h1>Welcome to Coffee Shop Web App</h1>
            <h2>Silahkan Login Terlebih Dahulu</h2>

            <div className="div_login">
                <form action="" method="post" onSubmit={onLoginClick}>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="lbl_username">Username</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="username" id="" onChange={UsernameOnChange} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="lbl_password">Password</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="password" id="" onChange={PasswordOnChange}/>
                        </div>
                    </div>

                    <div className="row">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
