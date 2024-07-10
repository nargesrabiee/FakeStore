import React, { useEffect, useState } from 'react';
import './Cart.css'
import './../../App.css'
import Menu from '../Menu/Menu';
import { Container } from 'react-bootstrap';
import { BsBasket2, BsCreditCard2Back } from "react-icons/bs";
import CartRow from './CartRow';

export default function Cart() {
  const userCart = JSON.parse(localStorage.getItem('userCart'));
  const [cartProducts, setCartProducts] = useState(userCart);

  const [result, setResult] = useState(calculateTotalPrice())

  useEffect(() => {
    setResult(calculateTotalPrice())
  }, [cartProducts])

  function changeProductCount(id, proCount) {
    const proWithNewCount = cartProducts.map(pro=>{
      if(pro.id === id){
        pro.proCount = proCount
      }
      return pro
    })
    localStorage.setItem('userCart', JSON.stringify(proWithNewCount));
    setCartProducts(userCart)

    setResult(calculateTotalPrice())
  }

  function calculateTotalPrice() {
    let totalPrice = 0
    cartProducts.forEach(pro => {
      totalPrice += pro.price * pro.proCount
    })

    return totalPrice.toFixed(2)
  }

  function deleteProductFromUserCart(proID) {
    const deleteProIndex = userCart.findIndex(pro => {
      return pro.id === proID
    })

    userCart.splice(deleteProIndex, 1)
    localStorage.setItem('userCart', JSON.stringify(userCart));
    setCartProducts(userCart)

    setResult(calculateTotalPrice())
  }

  return (
    <>
      <Menu />

      {/* Header */}
      <section className="cart-header">
        <div className="container">
          <h2 className="myfont"><BsBasket2 className='icon' /> Cart</h2>
        </div>
      </section>

      {/* Table */}
      <Container className="mt-5">
        <table className="table table-hover">
          <thead>
            <tr className="fs-5">
              <th scope="col">Product</th>
              <th className='res-1' scope="col">Title</th>
              <th scope="col">Count</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="product-row-container">
            {cartProducts.map(product => {
              return <CartRow key={product.id} {...product} deleteCartProduct={(proID) => deleteProductFromUserCart(proID)} changeCountHandler={(id, proCount) => changeProductCount(id, proCount)} />
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="myfont h4 py-4 total-price">Total Price</td>
              <td></td>
              <td className="myfont h4 py-4" id="totalPrice">{result} $</td>
              <td colSpan="2" className='myfont'>
                <button className="btn pay-btn"><BsCreditCard2Back /> Pay now</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </Container>
    </>
  )
}
