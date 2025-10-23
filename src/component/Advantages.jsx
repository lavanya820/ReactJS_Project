import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import {FaShieldAlt,FaTags,FaCreditCard } from "react-icons/fa";

export default function Advantages() {
    return (
        <div className='bg-neutral-800 text-white'>
            <h3 className='text-center pt-5 text-2xl'>Our Advantages</h3>
            <div className='flex justify-evenly mt-20 pb-20'>
                <div className='flex'>
                    <p className='text-red-500 text-3xl mt-2 mr-4'><FaTruckFast/></p>
                    <div>
                        <h4>Express Delivery</h4>
                        <p className='text-sm text-gray-400 '>Ships in 24 Hours</p>
                    </div>
                </div>
                <div className='flex'>
                    <p className='text-red-500 text-3xl mt-2 mr-4'><FaShieldAlt/></p>
                    <div>
                        <h4>Brand Warranty</h4>
                        <p className='text-sm text-gray-400'>100% Original Products</p>
                    </div>
                </div>
                <div className='flex'>
                    <p className='text-red-500 text-3xl mt-2 mr-4'><FaTags/></p>
                    <div>
                        <h4>Exciting Deals</h4>
                        <p className='text-sm text-gray-400'>On all prepaid Orders</p>
                    </div>
                </div>
                <div className='flex'>
                    <p className='text-red-500 text-3xl mt-2 mr-4'><FaCreditCard/></p>
                    <div>
                        <h4>Secure Payments</h4>
                        <p className='text-sm text-gray-400'>SSL/Secure certificate</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// project done