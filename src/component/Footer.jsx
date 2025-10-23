// import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer>
//       <div className="container-fluid">
//         <div className="row">
//           {/* Column 1 */}
//           <div className="col-md-3">
//             <h1 className="mb-4 footer_first_align">Tech-Shop</h1>
//             <ul className="list-unstyled">
//               <li>
//                 <p>Subscribe to our Email alerts to receive early discount offers, and new products info</p>
//               </li>
//               <li>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address*"
//                   className="input-group flex-nowrap pt-2 pb-2 footer_inputs form-control input-bg"
//                 />
//               </li>
//               <li>
//                 <button
//                   type="button"
//                   className="btn float-start p-2 mt-3 fw-bolder button_facebook"
//                 >
//                   Subscribe
//                 </button>
//               </li>
//             </ul>
//           </div>

//           {/* Column 2 */}
//           <div className="col-md-3 text-center">
//             <h1 className="mb-4">Help</h1>
//             {/* <ul className="list-unstyled"> */}
//               <p className="footer_hover">FAQs</p>
//               <p className="footer_hover">Track Order</p>
//               <p className="footer_hover">Cancel Order</p>
//               <p className="footer_hover">Return Order</p>
//               <p className="footer_hover">Warranty Info</p>
           
//           </div>

//           {/* Column 3 */}
//           <div className="col-md-3 text-center">
//             <h1 className="ps-md-3 mb-4">Policies</h1>
//             {/* <ul className="list-unstyled"> */}
//               <p className="footer_hover">Return Policy</p>
//               <p className="footer_hover">Security</p>
//               <p className="footer_hover">Sitemap</p>
//               <p className="footer_hover">Privacy Policy</p>
//               <p className="footer_hover">Terms & Conditions</p>
//           </div>

//           {/* Column 4 */}
//           <div className="col-md-3 text-center">
//             <h3 className="ps-md-0 mb-4">Company</h3>
//             {/* <ul className="list-unstyled"> */}
//               <p className="footer_hover">About Us</p>
//               <p className="footer_hover">Contact Us</p>
//               <p className="footer_hover">Service Center</p>
//               <p className="footer_hover">Careers</p>
//               <p className="footer_hover">Affiliates</p>
//           </div>
//         </div>

//         <hr />

//         {/* Copyright */}
//         <div className="text-start">
//           <div className="row">
//             <div className="col-8">
//               <p>2025 | All Right Reserved &copy;</p>
//             </div>
//             <div className="col-4 text-end">
//               <div className="d-flex flex-row justify-content-evenly">
//                 <FaFacebookF className="fs-5" />
//                 <FaTwitter className="fs-5" />
//                 <FaInstagram className="fs-5" />
//                 <FaLinkedinIn className="fs-5" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// import React from 'react';
// import {FaRegCopyright, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// export default function Footer() {
//     return (
//         <footer className='bg-black text-gray-400  '>
//             <div className='grid grid-cols-4 pt-10 pb-10'>
//             {/* <div className='ml-5 space-y-4'>
//                 <h2 className=" text-xl text-white font-bold">Tech-Shop</h2>
//                 <p>Subscribe to our Email alerts to receive<br/> early discount offers, and new products<br/> info.</p>
//                 <input type='text' placeholder='Email Address*' className=' border border-gray-600 placeholder-gray-[rgba(61, 53, 53, 1)] w-70 text-bold' />
//                 <button className='bg-red-500 text-white w-30 h-8'>Subscribe</button>
//             </div> */}
//                <div>
//             <h1 className="mb-4 footer_first_align">Tech-Shop</h1>
//             <ul className="list-unstyled">
//               <li>
//                 <p>Subscribe to our Email alerts to receive early discount offers, and new products info</p>
//               </li>
//               <li>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address*"
//                   className="input-group flex-nowrap pt-2 pb-2 footer_inputs form-control input-bg"
//                 />
//               </li>
//               <li>
//                 <button
//                   type="button"
//                   className="btn float-start p-2 mt-3 fw-bolder button_facebook"
//                 >
//                   Subscribe
//                 </button>
//               </li>
//             </ul>
//           </div>
//             <div className='space-y-2'>
//                 <h2 className=" text-xl text-white font-bold">Help</h2>
//                 <p>FAQs</p>
//                 <p>Track Order</p>
//                 <p>Cancel Order</p>
//                 <p>Return Order</p>
//                 <p>Warranty Info</p>
//             </div>
//             <div className='space-y-2'>
//                 <h2 className=" text-xl text-white font-bold">Policies</h2>
//                 <p>Return Policy</p>
//                 <p>Security</p>
//                 <p>Sitemap</p>
//                 <p>Privacy Policy</p>
//                 <p>Terms & Conditions</p>
//             </div>
//             <div className='space-y-2'>
//                 <h2 className=" text-xl text-white font-bold">Company</h2>
//                 <p>About Us</p>
//                 <p>Contact Us</p>
//                 <p>Service Centres</p>
//                 <p>Careers</p>
//                 <p>Affiliates</p>
//             </div>
//             </div>
//             <hr className='w-full'/>
//             <div className='flex justify-between items-center px-6 py-4 mt-5 pb-5 '>
//                 <p className='flex'>2025| All Rights Reserved<FaRegCopyright />. </p>
//                 <ul className='flex gap-10 text-xl text-white'>
//                     <li><FaFacebookF/></li>
//                     <li><FaTwitter/></li>
//                     <li><FaInstagram/></li>
//                     <li><FaLinkedinIn/></li>
//                 </ul>
//             </div>
//         </footer>
//     );
// }

