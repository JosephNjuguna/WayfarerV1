var createtripModal = document.getElementById("createTrips");
var trips = document.getElementById("tripsModal2");
var tripModal = document.getElementById("tripCreated");
var showCreatetrip = document.getElementById("navCreatetrip");
var showTrips = document.getElementById("navTrips");
var tripCreated = document.getElementById("createTrip");

showCreatetrip.onclick = function () {
    createtripModal.style.display = "flex";
    trips.style.display = "none";
};

showTrips.onclick = function () {
    trips.style.display = "flex";
    createtripModal.style.display = "none";
};

tripCreated.onclick = function () {
    tripModal.style.display = "flex";
};
