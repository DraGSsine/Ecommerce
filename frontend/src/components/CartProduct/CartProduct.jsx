import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity ,removeItem} from '../../Redux/Slice/cartslice'
import {ChevronRight,ChevronLeft} from '../../assets/icons/icons'
import './CartProduct.scss'
function CartProduct({ product, quantity }) {
  const Dispatch = useDispatch()
  return (
    <div className='product-cart'>
      <div className='product-image'>
        <img src={`${import.meta.env.VITE_REACT_UPLOAD_URL}${product.attributes.image.data[0].attributes.url}`} />
      </div>
      <div className='product-content'>
        <div className='product-top'>
          <span className='product-cart-name'>{product.attributes.name}</span>
          <span className='product-cart-price'>${product.attributes.price}</span>
        </div>
        <div className='product-buttom'>
          <div className='qty'>
          <span onClick={()=>Dispatch(decreaseQuantity({id:product.id}))} className='chevronLeft'><ChevronLeft/></span>
            <span className='product-cart-qty'>{quantity}</span>
            <span onClick={()=>Dispatch(increaseQuantity({id:product.id}))} className='chevronRight'><ChevronRight/></span>
          </div>

          <span className='product-cart-remove' onClick={()=>Dispatch(removeItem({id:product.id}))}>remove</span>
        </div>
      </div>
    </div>
  )
}

export default CartProduct