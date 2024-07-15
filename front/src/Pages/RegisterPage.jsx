import React, { useState } from 'react'
import background from '../assets/images/background.svg'
import '../css/Register.scss'

function RegisterPage() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:4100/users/signup', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const data = await response.json();

        if (data.code === 500) {
            alert(data.massage)
        }else{
            window.location.href = '/signin'
        }

    }

    return (
        <div className='Register'>
            <div className="side">
                <form>
                    <h1>Sign Up</h1>
                    <input
                        type="text"
                        placeholder='Name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

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

                    <button onClick={e => submit(e)}>Sign Up</button>
                </form>
                <a href='/signin'>Already have an account ?</a>
            </div>
            <img src={background} alt="Background" />
        </div>
    )
}

export default RegisterPage