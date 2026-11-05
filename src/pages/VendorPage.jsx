import { useState } from 'react'
import { useParams } from 'react-router'
import MenuList from '../components/MenuList.jsx'
import { ErrorMessage, Loading } from '../components/Status.jsx'
import { useVendors } from '../hooks/useVendor.js'

function VendorPage() {
  const { id } = useParams()
  const { vendors, loading, error, reload } = useVendors()
  const [favourites, setFavourites] = useState([])
  const [favouritesOnly, setFavouritesOnly] = useState(false)

  if (loading) return <Loading message="Loading vendor..." />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  const vendor = vendors.find((item) => item.id === id)
  if (!vendor) return <p className="muted">Vendor not found</p>

  const visibleItems = vendor.menu.filter((item) =>
    favouritesOnly ? favourites.includes(item.id) : true
  )

  function handleToggleFavourite(itemId) {
    setFavourites((previous) =>
      previous.includes(itemId)
        ? previous.filter((id) => id !== itemId)
        : [...previous, itemId]
    )
  }

  return (
    <>
      <h2 className="section-title">Menu: {vendor.name}</h2>
      <p className="muted">{vendor.location} · Open: {vendor.openHours}</p>
      <label>
        <input
          type="checkbox"
          checked={favouritesOnly}
          onChange={(event) => setFavouritesOnly(event.target.checked)}
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
  )
}

export default VendorPage
