import axios from "axios";

const REACT_APP_TELEGRAM_PAYMENT_TOKEN = `7400362995:AAFgeVRWfOgdMCBrestpWynPdmkKvgJZpKc`;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${REACT_APP_TELEGRAM_PAYMENT_TOKEN}`;

export const sendInvoice = (chatId) => {
  const payload = {
    chat_id: chatId,
    title: "Pro Membership",
    description: "Get the Pro Membership to unlock all features.",
    payload: "pro_membership_payment",
    provider_token: "284685063:TEST:YzU2N2EzNTM3OWU5", // Payment token from your provider
    //start_parameter: "get_access",
    currency: "USD",
    prices: [
      { label: "Pro Membership", amount: 500 }, // Amount in the smallest unit (cents)
    ],
    //max_tip_amount: 1000, // Optional, allows users to tip (e.g., $10.00)
    //suggested_tip_amounts: [100, 200, 500], // Optional, suggested tip amounts
    // provider_data: JSON.stringify({ custom_field: "custom_value" }), // Optional, provider-specific data
    // photo_url:
    //   "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Optional, product image URL
    // photo_width: 300, // Optional, image width
    // photo_height: 300, // Optional, image height
    // need_name: true, // Optional, request the user's name
    // need_phone_number: false, // Optional, request the user's phone number
    // need_email: true, // Optional, request the user's email
    // need_shipping_address: false, // Optional, request the user's shipping address
    // send_phone_number_to_provider: false, // Optional, forward phone number to payment provider
    // send_email_to_provider: true, // Optional, forward email to payment provider
    // is_flexible: false, // Optional, indicates if the final price depends on the shipping method
  };

  return axios
    .post(`${TELEGRAM_API_URL}/sendInvoice`, payload)
    .then((response) => {
      console.log("Invoice sent successfully", response.data);
      alert("Invoice sent successfully");
    })
    .catch((error) => {
      console.error("Error sending invoice", error);
      alert(error);
    });
};
