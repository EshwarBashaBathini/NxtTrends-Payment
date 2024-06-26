import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      const {id, title, brand, quantity, price, imageUrl} = cartItemDetails
      const onRemoveCartItem = () => {
        removeCartItem(id)
      }
      const onPlusButton = () => {
        incrementCartItemQuantity(id)
      }
      const onMinusButton = () => {
        decrementCartItemQuantity(id)
      }

      // TODO: Update the functionality to increment and decrement quantity of the cart item

      return (
        <li className="cart-item">
          <img className="cart-product-image" src={imageUrl} alt={title} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{title}</p>
              <p className="cart-product-brand">by {brand}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                data-testid="minus"
                type="button"
                className="quantity-controller-button"
                onClick={onMinusButton}
              >
                <BsDashSquare color="#52606D" aria-hidden="true" size={12} />
                <span className="visually-hidden">Decrease quantity</span>
              </button>
              <p className="cart-quantity" aria-live="polite">
                {quantity}
              </p>
              <button
                data-testid="plus"
                type="button"
                className="quantity-controller-button"
                onClick={onPlusButton}
              >
                <BsPlusSquare color="#52606D" aria-hidden="true" size={12} />
                <span className="visually-hidden">Increase quantity</span>
              </button>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">Rs {price * quantity}/-</p>
              <button
                data-testid="remove"
                className="remove-button"
                type="button"
                onClick={onRemoveCartItem}
              >
                Remove
                <span className="visually-hidden">Remove item</span>
              </button>
            </div>
          </div>
          <button
            className="delete-button"
            type="button"
            onClick={onRemoveCartItem}
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
            <span className="visually-hidden">Delete item</span>
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
