import React, { useState } from "react";
import data from './data';
import Tours from './components/Tours';

function App() {
    const [tours, setTours] = useState(data);

    function removeTour(id) {
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
    }

    if (tours.length === 0) {
        return (
            <div className="refresh text-center mt-8">
                <h2 className="text-2xl font-bold">No Tours Left</h2>
                <button className="btn-white bg-blue-500 text-white py-2 px-4 rounded mt-4" onClick={() => setTours(data)}>
                    Refresh
                </button>
            </div>
        );
    }

    return (
        <div className="App">
            <Tours tours={tours} removeTour={removeTour}></Tours>
        </div>
    );
}

export default App;
