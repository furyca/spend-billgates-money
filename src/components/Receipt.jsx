import React from 'react'
import { useSelector } from 'react-redux'

const Receipt = () => {
  const products = useSelector(state => state.productsSlice.products)

  let total = 0;

  const receipt = products.map(transaction => {
    total+= transaction.amount*transaction.price
    return transaction.amount > 0 && <h5 key={transaction.id}>{transaction.name} = {transaction.amount} x {transaction.price}</h5>
  })

  return (
    <div className='header'>
      {receipt}
      <br />
      <h5>Total: ${total.toLocaleString('en')}</h5>
    </div>
  )
}

export default Receipt