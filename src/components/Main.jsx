import { useSelector } from 'react-redux'
import Product from './Product'

const Main = () => {
  const products = useSelector(state => state.productsSlice.products)
  
  const productList = products.map(product => {
    return <Product key={product.id} id={product.id} pic={product.pic} name={product.name} price={product.price} amount={product.amount} />
  })

  return (
    <div className="container">
      {productList}
    </div>
  )
}

export default Main