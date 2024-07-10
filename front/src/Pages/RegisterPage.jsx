import React from 'react'
import background from '../assets/images/background.svg'
import '../css/Register.scss'

function RegisterPage() {
    return (
        <div className='Register'>
            <div className="side">
                <form>
                    <h1>Sign Up</h1>
                    <input
                        type="text"
                        placeholder='Name' />

                    <input
                        type='email'
                        placeholder='Email' />

                    <input
                        type='password'
                        placeholder='Password' />

                    <button>Sign Up</button>
                </form>
                <a href='/signin'>Already have an account ?</a>
            </div>
            <img src={background} alt="Background" />
        </div>
    )
}

export default RegisterPage