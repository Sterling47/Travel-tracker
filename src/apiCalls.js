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
    const estimateBox = document.querySelector('.estimate-box')
    const newTripObj = {
        id: Date.now(),
        userID: userId, 
        destinationID: Number(formElement.querySelector('#destinations-list').value), 
        travelers: Number(formElement.querySelector('#num-of-travelers').value), 
        date: formElement.querySelector('#trip-date').value.replace(/-/g, '/'),
        duration: Number(formElement.querySelector('#duration').value), 
        status: 'pending',
        suggestedActivities: ['activities']
    };

    bookNewTrip(newTripObj)
        .then(data =>{
            displayNewPendingTrip(data, destinationsData)
            formElement.reset();
            estimateBox.innerHTML = `
            <p>Your Trip was sent to the travel agent for approval!</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
        }); 
    
}
