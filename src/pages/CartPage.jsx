import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../context/formatPrice";
import CheckoutButton from "../components/CheckoutButton";
import { Link } from "react-router-dom";
import { FaTrash, FaMinus, FaPlus, FaArrowLeft, FaLeaf } from "react-icons/fa";

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const shippingFee = total > 0 ? 15 : 0;
  const orderTotal = total + shippingFee;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 min-h-screen">
      {/* Back to Shopping */}
      <div className="mb-8">
        <Link 
          to="/product" 
          className="inline-flex items-center text-green-700 hover:text-green-800 font-medium"
        >
          <FaArrowLeft className="mr-2" />
          Continue Shopping
        </Link>
      </div>

      {/* Page Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-900">Your Shopping Cart</h1>
        <span className="text-gray-600 mt-2 md:mt-0">
          {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
        </span>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl shadow-lg max-w-2xl mx-auto">
          <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Your cart is empty</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            Looks like you haven't added anything yet. Browse our natural products to get started!
          </p>
          <Link
            to="/product"
            className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-7/12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Desktop Table Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 bg-green-50 text-green-900 font-semibold py-4 px-6">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-center">Total</div>
              </div>
              
              {/* Cart Items List */}
              <div className="divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 p-6">
                    {/* Product */}
                    <div className="col-span-6 flex items-center">
                      <div className="relative w-20 h-20">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-lg border border-gray-200"
                        />
                        {item.organic && (
                          <div className="absolute top-0 left-0 bg-green-700 text-white text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg flex items-center">
                            <FaLeaf className="mr-1" size={10} />
                            <span>Organic</span>
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-green-900">{item.title}</h3>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-1">{item.description}</p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="mt-3 text-red-600 hover:text-red-800 text-sm flex items-center"
                        >
                          <FaTrash className="mr-1" size={12} />
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="col-span-2">
                      <div className="md:hidden text-xs text-gray-500 mb-1">Price</div>
                      <p className="text-green-700 font-medium text-center">{formatPrice(item.price)}</p>
                    </div>

                    {/* Quantity */}
                    <div className="col-span-2">
                      <div className="md:hidden text-xs text-gray-500 mb-1">Quantity</div>
                      <div className="flex justify-center">
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                          <button 
                            onClick={() => decreaseQuantity(item.id)} 
                            className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-green-700 transition-colors"
                          >
                            <FaMinus size={12} />
                          </button>
                          <span className="px-3 py-1 bg-white font-medium min-w-[40px] text-center">{item.quantity}</span>
                          <button 
                            onClick={() => increaseQuantity(item.id)} 
                            className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-green-700 transition-colors"
                          >
                            <FaPlus size={12} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="col-span-2">
                      <div className="md:hidden text-xs text-gray-500 mb-1">Total</div>
                      <p className="text-green-800 font-bold text-center">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Clear Cart Button */}
              <div className="p-6 border-t border-gray-100">
                <button
                  onClick={clearCart}
                  className="flex items-center text-red-600 hover:text-red-800 font-medium text-sm"
                >
                  <FaTrash className="mr-2" />
                  Clear Entire Cart
                </button>
              </div>
            </div>
            
            {/* Guarantee Banner */}
            <div className="mt-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-5 border border-green-200">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                  <FaLeaf className="text-green-700 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 mb-1">Satisfaction Guaranteed</h3>
                  <p className="text-gray-600 text-sm">
                    30-day money-back guarantee on all products
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary - Compact Design */}
          <div className="lg:w-5/12">
            <div className="bg-white rounded-2xl shadow-xl p-5 sticky top-4">
              <h2 className="text-lg font-bold text-green-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{formatPrice(total)}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">{total > 0 ? formatPrice(shippingFee) : 'Free'}</span>
                </div>
                
                <div className="flex justify-between text-base font-semibold border-t border-gray-200 pt-3">
                  <span className="text-lg font-bold text-green-900">Total</span>
                  <span className="text-xl font-bold text-green-700">{formatPrice(orderTotal)}</span>
                </div>
              </div>
              
              <div className="mb-3">
                <CheckoutButton 
                  cartItems={cartItems} 
                  total={orderTotal}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300"
                />
              </div>
              
              <div className="text-center text-xs text-gray-500 mt-3">
                <p>Free shipping on orders over ₵100</p>
              </div>
            </div>
            
            {/* Continue Shopping - Compact */}
            <div className="mt-6 bg-green-50 rounded-2xl p-5">
              <h3 className="font-medium text-green-900 mb-2">Need more protection?</h3>
              <p className="text-gray-600 text-sm mb-3">
                Complete your wellness routine with our therapeutic tea
              </p>
              <Link 
                to="/products" 
                className="inline-flex items-center text-green-700 hover:text-green-800 font-medium text-sm"
              >
                Continue Shopping
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;