import React, { useState } from 'react'
import { data } from '../static/index'
import img from '../assets/Vector.png'
import { NavLink } from 'react-router-dom'



const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

export default function Products() {


  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS)

  const basket = JSON.parse(localStorage.getItem('key' || [])) || [];






  const addcart = (product) => {
    setCart([cart, { ...product }]);

    basket.push(data[product]);
    localStorage.setItem('key', JSON.stringify(basket))


  }

  const deleteFromCart = (item) => {
    const updatedBasket = basket.filter((product) => product !== item);
    setCart(updatedBasket);
    localStorage.setItem('key', JSON.stringify(updatedBasket));
  };





  const navigateTo = (nextPage) => {
    setPage(nextPage)
  }

  const renderProducts = () => (
    <>
      <div className="boxes">
        {data.map((item, index) => (
          <div className="box" key={index}>
            <img src={item.img} alt="" />
            <p>{item.name}</p>
            <span>{item.narx}</span>
            <button onClick={() => addcart(index)}>add</button>
          </div>
        ))}
      </div>
    </>

  )


 

 

  const rendercart = () => (
    <>
      <div className="boxes" >
        {basket.map((item, index) => (
          <div className="box" key={index}>
            <img src={item.img} alt="" />
            <p>{item.name}</p>
            <span>{item.narx}</span>
            <button onClick={() => deleteFromCart(item)}>delete</button>
          </div>
        ))}
      </div>
    </>
  )





  return (


    <div className='products'>
      <nav>
        <div className="logo">
          <button id='logo' onClick={() => navigateTo(PAGE_PRODUCTS)}><h1>Groceries</h1></button>
        </div>
        <div className="links">
          <NavLink>Home</NavLink>
          <NavLink>Menu</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Contact</NavLink>

        </div>
        <div className="basket">
          <button id='backet' onClick={() => navigateTo(PAGE_CART)} ><img src={img} alt="" /></button>
          <button id='sign'>Sign Up</button>
        </div>

      </nav>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && rendercart()}



    </div>
  )
}
