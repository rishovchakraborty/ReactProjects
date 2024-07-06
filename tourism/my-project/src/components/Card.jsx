import { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}....`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className="card bg-white rounded-lg shadow-md overflow-hidden">
            <img src={image} alt="" className="w-full h-48 object-cover" />
            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold text-gray-800">₹ {price}</h4>
                    <h4 className="text-xl font-bold text-gray-800">{name}</h4>
                </div>
                <div className="mb-4">
                    <p className="text-gray-600">{description}</p>
                    <span className="text-blue-500 cursor-pointer" onClick={readmoreHandler}>
                        {readmore ? `show less` : `Read more`}
                    </span>
                </div>
                <button className="btn-red bg-red-500 text-white py-2 px-4 rounded" onClick={() => removeTour(id)}>
                    Not Interested
                </button>
            </div>
        </div>
    );
}

export default Card;
