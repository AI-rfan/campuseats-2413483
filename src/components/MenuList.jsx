import MenuItemCard from './MenuItemCard.jsx'

function MenuList({
  items,
  onAdd,
  favourites,
  onToggleFavourite,
  emptyMessage = 'No items on this menu yet.',
}) {
  if (items.length === 0) {
    return <p className="muted">{emptyMessage}</p>
  }

  return (
    <div className="grid">
      {items.map((item) => (
        <MenuItemCard
          key={item.id}
          item={item}
          onAdd={onAdd}
          isFavourite={favourites.includes(item.id)}
          onToggleFavourite={onToggleFavourite}
        />
      ))}
    </div>
  )
}

export default MenuList