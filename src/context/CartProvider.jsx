import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { CartContext } from "./cart-context.js";

function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [orders, setOrders] = useLocalStorage("orders", []);
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const count = cart.reduce((sum, line) => sum + line.qty, 0);
  const total = cart.reduce((sum, line) => sum + line.item.price * line.qty, 0);

  function addToCart(item) {
    setCart((currentCart) => {
      const existing = currentCart.find((line) => line.item.id === item.id);
      if (existing) {
        return currentCart.map((line) =>
          line.item.id === item.id ? { ...line, qty: line.qty + 1 } : line,
        );
      }
      return [...currentCart, { item, qty: 1 }];
    });
  }

  function changeQty(itemId, delta) {
    setCart((currentCart) =>
      currentCart
        .map((line) =>
          line.item.id === itemId ? { ...line, qty: line.qty + delta } : line,
        )
        .filter((line) => line.qty > 0),
    );
  }

  function removeFromCart(itemId) {
    setCart((currentCart) =>
      currentCart.filter((line) => line.item.id !== itemId),
    );
  }

  function isFavourite(itemId) {
    return favourites.some((favourite) => favourite.item.id === itemId);
  }

  function toggleFavourite(item, vendor) {
    setFavourites((currentFavourites) => {
      const exists = currentFavourites.some(
        (favourite) => favourite.item.id === item.id,
      );
      if (exists) {
        return currentFavourites.filter(
          (favourite) => favourite.item.id !== item.id,
        );
      }
      return [
        ...currentFavourites,
        { item, vendorId: vendor.id, vendorName: vendor.name },
      ];
    });
  }

  function removeFavourite(itemId) {
    setFavourites((currentFavourites) =>
      currentFavourites.filter((favourite) => favourite.item.id !== itemId),
    );
  }

  function placeOrder(details) {
    const order = { ...details, items: cart, total };
    setOrders((currentOrders) => [...currentOrders, order]);
    setCart([]);
    return order;
  }

  const value = {cart, orders, favourites, count, total, addToCart, changeQty, removeFromCart, placeOrder, isFavourite, toggleFavourite, removeFavourite,};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;