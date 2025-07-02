import { createContext,useState,useContext, useEffect } from "react";
import toast from 'react-hot-toast';

const CartContext=createContext()

// Custom hooks
export const useCart = ()=>{
   return useContext(CartContext)
}

export const CartProvider=({children})=>{
    const [cartItems,setCartItems]=useState(() =>{
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    })

    // Save cart items to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart=(product)=>{
       const exists = cartItems.find((item)=>item.id === product.id);
       if(exists){
           setCartItems((prevItems)=>
               prevItems.map((item)=>
                   item.id === product.id ? {...item, quantity: item.quantity + 1} : item
               )
           );
       }else{
           setCartItems((prevItems)=>[...prevItems,{...product, quantity: 1}]);
       }
         // You can show a notification or toast here
         toast.success(`${product.name} added to cart!`);
    }

    const removeFromCart=(id)=>{
       setCartItems((prevItems)=>prevItems.filter((item)=>item.id!==id))
    }

    const clearCart=()=>{
        setCartItems([])
    }

    const increaseQuantity = (id) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const decreaseQuantity = (id) => {
  setCartItems((prev) =>
    prev
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};


    return(
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart,clearCart, increaseQuantity, decreaseQuantity}}>
            {children}
        </CartContext.Provider>
    )
}