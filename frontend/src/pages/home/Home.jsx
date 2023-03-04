import React from 'react'
import { Slider } from '../../components'
import BeastSeals from '../../components/BestSeals/BeastSeals'
import Categories from '../../components/Categories/Categories'
import NewProducts from '../../components/NewProducts/NewProducts'
function Home() {
  return (
    <div >
      <Slider/>
      <BeastSeals/>
      <Categories/>
      <NewProducts/>
    </div>
  )
}

export default Home