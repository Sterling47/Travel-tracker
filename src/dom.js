import { calculateTotalAmount } from "./travelerFunctions";

export const renderTrips = (trips, container, destinationsData) => {
    let totalAmount = 0;
    const currentDate = new Date('2022/06/12');
    const currentYear = currentDate.getFullYear()
    trips.forEach(trip => {
        const destination = destinationsData.destinations.find(dest => dest.id === trip.destinationID);
        const tripDate = new Date(trip.date)
        const tripYear = tripDate.getFullYear();
        console.log('destination:::', destination)
        const tripElement = document.createElement('div');
        tripElement.classList.add('img-bar')
        tripElement.innerHTML = `
        <div class='dest-display'>
        <img class='destination-img' src="${destination.image}" alt="">
        <p>${destination.destination}</p> 
        <p>${trip.date} </p>
        </div>
        `;
        container.appendChild(tripElement);
        console.log('trip duration::', trip.duration)  
        totalAmount = calculateTotalAmount(trips, currentYear, destinationsData) 
    });

    return totalAmount;
};

export const displayNewPendingTrip = (data, destinationsData) => {
    const pending = document.getElementById('pending-trips');
    console.log(destinationsData)
    console.log('data2', data)
    const destination = destinationsData.destinations.find(dest => dest.id === data.newTrip.destinationID);
    console.log("dest data", destination)
    const tripElement = document.createElement('div')
    tripElement.classList.add('img-bar')
    tripElement.innerHTML = `
        <div class='dest-display'>
            <img class='destination-img' src='${destination.image}'>
            <p>${destination.destination}</p> 
            <p>${data.newTrip.date}</p>
        </div>
    `;

    pending.appendChild(tripElement)
    console.log('trying::', data);
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
