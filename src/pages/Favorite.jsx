import React, { useContext } from 'react'
import PageAnmation from '../compontent/PageAnmation'
import { CardContext } from '../compontent/context/CardContext'
import Product from '../compontent/header/sildeProducts/Product'

function Favorite() {
  const { favitems } = useContext(CardContext)
  return (
    <div>
      <PageAnmation>
        <div className="category-products FavoritesPage ">
          <div className="container">
            <div className="top-slide">
              <h2>your Favorites</h2>
              {favitems.length == 0 ? (
                <p>no favorites yet</p>
              ) : (
                <div className='products'> {favitems.map(item => (
                  <Product item={item} key={item.id} />
                ))} </div>
              )
              }
            </div>
          </div>
        </div>
      </PageAnmation>
    </div>
  )
}

export default Favorite
