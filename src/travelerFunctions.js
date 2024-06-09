export const getTravelerById = (travelersID, travelersArray) => {
    return travelersArray.find(user => user.id === travelersID);
}

