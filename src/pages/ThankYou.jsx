import { useEffect, useState } from "react";
import { FaCheckCircle, FaShoppingBag, FaEnvelope, FaPhone, FaReceipt, FaHome, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

const ThankYou = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("orderReceipt");
    if (stored) {
      setOrder(JSON.parse(stored));
      // Keep the order in localStorage for demo purposes
      // localStorage.removeItem("orderReceipt");
    }
  }, []);

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white px-4">
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaLeaf className="text-green-600 text-4xl" />
          </div>
          <h1 className="text-3xl font-bold text-green-900 mb-4">Looking for your order?</h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            We couldn't find your order details. Please check your email for confirmation or contact our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
            >
              Contact Support
            </Link>
            <Link 
              to="/product" 
              className="bg-white border-2 border-green-700 text-green-700 hover:bg-green-50 font-semibold py-3 px-6 rounded-lg shadow transition-colors duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Confirmation Header */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-24 h-24 bg-green-600 bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheckCircle className="text-white text-5xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Thank You for Your Order!</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Your payment was successful. We're preparing your natural products for shipment.
          </p>
        </div>
      </div>

      {/* Order Summary */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-green-700 text-white py-4 px-6">
                <h2 className="text-xl font-bold flex items-center">
                  <FaShoppingBag className="mr-3" />
                  Order Summary
                </h2>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                      <FaReceipt className="mr-2 text-green-700" />
                      Order Details
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Order Reference:</span>
                        <span className="font-medium">{order.reference}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span className="font-medium">{new Date().toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total:</span>
                        <span className="font-bold text-green-700">GHS {order.total}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Payment Method:</span>
                        <span className="font-medium">Paystack</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Status:</span>
                        <span className="font-medium text-green-600">Payment Confirmed</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                      <FaEnvelope className="mr-2 text-green-700" />
                      Customer Information
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Name:</span>
                        <span className="font-medium">{order.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email:</span>
                        <span className="font-medium">{order.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Phone:</span>
                        <span className="font-medium">{order.phone}</span>
                      </div>
                      {order.address && (
                        <div className="flex justify-between">
                          <span>Address:</span>
                          <span className="font-medium text-right max-w-[150px]">{order.address}</span>
                        </div>
                      )}
                      {order.city && (
                        <div className="flex justify-between">
                          <span>City:</span>
                          <span className="font-medium">{order.city}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Next Steps */}
          <div className="space-y-8">
           
            
            {/* Support & Actions */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-green-700 text-white py-4 px-6">
                <h2 className="text-xl font-bold">Next Steps</h2>
              </div>
              
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-green-900 mb-3">What happens next?</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                      </div>
                      <span>You'll receive an order confirmation email shortly</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                      </div>
                      <span>We're preparing your natural products for shipment</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                      </div>
                      <span>You'll receive tracking information once shipped</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="font-semibold text-green-900 mb-3">Need help?</h3>
                  <div className="flex items-center text-gray-700 mb-2">
                    <FaEnvelope className="text-green-600 mr-3" />
                    <span>support@shaibu22.com</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaPhone className="text-green-600 mr-3" />
                    <span>055 446 6361</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <Link 
                    to="/products" 
                    className="block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-4 rounded-lg shadow-lg text-center transition-all duration-300"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;