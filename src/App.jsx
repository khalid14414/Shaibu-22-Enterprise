import { Routes,Route } from "react-router-dom"
import MainLayout  from "./layouts/MainLayout"
import Home from "./pages/Home"
import Product from "./pages/Product"
import About from "./pages/About"
import Page404 from "./pages/Page404"
function App() {
  

  return (
    <>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
          </Route>
            <Route path="*" element={<Page404 />} />
        </Routes>
    </>
  )
}

export default App
