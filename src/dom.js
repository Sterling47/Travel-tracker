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
        if (trip.status === 'approved' && tripYear === currentYear) {
            totalAmount += (trip.duration * destination.estimatedLodgingCostPerDay) 
            totalAmount+= (trip.travelers * destination.estimatedFlightCostPerPerson);
        }
    });

    return totalAmount;
};
