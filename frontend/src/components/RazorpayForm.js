// import React, { useState } from 'react';
// import Razorpay from 'razorpay';

// const RazorpayForm = () => {
//   const [paymentId, setPaymentId] = useState('');

//   const handlePayment = async () => {
//     const options = {
//       key: 'rzp_test_scidoGHoe83GZs',
//       amount: 100, // Amount in paise (e.g., for Rs 100, use 10000)
//       currency: 'INR',
//       name: 'Your Company Name',
//       description: 'Purchase Description',
//       image: 'https://yourcompany.com/logo.png',
//       order_id: '', // Obtained from the server-side
//       handler: (response) => {
//         setPaymentId(response.razorpay_payment_id);
//         // Handle the payment success or failure
//       },
//       prefill: {
//         name: 'John Doe',
//         email: 'johndoe@example.com',
//         contact: '+919876543210',
//       },
//       notes: {
//         address: 'Home Address',
//       },
//       theme: {
//         color: '#F37254',
//       },
//     };

//     const rzp = new Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <div>
//       <button onClick={handlePayment}>Pay with Razorpay</button>
//       {paymentId && <p>Payment ID: {paymentId}</p>}
//     </div>
//   );
// };

// export default RazorpayForm;
