import { createSlice, current } from "@reduxjs/toolkit";
import {productData} from '../data/productData'

const otherSpendings = (id, state) => {
    let othersTotalSpending = 0
    const others = state.products.filter(product => product.id !== id)
    others.forEach(other => othersTotalSpending+=other.amount*other.price)
    return othersTotalSpending
}

export const productsSlice = createSlice({
    name: 'products',
    initialState:{
        products: productData,
        moneyLeft: 100000000000,
        transactionList: [],
    },
    reducers: {
        updateTransactions: (state, action) => {
            const {amount, price, id} = action.payload

            const activeItem = state.products.find(product => product.id === id)

            activeItem.amount = amount

            const spendableMoney = 100000000000-otherSpendings(id, state)

            const maxAmount = Math.floor(spendableMoney/price)

            if (amount > maxAmount) {
                activeItem.amount = maxAmount
            }

            let finalSpending = 0;

            state.products.map(product => finalSpending += product.amount*product.price)

            state.moneyLeft = 100000000000-finalSpending
        },
        buyItem: (state, action) => {
            const {id} = action.payload

            state.products[id].amount+=1

            const spendableMoney = 100000000000-otherSpendings(id, state)

            const maxAmount = Math.floor(spendableMoney/state.products[id].price)

            if (state.products[id].amount > maxAmount) {
                state.products[id].amount = maxAmount
            }

            let finalSpending = 0;

            state.products.map(product => finalSpending += product.amount*product.price)

            state.moneyLeft = 100000000000-finalSpending
        },
        sellItem: (state, action) => {
            const {id} = action.payload

            state.products[id].amount-=1

            let finalSpending = 0;

            state.products.map(product => finalSpending += product.amount*product.price)

            state.moneyLeft = 100000000000-finalSpending
        }
    },
})

export const {updateTransactions, buyItem, sellItem} = productsSlice.actions;
export default productsSlice.reducer;
