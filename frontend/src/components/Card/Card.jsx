import React from 'react'
import './Card.scss'
import { Star } from '../../assets/icons/icons'
import { nanoid } from '@reduxjs/toolkit'
function Card({ data }) {
    return (
        <div className='card'>
            <div className='product'>
                <img src={`${import.meta.env.VITE_REACT_UPLOAD_URL}${data?.image?.data[0]?.attributes?.url}`} className='mainimage' />
                <img src={`${import.meta.env.VITE_REACT_UPLOAD_URL}${data?.image?.data[1]?.attributes?.url}`} className='secondimage' />
            </div>
            <div className='products-deatils'>
                <span className='name'>{data?.name}</span>
                <div className='rating'>
                    {
                        Array(data?.rate).fill().map(()=>(
                            <Star key={nanoid()}/>
                        ))
                    }
                </div>
                <div className='price'>
                    <span className='oldprice'>{'$'+data?.oldprice}</span>
                    <span className='currentprice'>{'$'+data?.price}</span>
                </div>
            </div>
        </div>
    )
}

export default Card