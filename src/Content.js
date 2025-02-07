import React from 'react'
import ItemList from './ItemList'

const Content = ({ items, handleCheck, handleDelete }) => {

  return (
    <>
        {items.length ? (
            <ItemList 
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete} />
        ) : (<h2>Your list is empty!</h2>)} 
    </>
  )
}

export default Content