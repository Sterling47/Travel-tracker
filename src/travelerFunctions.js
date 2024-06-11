export const getTravelerById = (travelersID, travelersArray) => {
    if (!travelersArray) {
        return undefined;
    }
    return travelersArray.find(user => user.id === travelersID);
}

export const calculateTotalAmount = (trips, currentYear, destinationsData) => {
    if (!trips || !destinationsData || !destinationsData.destinations) {
        return 0;
    }

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

    return totalAmount * 1.1;
};

export const findTravelersTrips = (userId, trips) => {
    const past = [];
    const upcoming = [];
    const pending = [];

    const currentDate = new Date('2022/03/12');

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

export const calculateTripEstimate = (destination, numOfTravelers, duration) => {
    if (!destination || !destination.estimatedLodgingCostPerDay || !destination.estimatedFlightCostPerPerson) {
        return 0;
    }

    if (numOfTravelers <= 0 || duration <= 0) {
        return 0;
    }

    const lodgingCostPerDay = destination.estimatedLodgingCostPerDay
    const flightCostPerPerson = destination.estimatedFlightCostPerPerson

    const totalLodgingCost = lodgingCostPerDay * duration
    const totalFlightsCost = flightCostPerPerson * numOfTravelers

    const estimateTotal = (totalLodgingCost + totalFlightsCost)

    return estimateTotal * 1.1
}
