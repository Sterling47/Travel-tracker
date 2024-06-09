export const getTravelerById = (travelersID, travelersArray) => {
    return travelersArray.find(user => user.id === travelersID);
}

export const calculateTotalAmount = (trips, currentYear, destinationsData) => {
    let totalAmount = 0;

    trips.forEach(trip => {
        const tripDate = new Date(trip.date);
        const tripYear = tripDate.getFullYear();
        if (tripYear === currentYear && trip.status === 'approved') {
            const destination = destinationsData.destinations.find(dest => dest.id === trip.destinationID);
            totalAmount += (trip.duration * destination.estimatedLodgingCostPerDay);
            totalAmount += (trip.travelers * destination.estimatedFlightCostPerPerson);
        }
    });

    return totalAmount;
};

export const findTravelersTrips = (userId, trips) => {
    const past = [];
    const upcoming = [];
    const pending = [];

    const currentDate = new Date('2022/06/12');

    trips.forEach(trip => {
        if (trip.userID === userId) {
            const tripDate = new Date(trip.date);
            if (trip.status === 'approved') {
                if (tripDate < currentDate) {
                    past.push(trip);
                } else {
                    upcoming.push(trip);
                }
            } else if (trip.status === 'pending') {
                pending.push(trip);
            }
        }
    });

    return { past, upcoming, pending };
}