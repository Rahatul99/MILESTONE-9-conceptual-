// import { Outlet, useLoaderData } from "react-router-dom"
// import Footer from "./components/Footer"
// import Header from "./components/Header"
// import Home from "./components/Home"
// import { createContext } from "react"


// const ProductContext = createContext([])
// const CartContext = createContext([])

// const App = () => {
//   const {cart, products} = useLoaderData();
//   console.log(cart, products)

//   return <>
//     <Header />
//     <div className="min-h-[calc(100vh-137px)]">
//       <Outlet />
//     </div>
//     <Footer />
//   </>
// }

// export default App







import { Outlet, useLoaderData } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import { createContext, useState } from "react"


export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const App = () => {
  const {cartArray, products} = useLoaderData();
  const [cart, setCart] = useState(cartArray);

  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
          <Header />
          <div className="min-h-[calc(100vh-137px)]">
              <Outlet />
          </div>
          <Footer />
      </CartContext.Provider>    
    </ProductContext.Provider>
  )
}

export default App
