import { Link } from 'react-router'

function MenuItemCard({ item, onAdd, isFavourite, onToggleFavourite, vendor }) {
  return (
    <div className="card">
      <div className="card-top">
        <div className="thumb">{item.name.charAt(0)}</div>
        <button
          type="button"
          className={isFavourite ? 'heart-btn favourite' : 'heart-btn'}
          aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
          aria-pressed={isFavourite}
          onClick={onToggleFavourite}
        >
          {isFavourite ? '♥' : '♡'}
        </button>
      </div>
      <span className="tag">{item.category}</span>
      <h3>{item.name}</h3>
      <p className="muted">{item.description}</p>
      {vendor && (
        <p className="muted">
          From <Link to={`/vendor/${vendor.id}`}>{vendor.name}</Link>
        </p>
      )}
      <p className="price">RM {item.price.toFixed(2)}</p>
      <button
        type="button"
        className="btn"
        disabled={!item.available}
        onClick={() => onAdd(item)}
      >
        {item.available ? 'Add to cart' : 'Sold out'}
      </button>
    </div>
  )
}

export default MenuItemCard