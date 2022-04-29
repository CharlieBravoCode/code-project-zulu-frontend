import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from './map-services/marker.service';
import { ShapeService } from './map-services/shape.service';
import { Router } from '@angular/router';



const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map-module',
  templateUrl: './map-module.component.html',
  styleUrls: ['./map-module.component.scss']
})
export class MapModuleComponent implements OnInit, AfterViewInit {
  private map;
  private states;

  constructor(
    private markerService: MarkerService,
    private shapeService: ShapeService, 
    private router: Router
  ) { }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 52.2018, 7.5686 ],
      zoom: 10
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  private highlightFeature(e) {
    const layer = e.target;

    layer.setStyle({
      weight: 10,
      opacity: 1.0,
      color: '#DFA612',
      fillOpacity: 1.0,
      fillColor: '#FAE042'
    });
  }

  private resetFeature(e) {
    const layer = e.target;

    layer.setStyle({
      weight: 2,
      opacity: 0.5,
      color: '#000000',
      fillOpacity: 0.3,
      fillColor: '#808080'
    });
  }

  private initStatesLayer() {
    const stateLayer = L.geoJSON(this.states, {
      style: (feature) => ({
        weight: 2,
        opacity: 0.5,
        color: '#000000',
        fillOpacity: 0.3,
        fillColor: '#808080'
      }),
      onEachFeature: (feature, layer) => (
        layer.on({
          mouseover: (e) => (this.highlightFeature(e)),
          mouseout: (e) => (this.resetFeature(e)),
        })
      )
    });

    this.map.addLayer(stateLayer);
    stateLayer.bringToBack();
  }


  sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  reloadCurrentPage() {
      this.markerService.get_GEOJSON;
      this.markerService.makeCapitalMarkers(this.map)
      this.markerService.get_GEOJSON;
      this.markerService.makeCapitalMarkers(this.map)
     }

  async buttonReloadCurrentPage() {
      this.reloadCurrentPage();
      await this.sleep(100);
      this.reloadCurrentPage()
    }
  

  ngOnInit(): void {
    this.markerService.makeCapitalMarkers(this.map);
    this.buttonReloadCurrentPage();
    this.initMap();
    this.markerService.get_GEOJSON;
    this.markerService.makeCapitalMarkers(this.map);
    this.shapeService.getStateShapes().subscribe(states => {
      this.states = states;
      this.initStatesLayer();
    });
    this.markerService.get_GEOJSON;
    this.markerService.makeCapitalMarkers(this.map)
    
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.get_GEOJSON;
    this.markerService.makeCapitalMarkers(this.map);
    this.shapeService.getStateShapes().subscribe(states => {
      this.states = states;
      this.initStatesLayer();
    });
    this.markerService.get_GEOJSON;
    this.markerService.makeCapitalMarkers(this.map)
    
  }


/*
  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.get_GEOJSON;
    this.markerService.makeCapitalMarkers(this.map);
    this.shapeService.getStateShapes().subscribe(states => {
      this.states = states;
      this.initStatesLayer();
    });
    this.markerService.get_GEOJSON;
    this.markerService.makeCapitalMarkers(this.map)
  }
*/
  
}