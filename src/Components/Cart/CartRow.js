import React, { useState } from 'react';
import './CartRow.css';
import { BsTrash } from "react-icons/bs";

export default function CartRow(props) {

    const [count, setCount] = useState(props.proCount)

    function deleteCartRow(id) {
        props.deleteCartProduct(id);
    }

    function changeCount(e, id) {
        setCount(e.target.value)
        props.changeCountHandler(id, e.target.value)
    }

    return (
        <tr>
            <td className="cart-item-img py-3">
                <img src={props.image} />
            </td>
            <td className="cart-item-title py-3 align-items-center res-1">{props.title}</td>
            <td className="cart-item-count py-3 align-items-center">
                <input type="number" value={count} max="10" min="1" onChange={(event) => changeCount(event, props.id)} />
            </td>
            <td className="cart-item-price py-3 align-items-center" style={{ color: '#444' }}>{props.price}$</td>
            <td className="cart-item-btn py-3 align-items-center">
                <button className="btn delete-cart-item" onClick={() => deleteCartRow(props.id)}><BsTrash /> Delete</button>
            </td>
        </tr>
    )
}
