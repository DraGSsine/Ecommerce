import React from 'react'
import logo from '../../assets/images/ShopLogo.png'
import {Link} from 'react-router-dom'
import { UserIcon, HearthIcon, SearchIcon, BagIcon } from '../../assets/icons/icons'
import './Navbar.scss'
import Cart from '../Cart/Cart'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { closeCart } from '../../Redux/Slice/cartslice'
function Navbar() {
    const Dispatch = useDispatch()
    const {IsCartOpen,products} = useSelector(state=>state.cartreducer)
    return (
        <nav>
            <div className='navbar'>
                <div className='NavBarTop'>
                    <div className='lang-curncey'>
                        <select>
                            <option>USD</option>
                            <option>MAD</option>
                            <option>AED</option>
                        </select>
                        <select>
                            <option>EN</option>
                            <option>AR</option>
                            <option>FR</option>
                        </select>
                    </div>
                    <div className='logo'>
                        <Link to='/'><img src={logo} /></Link>
                    </div>
                    <div className='navlist'>
                        <ul className='routes'>
                            <li> <Link to='/'>Home</Link>  </li>
                            <li> <Link to='/About'>About</Link>  </li>
                            <li> <Link to='/Contact'>Contact</Link>  </li>
                        </ul>
                        <ul className='navbar-icons'>
                            <li><SearchIcon /></li>
                            <li><UserIcon /></li>
                            <li><HearthIcon /></li>
                            <li onClick={()=>{Dispatch(closeCart())}} className='bag'>
                            <BagIcon />
                            <span>{products?.length}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='NavBarButtom'>
                    <ul className='category'>
                        <li><Link to='/products/men'>men</Link></li>
                        <li><Link to='/products/women'>Women</Link></li>
                        <li><Link to='/products/kids'>Children</Link></li>
                        <li><Link to='/products/accessories'>Accessories</Link></li>
                        <li><Link to='/products/kcomsmetics'>kcomsmetics</Link></li>
                    </ul>
                </div>
            </div>
            {
                IsCartOpen&&<Cart/>
            }
            
        </nav>
    )
}

export default Navbar