import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as L from 'leaflet';
import 'leaflet.markercluster';
import { API_URL } from '../../../env';


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

  x = this.get_GEOJSON();

  makeCapitalMarkers(map: L.Map): void {
    L.geoJSON(this.geoData, {
      pointToLayer: (feature, latlng) => {
        const circle = L.circleMarker([latlng.lat, latlng.lng], { radius: 20 }).addTo(map);;
        circle.setStyle({color: 'red'});
        circle.bindPopup(this.getContent(feature.properties));
        return circle;
      }
    }).addTo(map);
  }






  // ### The following snippet sets Marker instead of Circles ###
  /*  
    L.geoJSON(this.geoData, {
      pointToLayer: (feature: Feature, latlng: L.LatLng) => {
        const marker = L.marker(latlng, {
          icon: L.icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'assets/marker-icon.png',
            shadowUrl: 'assets/marker-shadow.png'
          })
        });
        marker.bindPopup(this.getContent(feature.properties));
        return marker;
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




/*
  makeCapitalMarkers(map: L.Map): void {
    
    console.log("Input for: Here we try to draw the fucking map")
    console.log(this.crises);
    console.log("Input Map: here the fuck ends")


    this.http.get(this.crises).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]);
       
        marker.addTo(map);
      }
    });
  }
}

*/





/* 

  makeCapitalCircleMarkers(map: L.Map): void {
    console.log("this is the fuck")
    //this.crises = this.fuckyou();
    console.log(this.crises);
    console.log("here the fuck ends")
    //this.http.get(JSON.stringify(this.crises)).subscribe((res: any) => {
    this.http.get(this.crises).subscribe((data: any) => {
    const marker = L.markerClusterGroup();
    const geojsonMarkers = L.geoJSON(data, {
      pointToLayer: (feature, latlng) => {
        const circle = L.circleMarker([latlng.lat, latlng.lng], { radius: 20 }).addTo(map);;
        circle.setStyle({color: 'red'});
        circle.bindPopup(this.popupService.makeEventPopup(feature.properties));
        return circle;
      }
    });
    geojsonMarkers.addTo(map);
  }); 



  //eventsListSubsGeoJSON: Subscription = this.fuckyou();

  // make eventsListSubsGeoJSON into a string and equal to crises
  //crises = this.eventsListSubsGeoJSON.toJSON;
  


  // crises = (JSON.parse(this.eventsListSubsGeoJSON));

/*
  fuckyou_too() {
    this.crises.fuckyou().subscribe(crises => this.geoData = crises);
    console.log("fuckyou_too")
    console.log(this.crises);
    return this.crises;
  };

/*
  fuckyou_too() {
    this.http.get<any>(`${API_URL}/events/geojson`)
      .subscribe(
        data => this.newgeoData = newgeoData);
  }




  // crises= JSON.parse(JSON.stringify(this.eventsListSubsGeoJSON));
  
 
  //crises = JSON.stringify(this.eventsListSubsGeoJSON.add(this.fuckyou()));
  


  fuckyou_too() {
  this.geoData = this.http
    .get(`${API_URL}/events/geojson`)
  }

  //
  //crises = this.fuckyou_too();

  eventsListSubsGeoJSON: Subscription = this.fuckyou();
  


fuckyou() {
    return this.http
      .get<any>(`${API_URL}/events/geojson`).subscribe({
              next: data => {
                this.geoData = (data);
                //console.log("Here we call the geoData from backend");
                //console.log(this.geoData);
                //console.log("geoData from backend received");
              },
              error: err => console.error(err),
              complete: () => {
              //console.log('done loading crises')
              console.log('fuckyou -> returning this.geoData')
              console.log(this.geoData);
              //c onsole.log('complete-geoData over')
               return this.geoData;
              },
              
    }); 
  }




    console.log (this.crises);

    crises: any = '/assets/data/Crisis_Kreis.Steinfurt.geojson';


    console.log(this.piss)   


  fuckyou_too() {
    this.http.get(`${API_URL}/events/geojson`)
      .subscribe(data => {
      this.values = data;
    },
    error => {
      console.log(error);
    },
    () => {
      console.log('fuckyou_too -> returning this.values')
      console.log(this.values);
      return this.values;
    });
  }

  values: any;
    newgeoData: any

   */
  