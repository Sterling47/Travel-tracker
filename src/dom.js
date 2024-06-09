export const renderTrips = (trips, container, destinationsData) => {
    let totalAmount = 0;
    
    trips.forEach(trip => {
        const destination = destinationsData.destinations.find(dest => dest.id === trip.destinationID);
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
        console.log() 
        if (trip.status === 'approved') {
            totalAmount += (trip.duration * destination.estimatedLodgingCostPerDay) +
                (trip.travelers * destination.estimatedFlightCostPerPerson);
        }
    });

    return totalAmount;
};
