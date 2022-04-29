import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as L from 'leaflet';
import 'leaflet.markercluster';
import { API_URL } from '../../../env';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class MarkerService {
  
  constructor(
   private http: HttpClient,
  ) { }
   
  geoData: any

  get_GEOJSON() {
    return this.http
      .get<any>(`${API_URL}/events/geojson`).subscribe({
              next: data => {
                this.geoData = (data);
              },
              error: err => console.error(err),
              complete: () => {
              console.log('get_GEOJSON -> returning this.geoData')
              console.log(this.geoData);
              return this.geoData;
              },
    }); 
  }


  makeCapitalMarkers(map: L.Map): void {
    
    var x = this.get_GEOJSON();

  // ### The following snippet sets draws markers ###
    L.geoJSON(this.geoData, {
      pointToLayer: (feature, latlng) => {
        const marker = L.marker(latlng, {
          icon: L.icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'assets/leaflet/marker-icon-red.png'
            //iconUrl: 'assets/marker-icon.png',
            //shadowUrl: 'assets/marker-shadow.png'
          })
        });
        marker.bindPopup(this.getContent(feature.properties));
        return marker;
      }
    }).addTo(map);
  }


  // ### The following snippet draws circles ###
  /*
    L.geoJSON(this.geoData, {
      pointToLayer: (feature, latlng) => {
        const circle = L.circleMarker([latlng.lat, latlng.lng], { radius: 20 }).addTo(map);;
        circle.setStyle({color: 'red'});
        circle.bindPopup(this.getContent(feature.properties));
        return circle;
      }
    }).addTo(map);
  }
  */

  getContent(properties: any): string {
    return `
      <h3>${properties.title}</h3>
      <p>${properties.location}</p>
      <p>${properties.identifier}</p>
    `;
  }

}



  