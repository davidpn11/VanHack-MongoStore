import React from 'react'
import ItemsList from 'components/ItemsList'
// import SelectedPostList from 'components/SelectedPostList'

const Home = () => {
  return (
    <div className="flex flex-column w-100 items-center">
      <h2>Items</h2>
      <ItemsList />
    </div>
  )
}
export default Home
