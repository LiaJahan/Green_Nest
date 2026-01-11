import React from 'react';

const PlantCareTips = () => {
    return (
        <div className='mx-auto max-w-7xl py-16 border-4 rounded-2xl border-s-fuchsia-500 border-r-amber-200 border-t-blue-600 border-b-pink-400 border-green-800 bg-gray-50'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl px-0 text-green-800 font-bold text-center mb-12'>
             Happy Plants Start with the Right Care</h1>

            <div className='flex flex-col lg:flex-row justify-center gap-12'>
                <div className="flex justify-center">
                    
                <span className="text-rotate text-xl md:text-2xl lg:text-4xl leading-[2]">
                <span className="grid gap-3 text-center lg:text-left">
                    <span>🌿 Water Wisely</span>
                    <span>☀️ Provide the Right Light</span>
                    <span>🌱 Choose the Right Soil</span>
                    <span>💧 Maintain Proper Humidity</span>
                    <span>✂️ Prune Regularly</span>
                </span>
        
            </span></div>
            <div><span className="text-rotate text-xl md:text-2xl lg:text-4xl leading-[2]">
                <span className="grid gap-3 text-center lg:text-left">
                    <span>🌡️ Keep a Stable Temperature</span>
                    <span>🌼 Fertilize When Needed</span>
                    <span>🪴 Re-pot When Necessary</span>
                    <span>🐛 Watch for Pests</span>
                    <span>❤️ Observe and Care Consistently</span>
                </span>
            </span></div>
            </div>
        </div>
    );
};

export default PlantCareTips;

     