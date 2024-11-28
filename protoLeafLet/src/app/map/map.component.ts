import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'; // Importer Leaflet

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map: L.Map | undefined;

  async ngOnInit(): Promise<void> {
    if (typeof window !== 'undefined') {
      const L = await import('leaflet'); // Import dynamique


      this.map = L.map('map').setView([50.41136, 4.44448], 10); // centrée sur charleroi
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);

      L.marker([50.41136, 4.44448])
      .addTo(this.map)
      .bindPopup('Bonjour, charleroi!')
      .openPopup();
    }
  }
  
}
