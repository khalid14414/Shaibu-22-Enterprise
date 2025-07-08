import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { FaLock, FaSpinner, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

const CheckoutButton = ({ cartItems, total }) => {
  const { clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^0\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid Ghanaian number (e.g., 0551234567)";
    }
    
    if (!formData.address.trim()) {
      newErrors.address = "Delivery address is required";
    }
    
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePay = () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const custom_fields = [
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: formData.name,
        },
        {
          display_name: "Customer Phone",
          variable_name: "customer_phone",
          value: formData.phone,
        },
        {
          display_name: "Delivery Address",
          variable_name: "delivery_address",
          value: `${formData.address}, ${formData.city}`,
        },
        ...cartItems.map((item, index) => ({
          display_name: `Product ${index + 1}`,
          variable_name: `product_${index + 1}`,
          value: `${item.name} x ${item.quantity}`,
        })),
      ];

      const handler = window.PaystackPop.setup({
        key: "pk_test_1a8f20010ec4f952d1e8986281077fa7b8b54489",
        email: formData.email,
        amount: total * 100,
        currency: "GHS",
        metadata: { custom_fields },
        callback: function (response) {
          const orderReceipt = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            total: total.toFixed(2),
            reference: response.reference,
            cart: cartItems.map((item) => ({
              name: item.title,
              quantity: item.quantity,
              price: item.price,
            })),
          };

          localStorage.setItem("orderReceipt", JSON.stringify(orderReceipt));
          clearCart();
          setIsSuccess(true);
          
          // Redirect after a brief success display
          setTimeout(() => {
            window.location.href = `/thank-you`;
          }, 2000);
        },
        onClose: function () {
          setIsLoading(false);
          alert("Transaction was cancelled.");
        },
      });

      handler.openIframe();
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto mt-12 bg-white shadow-lg rounded-2xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-green-500 text-5xl" />
        </div>
        <h2 className="text-3xl font-bold text-green-800 mb-4">Payment Successful!</h2>
        <p className="text-gray-600 mb-8">
          Your order has been placed successfully. You'll be redirected to your order confirmation shortly.
        </p>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-500"></div>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-3xl mx-auto mt-12 bg-white shadow-xl rounded-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-green-700 to-green-800 text-white py-6 px-8">
        <h2 className="text-2xl md:text-3xl font-bold">Secure Checkout</h2>
        <div className="flex items-center mt-2 text-green-200">
          <FaLock className="mr-2" />
          <span>Your payment information is encrypted</span>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Kwame Mensah"
              required
              className={`w-full border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <FaExclamationTriangle className="mr-1" /> {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. kwame@example.com"
              required
              className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <FaExclamationTriangle className="mr-1" /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 0551234567"
              className={`w-full border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <FaExclamationTriangle className="mr-1" /> {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. Accra"
              className={`w-full border ${errors.city ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500`}
            />
            {errors.city && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <FaExclamationTriangle className="mr-1" /> {errors.city}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Delivery Address <span className="text-red-500">*</span>
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Full delivery address"
              rows="3"
              className={`w-full border ${errors.address ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500`}
            ></textarea>
            {errors.address && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <FaExclamationTriangle className="mr-1" /> {errors.address}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-600">
            By placing your order, you agree to our{" "}
            <a href="/terms" className="text-green-700 hover:underline">Terms of Service</a> and{" "}
            <a href="/privacy" className="text-green-700 hover:underline">Privacy Policy</a>
          </p>
          <button
            onClick={handlePay}
            disabled={isLoading}
            className="w-full md:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all duration-300 text-white px-8 py-4 rounded-lg font-semibold shadow-lg flex items-center justify-center min-w-[200px]"
          >
            {isLoading ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                Processing...
              </>
            ) : (
              <>
                <FaLock className="mr-2" />
                Pay GHS {(total + 15).toFixed(2)}
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutButton;