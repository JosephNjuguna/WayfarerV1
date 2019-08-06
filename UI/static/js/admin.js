var createtripModal = document.getElementById("createTrips");
var trips = document.getElementById("tripsModal2");
var bookings = document.getElementById("bookingModal");

var tripModal = document.getElementById("tripCreated");
var showCreatetrip = document.getElementById("navCreatetrip");
var showTrips = document.getElementById("navTrips");
var tripCreated = document.getElementById("createTrip");
var showbooking = document.getElementById("navBookings");

showCreatetrip.onclick = function () {
    createtripModal.style.display = "flex";
    trips.style.display = "none";
    bookings.style.display = "none";
};

showTrips.onclick = function () {
    trips.style.display = "flex";
    createtripModal.style.display = "none";
    bookings.style.display = "none";
};

showbooking.onclick = function () {
    bookings.style.display = "flex";
    createtripModal.style.display = "none";
    trips.style.display = "none";
};