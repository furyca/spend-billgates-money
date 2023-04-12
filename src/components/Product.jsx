import { useDispatch, useSelector } from 'react-redux';
import { updateTransactions, buyItem, sellItem } from "../redux/productsSlice";

const Product = ( {name, price, pic, id, amount} ) => {
  const moneyLeft = useSelector(state => state.productsSlice.moneyLeft)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    if (e.target.value === "") {
      dispatch(updateTransactions({
        amount: 0,
        price,
        id
      }))
    }
    else {
      e.target.value*=1 
      dispatch(updateTransactions({
        amount: +e.target.value,
        price,
        id
      }))
    }
  }

  const buyOne = () => {
    dispatch(buyItem({id}))
  }

  const sellOne = () => {
    dispatch(sellItem({id}))
  }

  return (
    <div className='product-card'>
        <img src={pic} alt='pic'/>
        <h3>{name}</h3>
        <h5>${price.toLocaleString('en')}</h5>
        <div className='product-buttons'>
            <button className='button-sell' disabled={amount<1} onClick={sellOne}>Sell</button>
            <input type='number' placeholder='0' value={amount} onChange={handleChange} onWheel={e => e.target.blur()}/>
            <button className='button-buy' disabled={price>moneyLeft} onClick={buyOne}>Buy</button>
        </div>
    </div>
  )
}

export default Product