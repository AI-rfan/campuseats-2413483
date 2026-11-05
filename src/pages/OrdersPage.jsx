import { useCart } from '../hooks/useCart.js'

function OrdersPage() {
  const { orders } = useCart()

  if (orders.length === 0) {
    return <p className="muted">You have no orders yet.</p>
  }

  return (
    <section>
      <h2 className="section-title">Your orders</h2>
      <ul className="order-list">
        {orders.map((order, index) => (
          <li className="card" key={`${order.name}-${order.pickupTime}-${index}`}>
            <h3>Order {index + 1}</h3>
            <p className="muted">
              {order.name} · Mahallah {order.mahallah} · Pickup at {order.pickupTime}
            </p>
            <ul>
              {order.items.map((line) => (
                <li key={line.item.id}>
                  {line.item.name} × {line.qty}
                </li>
              ))}
            </ul>
            <p className="cart-total">Total: RM {order.total.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OrdersPage
