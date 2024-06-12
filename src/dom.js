import { calculateTotalAmount, calculateTripEstimate} from "./travelerFunctions";

export const renderTrips = (trips, container, destinationsData) => {
    let totalAmount = 0;
    const currentDate = new Date('2022/06/12');
    const currentYear = currentDate.getFullYear()
    trips.forEach(trip => {
        const destination = destinationsData.destinations.find(dest => dest.id === trip.destinationID);
        const tripElement = document.createElement('div');
        tripElement.classList.add('trip-card');
        tripElement.style.backgroundImage = `url(${destination.image})`;
        tripElement.innerHTML = `
            <div class='trip-details'>
                <h2>${destination.destination}</h2>
                <p>Date: ${trip.date}</p>
                
            </div>
        `;
        container.appendChild(tripElement);
        totalAmount = calculateTotalAmount(trips, currentYear, destinationsData);
    });

    return totalAmount;
};

export const displayNewPendingTrip = (data, destinationsData) => {
    const pending = document.getElementById('pending-trips');
    const destination = destinationsData.destinations.find(dest => dest.id === data.newTrip.destinationID);
    const tripElement = document.createElement('div');
    tripElement.classList.add('trip-card');
    tripElement.style.backgroundImage = `url(${destination.image})`;
    tripElement.innerHTML = `
        <div class='trip-details'>
            <h2>${destination.destination}</h2>
            <p>Date: ${data.newTrip.date}</p>
        </div>
    `;

    pending.appendChild(tripElement)
}

export function destinationOptions(destinationsData) {
    const destinationSelect = document.getElementById('destinations-list');
    destinationsData.destinations.forEach(destination => {
        const option = document.createElement('option');
        option.value = destination.id;
        option.text = destination.destination;
        destinationSelect.appendChild(option);
    });
}
    

export const displayTotalEstimate = (e, destinationsData) => {
    e.preventDefault();
    const estimateBox = document.querySelector('.estimate-box')
    const destinationId = Number(document.getElementById('destinations-list').value);
    const numOfTravelers = Number(document.getElementById('num-of-travelers').value);
    const duration = Number(document.getElementById('duration').value);
    const selectedDestination = destinationsData.destinations.find(dest => dest.id === destinationId);

    const estimate = calculateTripEstimate(selectedDestination, numOfTravelers, duration);

    estimateBox.innerHTML =`
    <p>Total estimate is for this trip: $${estimate} </p>
    `
}
