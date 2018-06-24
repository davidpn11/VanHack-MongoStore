import React from 'react'
import ItemsList from 'components/ItemsList'
import Header from 'components/Header'
const Home = () => {
  return (
    <div className="flex flex-column w-100 items-center">
      <Header />
      <div className="ph3">
        <ItemsList />
      </div>
    </div>
  )
}
export default Home
