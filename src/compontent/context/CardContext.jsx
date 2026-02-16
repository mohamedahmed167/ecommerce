import { createContext, useEffect, useState } from "react";
export const CardContext = createContext();
export default function CardProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCard = localStorage.getItem("cardItems");
    return savedCard ? JSON.parse(savedCard) : []
  })
  const [favitems, setFavItems] = useState(() => {
    const savedCard = localStorage.getItem("favitems");
    return savedCard ? JSON.parse(savedCard) : [];
  })
  const removeForFavorites = (id) => {
    setFavItems((prev)=>prev.filter((i)=> i.id !== id))
  }

  // increase quntitny
  const increaseQuntity = (id) => {
    setCartItems(PrevItems => PrevItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item

    ))
  }
  const decreseQuntity = (id) => {
    setCartItems(PrevItems => PrevItems.map(item =>
      item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    ))
  }
  //  remove From cart
  const removeFromCart = (id) => {
    setCartItems(PrevItems => PrevItems.filter(item =>
      item.id != id
    ))
  }
  const addToFav = (item) => {
    setFavItems((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item]
    })
  }
  const addToCart = (item) => {
    setCartItems((PrevItems) => [...PrevItems, { ...item, quantity: 1 }])
  }

  useEffect(() => {
    localStorage.setItem("cardItems", JSON.stringify(cartItems))
    localStorage.setItem("favitems", JSON.stringify(favitems))
  }, [cartItems, favitems])
  return (
    <CardContext.Provider value={{ cartItems, favitems, addToFav, removeForFavorites, addToCart, increaseQuntity, decreseQuntity, removeFromCart }}>
      {children}
    </CardContext.Provider>
  )
}