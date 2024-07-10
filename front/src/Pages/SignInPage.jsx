import React from 'react'
import background from '../assets/images/background.svg'

function SignInPage() {
    return (
        <div className='Register'>
            <div className="side">
                <form>
                    <h1>Sign In</h1>
                    <input
                        type='email'
                        placeholder='Email' />

                    <input
                        type='password'
                        placeholder='Password' />

                    <button>Sign In</button>
                </form>
                <a href='/signup'>Don't have an account ?</a>
            </div>
            <img src={background} alt="Background" />
        </div>
    )
}

export default SignInPage