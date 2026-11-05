import MenuItemCard from '../components/MenuItemCard.jsx'
import { useCart } from '../hooks/useCart.js'

function FavouritesPage() {
  const { favourites, addToCart, removeFavourite } = useCart()

  if (favourites.length === 0) {
    return (
      <p className="muted">
        You have no favourites yet. Tap the heart on a menu item to save it here.
      </p>
    )
  }

  return (
    <section>
      <h2 className="section-title">Your favourites</h2>
      <div className="grid">
        {favourites.map((favourite) => (
          <MenuItemCard
            key={favourite.item.id}
            item={favourite.item}
            vendor={{ id: favourite.vendorId, name: favourite.vendorName }}
            onAdd={addToCart}
            isFavourite
            onToggleFavourite={() => removeFavourite(favourite.item.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default FavouritesPage
