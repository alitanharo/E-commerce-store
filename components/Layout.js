import React from 'react'
import Head from 'next/head'
import Link from 'next/link'



export default function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>{title ? title : "E-commerce-store"}</title>
                <meta name="description" content="Ecommerce store" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='flex min-h-screen flex-col justify-between'>
                <header>
                    <nav className='bg-slate-200 flex h-12 flex-row justify-between shadow-md items-center px-4'>
                        <Link className='text-lg font-bold' href="/">
                            T-Shop
                        </Link>
                        <div>
                            <Link href="/cart" className='p-2'>Cart</Link>
                            <Link href="/login" className='p-2'>Login</Link>
                        </div>

                    </nav>

                </header>
                <main className='container m-auto mt-4 px-4 '>{children}</main>
                <footer className='flex justify-center items-center shadow-inner'>
                    Copyright &copy;
 2023 T-shop
                </footer>
            </div>
        </>
    )
}
