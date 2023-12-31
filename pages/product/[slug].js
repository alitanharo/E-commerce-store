import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import data from '../../utils/data';
import Link from 'next/link';
import Image from 'next/image';
import { Store } from '../../utils/Store';


export default function ProductScreen() {
    const router = useRouter()
    const { state, dispatch } = useContext(Store)
    const { query } = useRouter();
    const { slug } = query;
    const product = data.products.find(x => x.slug === slug)
    if (!product) return <div>"Product Not Found!"</div>

    const addTocardHandler = () => {
        const existItem = state.cart.cartItems.find(item => item.slug === slug)
        const quantity = existItem ? existItem.quantity + 1 : 1;
        if (product.countInStock < quantity) return alert('Sorry the product is out of stock!')
        dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })
        router.push('/cart')
    }


    return (
        <Layout title={product.name}>


            <div className='p-2'>
                <Link href='/'>Back to product</Link>
            </div>
            <div className='grid md:grid-cols-4 md:gap-3'>
                <div className='md:col-span-2'>
                    <Image src={product.image}
                        alt={product.name}
                        width={640}
                        height={640}
                        layout='resoponsive'
                    >

                    </Image>
                </div>
                <div  >
                    <ul>
                        <li>
                            <h1 className='text-lg font-extrabold'>{product.name}</h1>
                        </li>
                        <li>Category:{product.category}</li>
                        <li>Brand: {product.brand}</li>
                        <li> {product.raiting} of {product.numRewiues} rewiues</li>
                        <li>Description:{product.description}</li>
                    </ul>
                </div>
                <div className=' card p-5 mb-6'>
                    <div className='mb-2 flex justify-between'>
                        <div>Price:</div>
                        <div>${product.price}</div>
                    </div>
                    <div className=' p-5'>
                        <div className='mb-2 flex justify-between'>
                            <div>Status:</div>
                            <div>{product.countInStock > 0 ? 'Availble' : 'Unavailble'}</div>

                        </div>


                    </div>
                    <button className='primary-button w-full bg-amber-200' onClick={addTocardHandler} >Add to card</button>
                </div>

            </div>


        </Layout>
    )
}
