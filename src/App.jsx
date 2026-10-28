import { useState } from 'react'
import { useVendors } from './hooks/useVendor.js'
import Header from './components/Header.jsx'
import VendorCard from './components/VendorCard.jsx'
import MenuList from './components/MenuList.jsx'
import CartPage from './components/CartPage.jsx'
import Footer from './components/Footer.jsx'
import { Loading, ErrorMessage } from './components/Status.jsx'

function App() {
  // Fetched data: one piece of state for each situation
  
  const [selectedVendorId, setSelectedVendorId] = useState(null)
  const [view, setView] = useState('menu') // 'menu' | 'cart' | 'done'
  const [lastOrder, setLastOrder] = useState(null)
  const { vendors, loading, error, reload } = useVendors(setSelectedVendorId)
  
  const [favourites, setFavourites] = useState([]) // array of item ids
  const [favouritesOnly, setFavouritesOnly] = useState(false)

  const selectedVendor = vendors.find((v) => v.id === selectedVendorId)
  const visibleItems = selectedVendor
    ? selectedVendor.menu.filter((item) =>
        favouritesOnly ? favourites.includes(item.id) : true
      )
    : []
    

  let content
    if (view === 'cart') {
      content = (
        <CartPage onOrderPlaced={handleOrderPlaced} />
      )
  } else if (view === 'done') {
    content = (
      <section className="card">
        <h2>Order placed</h2>
        <p>Thank you, {lastOrder.name}. Pick up at {lastOrder.pickupTime}
          (Mahallah {lastOrder.mahallah}). Total RM {lastOrder.total.toFixed(2)}.</p>
        <button className="btn" onClick={() => setView('menu')}>Back to menus</button>
      </section>
    )
  } else if (loading) {
    content = <Loading message="Loading vendors..." />
  } else if (error) {
    content = <ErrorMessage message={error} onRetry={reload} />
  } else {
    content = (
      <>
        <h2 className="section-title">Choose a vendor</h2>
        <div className="vendor-grid">
          {vendors.map((vendor) => (
            <VendorCard
              key={vendor.id}
              vendor={vendor}
              isSelected={vendor.id === selectedVendorId}
              onSelect={setSelectedVendorId}
            />
          ))}
        </div>

        {selectedVendor && (
          <>
            <h2 className="section-title">Menu: {selectedVendor.name}</h2>
            <label>
              <input
                type="checkbox"
                checked={favouritesOnly}
                onChange={(e) => setFavouritesOnly(e.target.checked)}
              />{' '}
              Favourites only
            </label>
            <MenuList
              items={visibleItems}
              favourites={favourites}
              onToggleFavourite={handleToggleFavourite}
              emptyMessage={
                favouritesOnly
                  ? 'No favourites on this menu yet.'
                  : 'No items on this menu yet.'
              }
            />
          </>
        )}
      </>
    );
  }

  function handleOrderPlaced(order) {
    setLastOrder(order)
    setView('done')
  }

  function handleToggleFavourite(itemId) {
    setFavourites((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    )
  }


  return (
    <>
      <Header
        onShowMenu={() => setView('menu')}
        onShowCart={() => setView('cart')}
      />
      <main className="container">{content}</main>
      <Footer />
    </>
  )
}

export default App
