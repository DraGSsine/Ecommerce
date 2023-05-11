import React from 'react'
import './NewProducts.scss'
import Card from '../Card/Card'
import { nanoid } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import Loading from '../Loading/Loading'
function NewProducts() {
    const {data,loading}=useFetch(`products?populate=*`)
    return (
        <div className='container'>
        <div className='newproducts'>
            <div className='NewProductsTop'>
                <h1>NEW PRODUCTS</h1>
            </div>
            {
                loading?<Loading/>:<div className='NewProductsButtom'>
                {
                    data?.data?.data.map((data) => (
                        <Link to={`product/${data?.id}`} key={nanoid()}>
                        <Card  data={data.attributes} />
                        </Link>
                    ))
                }
            </div>
            }
        </div>
        </div>
    )
}

export default NewProducts