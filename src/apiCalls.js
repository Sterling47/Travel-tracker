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