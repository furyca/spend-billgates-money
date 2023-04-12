import { useSelector } from "react-redux"

const MoneyBar = () => {
    const cash = useSelector(state => state.productsSlice.moneyLeft)
    
    return (
        <div className='money-bar'>
            <h1>${cash.toLocaleString('en')}</h1>
        </div>
    )
}

export default MoneyBar