import React from 'react';
import { FaRegCopyright, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-16 pt-20 pb-8">
      {/* ✅ Main Footer Grid */}
      <div className="grid grid-cols-4 gap-16 pt-10">
        
        {/* --- Tech-Shop Column --- */}
        <div className="space-y-5">
          <h2 className="text-xl text-white font-bold">Tech-Shop</h2>
          <p className="text-sm leading-6 text-gray-300">
            Subscribe to our Email alerts to receive<br />
            early discount offers, and new products info.
          </p>

          {/* Input + Button */}
          <div className="d-flex flex-column gap-2 mt-3">
            <input
              type="text"
              placeholder="Email Address*"
              className="form-control bg-transparent text-white border-secondary placeholder-gray-800 w-75"
            />
            <button className="btn btn-danger w-50 fw-semibold">
              Subscribe
            </button>
          </div>
        </div>

        {/* --- Help Column --- */}
        <div className="space-y-5">
          <h3 className="text-xl text-white fw-bold mb-3">Help</h3>
          <ul className="list-unstyled space-y-1">
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">FAQs</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Track Order</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Cancel Order</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Return Order</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Warranty Info</li>
          </ul>
        </div>

        {/* --- Policies Column --- */}
        <div className="space-y-5">
          <h3 className="text-xl text-white fw-bold mb-3">Policies</h3>
          <ul className="list-unstyled space-y-1">
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Return Policy</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Security</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Sitemap</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Privacy Policy</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Terms & Conditions</li>
          </ul>
        </div>

        {/* --- Company Column --- */}
        <div className="space-y-5">
          <h3 className="text-xl text-white fw-bold mb-3">Company</h3>
          <ul className="list-unstyled space-y-1">
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">About Us</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Contact Us</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Service Centres</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Careers</li>
            <li className="hover:text-red-500 transition-all cursor-pointer text-gray-400">Affiliates</li>
          </ul>
        </div>
      </div>

      {/* ✅ Divider */}
      <hr className="border-secondary my-4" />

      {/* ✅ Bottom Bar */}
      <div className="d-flex justify-content-between align-items-center">
        <p className="d-flex align-items-center gap-1 m-0">
          2025 | All Rights Reserved <FaRegCopyright className="ms-1" />
        </p>
        <div className="d-flex gap-10 text-white fs-5 mr-15">
          <FaFacebookF className="hover:text-red-500 transition-all cursor-pointer" />
          <FaTwitter className="hover:text-red-500 transition-all cursor-pointer" />
          <FaInstagram className="hover:text-red-500 transition-all cursor-pointer" />
          <FaLinkedinIn className="hover:text-red-500 transition-all cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}

