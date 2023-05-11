import React from "react";
import logo from "../../assets/images/ShopLogo.png";
import { Link } from "react-router-dom";
import {
  UserIcon,
  HearthIcon,
  SearchIcon,
  BagIcon,
} from "../../assets/icons/icons";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeCart } from "../../Redux/Slice/cartslice";
function Navbar() {
  const Dispatch = useDispatch();
  const { IsCartOpen, products } = useSelector((state) => state.cartreducer);
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <ul className="category">
          <li>
            <Link to="/products/men">men</Link>
          </li>
          <li>
            <Link to="/products/women">Women</Link>
          </li>
          <li>
            <Link to="/products/kids">Children</Link>
          </li>
          <li>
            <Link to="/products/accessories">Accessories</Link>
          </li>
          <li>
            <Link to="/products/kcomsmetics">kcomsmetics</Link>
          </li>
        </ul>
        <div className="navlist">
          <ul className="navbar-icons">
            <li>
              <UserIcon />
            </li>
            <li
              onClick={() => {
                Dispatch(closeCart());
              }}
              className="bag"
            >
              <BagIcon />
              <span className={products?.length&&"Quantity"} >{products?.length}</span>
            </li>
          </ul>
        </div>
      </div>
      {IsCartOpen && <Cart />}
    </nav>
  );
}

export default Navbar;
