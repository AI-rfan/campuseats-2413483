import { BrowserRouter, Route, Routes, Outlet } from 'react-router'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CartPage from './pages/CartPage.jsx'
import FavouritesPage from './pages/FavouritesPage.jsx'
import HomePage from './pages/HomePage.jsx'
import VendorPage from './pages/VendorPage.jsx'
import OrdersPage from './pages/OrdersPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function Layout() {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="vendor/:id" element={<VendorPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="favourites" element={<FavouritesPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
