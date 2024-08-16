import React, { useState } from 'react';

// added a comment

function SignUp() {
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');

    function signUpHandler(event) {
        event.preventDefault();

        if (email.trim() === '' || mobileNumber.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields.');
            setEmail('');
            setMobileNumber('');
            setPassword('');
            return;
        }
        alert('Sign Up successful!');
        setEmail('');
        setMobileNumber('');
        setPassword('');
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-4'>
            <form className='bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md'>
                <div className='mb-6 sm:mb-8 text-center font-bold text-2xl sm:text-4xl text-gray-800'>
                    <p>User Sign Up</p>
                </div>
                <div className='mb-4 sm:mb-6'>
                    <label className='block mb-2 text-gray-700 font-medium'>EMAIL:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
                        required
                        onChange={(event) => { setEmail(event.target.value) }}
                    />
                </div>
                <div className='mb-4 sm:mb-6'>
                    <label className='block mb-2 text-gray-700 font-medium'>MOBILE NUMBER:</label>
                    <input
                        type="tel"
                        name="mobileNumber"
                        value={mobileNumber}
                        className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
                        required
                        onChange={(event) => { setMobileNumber(event.target.value) }}
                    />
                </div>
                <div className='mb-4 sm:mb-6'>
                    <label className='block mb-2 text-gray-700 font-medium'>PASSWORD:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
                        required
                        onChange={(event) => { setPassword(event.target.value) }}
                    />
                </div>
                <div className='text-center'>
                    <button
                        type='submit'
                        className='w-full px-3 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors duration-300'
                        onClick={signUpHandler}
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
