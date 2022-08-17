---
title: 'OpenStreetMap & Leaflet - Angular'
date: '2022-08-17'
tech: 'Angular'
---

[![OpenStreetMap demo](/public/images/openstreet/openstreetmap.png)](https://peanuts-83.github.io/maps_nice)
[My Github repository](https://github.com/Peanuts-83/maps_nice)

Curious to know how to implement some interractive maps in your projects ? Want to make use of public data to enrich your map and fit your needs ?

Follow this quick guide...

## Easy setup

Your existing angular project requires the [Leaflet library](https://leafletjs.com/) to manage map datas. We are here using OpenStreetMap, but you can use any convenient map service you want, such as GoogleMap or any other.

```bash
npm i leaflet@latest
```

After install, generate a dedicated component called *map*.

```bash
ng g c map --skip-tests
```
The template of this component will contain the map object, assigned to a div with an id named **map**, like this :

```html
<div id="map"></div>
```

As you need to access the *#id element of the DOM* for inserting the map, you require to initiate the map in the *AfterInitView* lifecycle hook.

The *Leaflet library* is imported as *L*, and all the components will be derivated from it (L.Map, L.marker, L.popup etc...). The map is defined by the id tagname (for targeting insertion) and some options such as map center coordinates and zoom value. This part of map is made of a lot of *tiles* on a layer you have to call with the right service URL. This is where you call the OpenStreetMap service, or any other you want.

You finally add these tiles to the map you just created.

```javascript
import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map;

  private initMap(): void {
    this.map = L.Map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });


    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
```

The tiles will appear in the wrong order, so you need to add *"./node_modules/leaflet/dist/leaflet.css"* to the **styles** parameter of *angular.json*.

All the additional tools, like **markers** or **popups**, will be added to the map object in the *AfterViewInit* lifecycle hook.

## Services

To add informations to enrich your map, you will have to access data with **geoJSON** format. I currently used open data from the Nice city in [this website](http://opendata.nicecotedazur.org/data/dataset?res_format=geojson). These static datas are placed in *assets/data*, but you can of course access data from an API to get more fresh and updated values.

``` javascript
// Marker Service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  ports: string = '/assets/data/localisation-des-ports.geojson';

  constructor(private http: HttpClient) {
  }

  makePortMarkers(map: L.map): void {
    this.http.get(this.ports).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]);

        marker.addTo(map);
      }
    });
  }
}

// Map Component
...
constructor(private markerService: MarkeService) {} // don't forget to import the service!

ngAfterViewInit(): void {
    this.initMap()
    this.markerService.makePortMarkers(this.map)    // call the service's method with the map as a parameter
}
```

The global idea is to make up some services calling the data sources with **HttpClient module** in order to setup **observables** you will subscribe to in the *AfterViewInit map component*.




You can see a demo of this app in [my demo page](https://peanuts-83.github.io/maps_nice/).

[My Github repository](https://github.com/Peanuts-83/maps_nice)

*[For the whole tutorial, explanations and API documentation, please check the references websites given in the README.md](https://github.com/Peanuts-83/maps_nice/blob/master/README.md)*
