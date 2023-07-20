import Link from 'next/link'
import React from 'react'

export default function ProductItem({ product }) {
    return (
        <div className='card'>
            <Link href={`/product/product.slug`}>

              
                    <img
                        src={product.image}
                        alt={product.name}
                        className='rounded shadow w-full h-64'


                    />
               
            </Link>
            <div className='flex flex-col items-center justify-center p-4'>
                <Link href={`/product/product.slug`}>
                    <h2 className='text-lg'>{product.name}</h2>
                </Link>
                <p className='mb-2'>{product.brand}</p>
                <p>${product.price}</p>
                <button className='primary-button  bg-amber-300' type='button' >Add to cart</button>


            </div>
        </div>
    )
}
