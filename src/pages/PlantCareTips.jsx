import React from 'react';

const PlantCareTips = () => {
    return (
        <div className='mx-auto max-w-full py-16'>
            <h1 className='text-5xl text-green-800 font-bold text-center mb-12'>Happy Plants Start with the Right Care</h1>
            <div className='flex justify-between items-center'>
                <div><span className="text-rotate text-7xl leading-[2]">
                <span className="justify-items-center">
                    <span>🌿 Water Wisely</span>
                    <span>☀️ Provide the Right Light</span>
                    <span>🌱 Choose the Right Soil</span>
                    <span>💧 Maintain Proper Humidity</span>
                    <span>✂️ Prune Regularly</span>
                </span>
        
            </span></div>
            <div><span className="text-rotate text-7xl leading-[2]">
                <span className="justify-items-center">
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