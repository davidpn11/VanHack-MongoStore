import React from 'react'
import ItemsList from 'components/ItemsList'
import Header from 'components/Header'
const Home = () => {
  return (
    <div className="flex flex-column w-100 items-center">
      <Header />
      <ItemsList />
    </div>
  )
}
export default Home
