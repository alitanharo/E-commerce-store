import React from 'react'
import { useForm } from "react-hook-form";
import Layout from '../components/Layout'
import Link from 'next/link'
export default function LoginScreen() {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const submitHandler = ({email,password}) => {
        console.log(email,password);

    }
    return (
        <Layout title='login'>
            <div className='container w-5/12'>
                <form className='mx-auto max-w-screen-md' onSubmit={handleSubmit(submitHandler)}>
                    <h1 className='mb-4 text-xl '>Login</h1>
                    <div className='mb-4 '>
                        <label htmlFor='email'>Email</label>
                        <input type='email'
                            {...register('email', {
                                required: 'Please enter your email!',
                                pattern: {
                                    value: emailRegex,
                                    message: 'Invalid email address',
                                },
                            },)}

                            className='w-full'
                            id='email'
                            autoFocus>

                        </input>
                        {errors.email && <div className='text-red-500'> {errors.email.message}</div>}
                    </div>
                    <div className='mb-4 '>
                        <label htmlFor='password'>Password</label>
                        <input type='password' 
                            {...register('password', {
                                required: 'Please enter your password!',
                                minLength: {
                                    value: 6,
                                    message: 'password should be more than 5 chars!',
                                },
                            },)}
                        className='w-full'
                         id='password'
                          autoFocus>

                          </input>
                        {errors.password && <div className='text-red-500'> {errors.password.message}</div>}
                    </div>
                    <div className='mb-4'>
                        <button className='primary-button bg-amber-200'>Login </button>
                    </div>
                    <div className='mb-4'>
                        Do&apos;nt have an account?&nbsp;
                        <Link href='register' >Register</Link>


                    </div>
                </form>

            </div>

        </Layout>
    )
}
