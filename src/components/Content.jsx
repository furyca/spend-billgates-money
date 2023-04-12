import React from 'react'
import Header from './Header'
import Main from './Main'
import Receipt from './Receipt'
import MoneyBar from './MoneyBar'

const Content = () => {
  return (
    <>
        <Header />
        <MoneyBar />
        <Main />
        <Receipt />
    </>
    
  )
}

export default Content