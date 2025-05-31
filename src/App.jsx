import { Routes,Route } from "react-router-dom"
import MainLayout  from "./layouts/MainLayout"
import Home from "./pages/Home"
import Product from "./pages/Product"
function App() {
  

  return (
    <>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home />} />
            <Route path="/product" element={<Product />} />
          </Route>
        </Routes>
    </>
  )
}

export default App
