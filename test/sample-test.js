import chai from 'chai';
const expect = chai.expect;

import { getTravelerById, calculateTotalAmount, findTravelersTrips, calculateTripEstimate } from '../src/travelerFunctions';


const trips = [
  { "id": 1, "userID": 44, "destinationID": 5, "travelers": 1, "date": "2022/09/16", "duration": 8, "status": "approved", "suggestedActivities": [] },
  { "id": 2, "userID": 35, "destinationID": 3, "travelers": 5, "date": "2022/10/04", "duration": 18, "status": "approved", "suggestedActivities": [] },
  { "id": 3, "userID": 44, "destinationID": 8, "travelers": 4, "date": "2022/05/22", "duration": 2, "status": "approved", "suggestedActivities": [] },
  { "id": 4, "userID": 44, "destinationID": 4, "travelers": 2, "date": "2022/02/25", "duration": 10, "status": "approved", "suggestedActivities": [] },
  { "id": 5, "userID": 42, "destinationID": 9, "travelers": 3, "date": "2022/04/30", "duration": 18, "status": "approved", "suggestedActivities": [] },
  { "id": 6, "userID": 29, "destinationID": 1, "travelers": 3, "date": "2022/06/29", "duration": 9, "status": "approved", "suggestedActivities": [] },
  { "id": 7, "userID": 37, "destinationID": 7, "travelers": 5, "date": "2022/05/28", "duration": 20, "status": "approved", "suggestedActivities": [] },
  { "id": 8, "userID": 36, "destinationID": 2, "travelers": 6, "date": "2022/02/07", "duration": 4, "status": "approved", "suggestedActivities": [] },
  { "id": 9, "userID": 24, "destinationID": 6, "travelers": 5, "date": "2022/12/19", "duration": 19, "status": "approved", "suggestedActivities": [] },
  { "id": 10, "userID": 9, "destinationID": 10, "travelers": 6, "date": "2022/07/23", "duration": 17, "status": "approved", "suggestedActivities": [] }
];

const destinations = [
  {
    "id": 1,
    "destination": "Lima, Peru",
    "estimatedLodgingCostPerDay": 70,
    "estimatedFlightCostPerPerson": 400
  },
  { "id": 2, "destination": "Stockholm, Sweden", "estimatedLodgingCostPerDay": 100, "estimatedFlightCostPerPerson": 780 },
  { "id": 3, "destination": "Sydney, Australia", "estimatedLodgingCostPerDay": 130, "estimatedFlightCostPerPerson": 950 },
  { "id": 4, "destination": "Cartagena, Colombia", "estimatedLodgingCostPerDay": 65, "estimatedFlightCostPerPerson": 350 },
  { "id": 5, "destination": "Madrid, Spain", "estimatedLodgingCostPerDay": 150, "estimatedFlightCostPerPerson": 650 },
  { "id": 6, "destination": "Jakarta, Indonesia", "estimatedLodgingCostPerDay": 70, "estimatedFlightCostPerPerson": 890 },
  { "id": 7, "destination": "Paris, France", "estimatedLodgingCostPerDay": 100, "estimatedFlightCostPerPerson": 395 },
  { "id": 8, "destination": "Tokyo, Japan", "estimatedLodgingCostPerDay": 125, "estimatedFlightCostPerPerson": 1000 },
  { "id": 9, "destination": "Amsterdam, Netherlands", "estimatedLodgingCostPerDay": 100, "estimatedFlightCostPerPerson": 950 },
  { "id": 10, "destination": "Toronto, Canada", "estimatedLodgingCostPerDay": 90, "estimatedFlightCostPerPerson": 450 }
];

describe('travelersFunctions', () => {
  describe('getTravelerById', () => {
    it('should return the correct traveler object when a valid ID is provided', () => {
      const travelersArray = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
      const result = getTravelerById(1, travelersArray);
      expect(result).to.deep.equal({ id: 1, name: 'John' });
    });

    it('should return undefined when an invalid ID is provided', () => {
      const travelersArray = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
      const result = getTravelerById(3, travelersArray);
      expect(result).to.equal(undefined);
    });

    it('should return undefined when travelersArray is empty', () => {
      const travelersArray = [];
      const result = getTravelerById(1, travelersArray);
      expect(result).to.equal(undefined);
    });

    it('should return undefined when travelersArray is not provided', () => {
      const result = getTravelerById(1);
      expect(result).to.equal(undefined);
    });
  });

  describe('calculateTotalAmount', () => {
    it('should return the correct total amount for approved trips for specified user in the current   year', () => {
      const currentYear = 2022;
      const userId = 44;
      const destinationsData = { destinations };
      const userTrips = findTravelersTrips(userId, trips);

      const combinedTrips = userTrips.past.concat(userTrips.upcoming);
      const result = calculateTotalAmount(combinedTrips, currentYear, destinationsData);
      expect(result).to.equal(8195);
    });


    it('should return 0 when trips array is empty', () => {
      const currentYear = 2022;
      const destinationsData = { destinations };
      const result = calculateTotalAmount([], currentYear, destinationsData);
      expect(result).to.equal(0);
    });

    it('should return 0 when destinations data is missing or incomplete', () => {
      const currentYear = 2022;
      const destinationsData = {};
      const result = calculateTotalAmount(trips, currentYear, destinationsData);
      expect(result).to.equal(0);
    });

    it('should return 0 when no trips are approved in the current year', () => {
      const currentYear = 2025; 
      const destinationsData = { destinations };
      const result = calculateTotalAmount(trips, currentYear, destinationsData);
      expect(result).to.equal(0);
    });
  });
  describe('findTravelersTrips', () => {
    it('should return an object with past, upcoming, and pending trips for a given user ID', () => {
      const userId = 9;
      const result = findTravelersTrips(userId, trips);
      expect(result).to.deep.equal({
        past: [],
        upcoming: [
          { "id": 10, "userID": 9, "destinationID": 10, "travelers": 6, "date": "2022/07/23", "duration": 17, "status": "approved", "suggestedActivities": [] }
        ],
        pending: []
      });
    });

    it('should return empty arrays for all categories if the user has no trips', () => {
      const userId = 599;
      const result = findTravelersTrips(userId, trips);
      expect(result).to.deep.equal({ past: [], upcoming: [], pending: [] });
    });

    it('should return empty arrays for all categories if trips array is empty', () => {
      const userId = 44;
      const result = findTravelersTrips(userId, []);
      expect(result).to.deep.equal({ past: [], upcoming: [], pending: [] });
    });

    it('should return empty arrays for all categories if no trips match the user ID', () => {
      const userId = 599;
      const result = findTravelersTrips(userId, trips);
      expect(result).to.deep.equal({ past: [], upcoming: [], pending: [] });
    });
  });
});

