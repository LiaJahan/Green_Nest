import React from "react";
import Img1 from "/images/a.jpeg";
import Img2 from "/images/b.png";
import Img3 from "/images/c.jpeg";

const OurExperts = () => {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-green-800 font-bold text-center mb-16">
                Meet Our Green Experts
            </h1>

            <div className="space-y-10">
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-20 rounded-full ring ring-green-400">
                            <img className='w-fit h-fit' alt="Green experts Captain marvel" src={Img1} />
                        </div>
                    </div>

                    <div className="bg-green-50 p-5 rounded-2xl shadow-md max-w-md">
                        <h3 className="text-xl font-bold">
                            Brie Larson
                        </h3>
                        <p className="text-gray-500 font-medium">
                            Horticulture Specialist
                        </p>
                    </div>
                </div>


                <div className="chat chat-end">
                    <div className="chat-image avatar">
                        <div className="w-20 rounded-full ring ring-green-400">
                            <img className='w-fit h-fit' alt="Green experts IronMan" src={Img2} />
                        </div>
                    </div>

                    <div className="bg-green-50 p-5 rounded-2xl shadow-md max-w-md">
                        <h3 className="text-xl font-bold">
                            Robert Downey
                        </h3>
                        <p className="text-gray-500 font-medium">
                            Botanical Consultant
                        </p>
                    </div>
                </div>


                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-20 rounded-full ring ring-green-400">
                            <img src={Img3} alt="Chadwick Boseman" />
                        </div>
                    </div>

                    <div className="bg-green-50 p-5 rounded-2xl shadow-md max-w-md">
                        <h3 className="text-xl font-bold">
                            Chadwick Boseman
                        </h3>
                        <p className="text-gray-500 font-medium">
                            Plant Science Specialist
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurExperts;
