//shop div
var createtripModal = document.getElementById("createTrips");
var trips = document.getElementById("tripsModal2");
// profile modal button
var showCreatetrip = document.getElementById("navCreatetrip");
var showTrips = document.getElementById("navTrips");

showCreatetrip.onclick = function () {
    createtripModal.style.display = "flex";
    trips.style.display = "none";
};

showTrips.onclick = function () {
    trips.style.display = "flex";
    createtripModal.style.display = "none";
};
