import MenuItemCard from './MenuItemCard.jsx'
import { useCart } from '../hooks/useCart.js'

function MenuList({
  items,
  vendor,
  emptyMessage = 'No items on this menu yet.',
}) {
  const { addToCart, isFavourite, toggleFavourite } = useCart()

  if (items.length === 0) {
    return <p className="muted">{emptyMessage}</p>
  }

  return (
    <div className="grid">
      {items.map((item) => (
        <MenuItemCard
          key={item.id}
          item={item}
          onAdd={addToCart}
          isFavourite={isFavourite(item.id)}
          onToggleFavourite={() => toggleFavourite(item, vendor)}
        />
      ))}
    </div>
  )
}

export default MenuList