export const getTravelerById = (travelersID, travelersArray) => {
    return travelersArray.find(user => user.id === travelersID);
}

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