import React, { useState } from 'react'
import background from '../assets/images/background.svg'

function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch(`${process.env.REACT_APP_API_PATH}auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('_id', data._doc._id)
            localStorage.setItem('token', data.accessToken)
            window.location.href = '/'
        } else {
            alert(data.message);
        }
    };
    return (
        <div className='Register'>
            <div className="side">
                <form>
                    <h1>Sign In</h1>
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button onClick={e => submit(e)}>Sign In</button>
                </form>
                <a href={localStorage.getItem('_id') ? '/signup' : '/'}>Don't have an account ?</a>
            </div>
            <img src={background} alt="Background" />
        </div>
    )
}

export default SignInPage