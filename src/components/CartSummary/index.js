// Write your code here
import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'
import Payment from '../Payment'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const total = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      )

      return (
        <div className="container-total">
          <h1 className="total-heading">Order Total:Rs {total}/-</h1>
          <p className="items-length">{cartList.length} Items in cart</p>

          <Popup
            modal
            trigger={
              <button type="button" className="button-checkout">
                Checkout
              </button>
            }
            position="top  left"
          >
            <Payment />
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
