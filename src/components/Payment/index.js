import {useContext, useState} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

const paymentMethod = [
  {
    id: 'UPI',
    isDisable: true,
    text: 'UPI',
  },
  {
    id: 'CARD',
    isDisable: true,
    text: 'Card',
  },
  {
    id: 'WALLET',
    isDisable: true,
    text: 'Wallet',
  },
  {
    id: 'Cash on Delivery',
    isDisable: false,
    text: 'Cash on Delivery',
  },
  {
    id: 'Net Banking',
    isDisable: true,
    text: 'Net Banking'
  }
]

const Payment = () => {
  const {cartList} = useContext(CartContext)
  const [isPaymentSelected, setPaymentMethod] = useState(false)
  const [isOrderItems, setisOrderItems] = useState(false)

  let total = 0

  for (let item of cartList) {
    total += item.price * item.quantity
  }

  const onChangePayment = () => {
    setPaymentMethod(true)
  }
  const renderPaymentMethod = () => {
    return (
      <ul className="payment-ul">
        {paymentMethod.map(item => (
          <li className="pay-list" key={item.id}>
            <input
              type="radio"
              onClick={onChangePayment}
              name="paymentMethod"
              disabled={item.isDisable}
              id={item.id}
            />
            <label className="label" htmlFor={item.id}>
              {item.text}
            </label>
          </li>
        ))}
      </ul>
    )
  }

  const onChangeStatus = () => {
    setisOrderItems(true)
  }

  return (
    <div className="pop-up-container">
      {isOrderItems ? (
        <div className="success-container">
          <p className="success-p">Your order has been placed successfully</p>
        </div>
      ) : (
        <div className="bill-container">
          <h1 className="payment">Payment Details</h1>
          <h1 className="items-cart">{cartList.length} Items in Cart</h1>
          <p className="total-items">Total : Rs {total} /-</p>
          {renderPaymentMethod()}
          <button
            type="button"
            className="confirm-button"
            disabled={!isPaymentSelected}
            onClick={onChangeStatus}
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  )
}

export default Payment
