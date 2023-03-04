import React,{useState,useEffect} from 'react'
import './CategoryProducts.scss'
import BackgroundImageCategory from '../../assets/images/sliderimage3.png'
import Card from '../Card/Card'
import { nanoid } from '@reduxjs/toolkit'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import { useSelector } from 'react-redux'
function CategoryProducts() {
    const { cat, priceRange, sortprice } = useSelector(state => state.categorySilice)
    const { id } = useParams()
    const { data } = useFetch( `products?populate=*&[filters][categories][title]=${id}${cat.map(item => `&[filters][sub_categories][id][$eq]=${item}`).join('&')}&[filters][price][$lte]=${priceRange}&sort=price:${sortprice}`)

    return (
        <div className='Category'>
            <div className='categoryTop'>
                <div className='ImageBackground'>
                    <img src={BackgroundImageCategory} />
                </div>
            </div>
            <div className='categoryButtom'>
                {
                    data?.data?.data.map((data) => (
                        <Link key={nanoid()} to={`/product/${data?.id}`}>
                            <Card data={data.attributes} />

                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryProducts