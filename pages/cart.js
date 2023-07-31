import React, { useContext } from 'react'
import Layout from '../components/Layout'
import { Store } from '../utils/Store'
import Link from 'next/link';
import Image from 'next/image';
import { XCircleIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

 function CartScreen() {
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;
    const removeItemHandler = (item) => {
        dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
    };
    const updateCartHandler = async (item, qty) => {
        const quantity = Number(qty);


        dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });

    };

    return (
        <Layout title='Shoping Cart'>
            <h1 className='mb-4 text-xl'>Shoping Cart</h1>
            {cartItems.length === 0 ? <div>Cart is empty.<Link href='/'>Go to shoping</Link> </div> :
                (<div className='grid md:grid-cols-4 md:gap-5'>
                    <div className='overflow-x-aouto md:col-span-3'>
                        <table className='min-w-full'>
                            <thead className='border-b'>
                                <tr>
                                    <th className='px-5 text-left'>Item</th>
                                    <th className='p-5 text-right'>Quantity</th>
                                    <th className='p-5 text-right'>Price</th>
                                    <th className='p-5'>Action</th>
                                </tr>

                            </thead>
                            <tbody>
                                {cartItems.map(item => {
                                    return (
                                        <tr key={item.slug} className='border-b'>
                                            <td>
                                                <Link href={`/product/${item.slug}`} legacyBehavior>
                                                    <a className='flex items-center'>
                                                        <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            width={50}
                                                            height={50}
                                                        >

                                                        </Image>
                                                        &nbsp;
                                                        {item.name}

                                                    </a>
                                                </Link>
                                            </td>
                                            <td className='p-5 text-right'>
                                                <select
                                                    value={item.quantity.toString()}
                                                    onChange={(e) => updateCartHandler(item, parseInt(e.target.value))}
                                                >
                                                    <option value="">Select Quantity</option>
                                                    {Array.from({ length: item.countInStock }, (_, index) => (
                                                        <option key={index + 1} value={index + 1}>
                                                            {index + 1}
                                                        </option>
                                                    ))}
                                                </select>


                                            </td>
                                            <td className='p-5 text-right'>${item.price}</td>
                                            <td className='p-5 text-center'>
                                                <button onClick={() => removeItemHandler(item)}>
                                                    <XCircleIcon className='w-5 h-5'></XCircleIcon>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className='p-5 card'>
                        <ul>
                            <li>
                                <div className='pb-3 text-xl'>
                                    Subtotal({cartItems.reduce((a, c) => a + c.quantity, 0)})
                                    {''}{cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                                    :$

                                </div>

                            </li>
                            <li>
                                <button onClick={() => router.push('/shipping')} className='primary-button w-full bg-amber-200'>
                                    Check out
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>)
            }

        </Layout>
    )
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });