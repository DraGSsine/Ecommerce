import React,{useState} from 'react'
import { nanoid } from '@reduxjs/toolkit'
import './Product.scss'
import { Star } from '../../assets/icons/icons'
import { HearthIcon } from '../../assets/icons/icons'
import { useParams } from 'react-router-dom';
import useFetch from '../../components/Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../Redux/Slice/cartslice'
function product() {
  const { id } = useParams();    
  const {data}=useFetch(`products/${id}?populate=*`)
  const [quantity, setquantity] = useState(1);
  const Dispatch = useDispatch()
  return (
    <div className='product'>
      <div className='productPhotos'>
        <div className='previeweImages'>
          <img src={import.meta.env.VITE_REACT_UPLOAD_URL+data?.data?.data?.attributes?.image?.data[1]?.attributes?.url} />
          <img src={import.meta.env.VITE_REACT_UPLOAD_URL+data?.data?.data?.attributes?.image?.data[2]?.attributes?.url} />
          <img src={import.meta.env.VITE_REACT_UPLOAD_URL+data?.data?.data?.attributes?.image?.data[3]?.attributes?.url} />
        </div>
        <div className='mainImages'>
        <img src={import.meta.env.VITE_REACT_UPLOAD_URL+data?.data?.data?.attributes?.image.data[0].attributes.url} />
        </div>
      </div>
      <div className='productContent'>
        <div className='detailsContent'>
          <h1>{data?.data?.data?.attributes.name}</h1>
          <div className='rates'>
          {
            Array(data?.data?.data?.attributes.rate).fill().map(()=>(
              <Star key={nanoid()}/>
          ))
        }
          </div>
          <span className='price'>{`$${data?.data?.data?.attributes?.price}`}</span>
          <p className='description'>{data?.data?.data?.attributes?.desc}</p>
        </div>
        <div className='productInfo'>
          <h3 className='inStock'>Availbility:<span>IN STOCK</span></h3>
          <h3 className='categoriesTitle'>Categories: 
          {
            data?.data?.data?.attributes?.categories?.data.map(item=>(
              <span key={nanoid()} className='categoriesName'>{item.attributes.title}</span>
              ))
          }
            </h3>
          <div className='productSize'>
            <span>Size:</span>
            <span>md</span>
            <span className='selected'>lg</span>
            <span>xl</span>
            <span>2xl</span>
          </div>
        </div>
        <div className='addToCart'>
          <div className='quantity'>
            <input className='btn'  onClick={()=>setquantity(quantity>1?quantity-1:1)} type='submit' value='-' />
            <span>{quantity}</span>
            <input className='btn' onClick={()=>setquantity(quantity+1)} type='submit' value='+' />
          </div>
          <div className='addToCartButton'>
            <button onClick={()=>Dispatch(addProduct({itemproduct:data?.data?.data,quantity}))}>ADD TO CART</button>
          </div>
          <div className='wishlist'>
            <HearthIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default product