import React from 'react'
import './Cart.scss'
import { closeCart } from '../../Redux/Slice/cartslice'
import CartProduct from '../CartProduct/CartProduct'
import { Close } from '../../assets/icons/icons'
import { ArrowRight } from '../../assets/icons/icons'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

function Cart() {
  const {products } = useSelector(state => state.cartreducer)
  const Dispatch = useDispatch()
  const total = () => {
    let total = 0
    products?.forEach(element => {
      total = total+element.quantity*element.itemproduct.attributes.price
    })
    return total
  }

  return (
    <div className='cart-layer'>
      <div className='cart'>
        <div className='cart-head'>
          <span>shoping cart</span>
          <button onClick={() => Dispatch(closeCart())}> <Close /></button>
        </div>
        <div className='cart-products'>
          {
            products?.map(item => (
              <CartProduct key={nanoid()} product={item.itemproduct} quantity={item.quantity} />
            ))
          }
        </div>
        <div className='cart-buttom'>
          <div className='total'>
            <div className='subtotal'>
              <span>subtotal</span>
              <span>${total()}</span>
            </div>
            <p>Shipping and taxes calculated at chekout.</p>
          </div>
          <button className='chekout'>chekout</button>
          <div className='continue-shoping'>
            <h3>
              or <a onClick={()=>Dispatch(closeCart())}>continue shopping<ArrowRight /></a>

            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart