import { useCart } from "../../context/CartContext";



const CheckoutButton = ({ cartItems, total }) => {
    const { clearCart } = useCart();
    const handlePay = () => {
        const metadataProducts = cartItems.map((item) => ({
            product_name: item.title,
            quantity: item.quantity,
        }));
        // Ensure Paystack script is loaded
        const handler = window.PaystackPop.setup({
            key: "pk_test_1a8f20010ec4f952d1e8986281077fa7b8b54489",
            email: "qwekukhalid266@gmail.com", // Replace with real form data
            amount: total * 100, // pesewas
            currency: "GHS",
            metadata: {
                custom_fields: [
                    {
                        display_name: "Cart Items",
                        variable_name: "cart_products",
                        value: JSON.stringify(metadataProducts),
                    },
                ],
            },
            callback: function (response) {
                alert("Payment successful! Ref: " + response.reference);
                //clear cart after successful payment
                clearCart();
            },
            onClose: function () {
                alert("Transaction cancelled.");
            },
        });

        handler.openIframe();
    };

    return (
        <button
            onClick={handlePay}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-medium"
        >
            Checkout with Paystack
        </button>
    );
};

export default CheckoutButton;
