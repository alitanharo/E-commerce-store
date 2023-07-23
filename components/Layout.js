import React, { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Store } from '../utils/Store';

export default function Layout({ title, children }) {
    const { state } = useContext(Store);
    const { cart } = state;

    return <>
        <Head>
            <title>{title ? title : "E-commerce-store"}</title>
            <meta name="description" content="Ecommerce store" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='flex min-h-screen flex-col justify-between'>
            <header>
                <nav className='bg-amber-400 flex h-12 flex-row justify-between shadow-md items-center px-4'>
                    <Link href="/" className='text-lg font-bold'>
                        T-Shop
                    </Link>
                    <div>
                        <Link href="/cart" className='p-2'>
                            Cart{cart && cart.cartItems.length > 0 && (
                                    <span className='ml-1 bg-red-600 rounded-full px-2 py-1 text-white text-xs font-bold'>
                                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                                    </span>
                                )}

                        </Link>
                        <Link href="/login" className='p-2'>
                            Login
                        </Link>
                    </div>
                </nav>
            </header>
            <main className='container m-auto mt-4 px-4 '>{children}</main>
            <footer className='flex justify-center items-center shadow-inner'>
                Copyright &copy; 2023 T-shop
            </footer>
        </div>
    </>;
}
