// Write your code here
import CartContext from '../../context/CartContext'
import Popup from 'reactjs-popup'
import Payment from '../Payment'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0

      for (let item of cartList) {
        total += item.price * item.quantity
      }

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
            <Payment close={close} />
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
