import './Car.css'
import { useId } from 'react'
import { ClearCartIcon , CartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'
import PropTypes from 'prop-types'

function CartItem ({ thumbnail, price, title, quantity, addToCart}){
    return(
        <li>
            <img src={thumbnail} alt={title} />
            <div>
                <strong>{title} - {price} </strong>
            </div>

            <footer>
                <small >
                    QTY:{quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

CartItem.propTypes = {
    thumbnail : PropTypes,
    price: PropTypes,
    title: PropTypes,
    quantity: PropTypes,
    addToCart: PropTypes
}

export function Car (){
    const cartChekboxId = useId()
    const { cart, clearCart, addToCart} = useCart()
    return(
        <>
        <label className='car-button' htmlFor={cartChekboxId}>
            <CartIcon />
        </label>
        <input id={cartChekboxId} type='checkbox' hidden/>

        <aside className='car'>
            <ul>
                {cart.map(product =>(
                    <CartItem key={product.id} 
                    addToCart={() => addToCart(product)}
                    {...product} />
                ))}
            </ul>

            <button onClick={clearCart}>
                <ClearCartIcon/>
            </button>

        </aside>
        </>
    )
}