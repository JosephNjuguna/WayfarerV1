var createtripModal = document.getElementById("createTrips");
var trips = document.getElementById("tripsModal2");
var bookings = document.getElementById("bookingModal");
var nav = document.getElementById("navSide");

var tripModal = document.getElementById("tripCreated");
var showCreatetrip = document.getElementById("navCreatetrip");
var showTrips = document.getElementById("navTrips");
var tripCreated = document.getElementById("createTrip");
var showbooking = document.getElementById("navBookings");
var showSidenav  = document.getElementById("showNav");
var hideSidenav  = document.getElementById("hideNav");

showCreatetrip.onclick = function () {
    createtripModal.style.display = "flex";
    trips.style.display = "none";
};

showSidenav.onclick = function () {
    nav.style.display = "flex";
};

hideSidenav.onclick = function () {
    nav.style.display = "none";
};

showTrips.onclick = function () {
    trips.style.display = "flex";
    createtripModal.style.display = "none";
    bookings.style.display = "none";
};

tripCreated.onclick = function () {
    tripModal.style.display = "flex";
};

showbooking.onclick = function () {
    bookings.style.display = "flex";
    createtripModal.style.display = "none";
    trips.style.display = "none";
};