// Inicializar el mapa
var map = L.map('map').setView([9.8517271, -83.9172947], 18); // Coords

// Añadir capa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Cargar el archivo GeoJSON
fetch('urb_las_garzas.geojson') // Ruta al archivo GeoJSON
  .then(response => response.json())
  .then(data => {
    // Añadir el GeoJSON al mapa
    L.geoJSON(data).addTo(map);
  })
  .catch(error => console.error('Error al cargar el archivo GeoJSON:', error));
