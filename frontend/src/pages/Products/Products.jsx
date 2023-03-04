import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import CategoryProducts from '../../components/CategoryProducts/CategoryProducts'
import './Products.scss'
function products() {
  return (
    <div className='ProductsPage container'>
          <Sidebar/>
          <CategoryProducts/>
    </div>
  )
}

export default products