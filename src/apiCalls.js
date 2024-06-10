// import { displayNewPendingTrip } from "./dom";

import { displayNewPendingTrip } from "./dom";

export function fetchData() {
    return fetch('http://localhost:3001/api/v1/travelers')
    .then(response => response.json());
}

export function fetchTravelerById(id) {
    return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
        .then(response => response.json());
}

export function fetchTripsData() {
    return fetch('http://localhost:3001/api/v1/trips')
    .then(response => response.json());
}

export function fetchDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
    .then(response => response.json());
}

// POST

const bookNewTrip = (newTripObj) => {
    return fetch('http://localhost:3001/api/v1/trips', {
        method: 'POST',
        body: JSON.stringify(newTripObj),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Error Booking Trip!')
        }
        return response.json();
    });
}

export const submitNewTrip = (e, userId, destinationsData) => {
   
    e.preventDefault();
    const formElement = e.target;
    const formData = new FormData(formElement);
    const newTripObj = {
        id: Date.now(),
        userID: userId, 
        destinationID: Number(formData.get('destinations-list')), 
        travelers: Number(formData.get('num-of-travelers')), 
        date: formData.get('trip-date').replace(/-/g, '/'),
        duration: Number(formData.get('duration')), 
        status: 'pending',
        suggestedActivities: ['activities']
    };

    console.log('newTRIPOBJ:::::',newTripObj);
    bookNewTrip(newTripObj)
        .then(data => displayNewPendingTrip(data, destinationsData))
        .catch(error => {
            console.error('Error:', error);
        }); 
    
}
