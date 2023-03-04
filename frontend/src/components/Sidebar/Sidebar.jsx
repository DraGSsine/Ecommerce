import React, { useState } from 'react'
import './Sidebar.scss'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { categoryReducer,handlePriceChangeReducer,handlePriceSortReducer } from '../../Redux/Slice/categorySilice'
function Sidebar() {
    const [price,setprice]=useState(40)
    const [sort,setsort]=useState('')
    const Dispatch = useDispatch()
    const { id } = useParams()
    const { data } = useFetch(`sub-categories?populate=*&[filters][categories][title]=${id}`)
    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
        Dispatch(categoryReducer({isChecked,value}))
    };
    const handlePriceChange=(e)=>{
        const value = e.target.value
        setprice(value)
        Dispatch(handlePriceChangeReducer({value}))
    }
    const handlePriceSort=(e)=>{
        const sortprice = e.target.id
        Dispatch(handlePriceSortReducer({sortprice}))
    }
    return (
        <div className='sidebar'>
            <div className='Filter-by-category'>
                <h3>Product Categories</h3>
                {
                    data?.data?.data?.map(item => (
                        <div className="inputItem" key={item.id}>
                            <input
                                type="checkbox"
                                id={item.id}
                                value={item.id}
                                onChange={handleChange}
                            />
                            <label htmlFor={item.id}>{item.attributes.subCategoryTitle}</label>
                        </div>

                    ))
                }
            </div>
            <div className='Filter-by-price'>
                <h3>Filter by Price</h3>
                <div onChange={handlePriceChange} className='range'>
                    <span>{price}<input type='range' /> 1000$</span>
                </div>
            </div>
            <div className='Sort-by'>
                <h3>Sort By </h3>
                <div>
                    <input id='asc' onChange={handlePriceSort} type='radio' name='price' />
                    <label htmlFor='pricehighest'>Price</label>
                </div>
                <div>
                    <input  id='desc' onChange={handlePriceSort}  type='radio' name='price' />
                    <label htmlFor='pricelow'>Price</label>
                </div>
            </div>
        </div>
    )
}

export default Sidebar