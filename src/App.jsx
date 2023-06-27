import { products as initialProducts } from './mocks/products.json'
import { Products } from "./components/Products.jsx"
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useFilters } from './hooks/useFilters.js'
import { Car } from './components/Car'
import { CartProvider } from './context/car'



function App() {

  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts);
  return (
    <>
    <CartProvider>
    <Header  />
    <Car />
    <Products products={filteredProducts} />
    <Footer/>
    </CartProvider>
    </>
  )
}

export default App
