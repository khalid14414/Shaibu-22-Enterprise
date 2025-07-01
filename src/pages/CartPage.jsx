import { ImOpt } from "react-icons/im";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../context/formatPrice";


const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart();

      const total = cartItems.reduce((acc, item) => acc + item.price *( item.quantity || 1),0);

      

  return (
     <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border p-4 rounded-xl bg-white shadow"
              >
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.title} className="w-20 h-20 rounded-lg" />
                  <div>
                    <h3 className="font-semibold text-lg text-green-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">
                      Qty: {item.quantity} | GHS {item.price}
                    </p>
                    <div className="flex items-center mt-2 gap-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-green-100 px-2 py-1 rounded hover:bg-green-200"
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-green-100 px-2 py-1 rounded hover:bg-green-200"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={clearCart}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Clear Cart
            </button>
          </div>

          <div className="mt-10 flex justify-between items-center">
            <p className="text-xl font-bold text-green-700">
              Total:  {formatPrice(total)}
            </p>
          </div>
        </>
      )}
    </section>
  );
}

export default CartPage;