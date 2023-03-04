import React from 'react'
import './BeastSeals.scss'
import Card from '../Card/Card'
import { nanoid } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
function BeastSeals() {
    const {data}=useFetch(`products?populate=*&[filters][isBeastSeals][$eq]=${true}`)
    return (
        <div className='best_seals_product'>
            <div className='best_seals_product_header'>
                <h1>Best Seals</h1>
                <p>Seal the Deal: The Best Product Seals for Safe and Secure Deliveries            </p>
            </div>
            <div className='best_seals_product_footer'>
                {
                        data?.data?.data?.map(element => (
                            <Link key={nanoid()} to={`/product/${element.id}`}>
                                <Card  data={element.attributes} />
                            </Link>
    
                        ))
                }
            </div>
        </div>
    )
}

export default BeastSeals