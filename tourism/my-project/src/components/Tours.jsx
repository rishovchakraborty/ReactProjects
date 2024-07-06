import Card from './Card';

function Tours({ tours, removeTour }) {
    return (
        <div className="container mx-auto p-4">
            <div>
                <h2 className="title text-3xl font-bold text-center mb-6">Roam With Rishov</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    tours.map((tour) => {
                        return <Card {...tour} key={tour.id} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tours;
