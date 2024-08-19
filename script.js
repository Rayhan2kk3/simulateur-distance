function calculateDistance() {
    var origin = document.getElementById('origin').value;
    var destination = document.getElementById('destination').value;

    var apiKey = "VOTRE_CLE_API_OPENROUTESERVICE"; // Remplacez par votre clé API OpenRouteService

    var url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${encodeURIComponent(origin)}&end=${encodeURIComponent(destination)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var distance = (data.routes[0].summary.distance / 1000).toFixed(2); // Convertir en km
            document.getElementById('result').innerText = distance + ' km';
        })
        .catch(error => {
            alert('Erreur lors du calcul de la distance : ' + error.message);
        });
}
