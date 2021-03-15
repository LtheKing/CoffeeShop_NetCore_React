import React, { Component, useState, useEffect } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

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
            history.push({
                pathname: "/CoffeeArranger",
                state: auth
            });
            alertify.success('success logged in');
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
        
        const options = {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataAuth)
        }

        await fetch("https://localhost:5001/api/Auth/Login", options)
            .then(res => res.json())
            .then(res => {
                if (!res.status) {
                    throw new Error(res.errorMessage);
                }
                return res;
            }).then(toJSON => {
                setAuth({
                    token: toJSON.value.token,
                    refreshToken: 'this is refresh token'
                });
            })
            .catch(err => {
                console.log(err);
                alertify.error('login failed');
            });      
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
                            <input type="password" name="password" id="" onChange={PasswordOnChange}/>
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
