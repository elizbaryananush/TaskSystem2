import React from 'react'
import background from '../assets/images/background.svg'
import '../css/Register.scss'

function RegisterPage() {
    return (
        <div className='Register'>
            <div className="side"></div>
            <img src={background} alt="Background" />
        </div>
    )
}

export default RegisterPage