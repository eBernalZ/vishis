import { ViewChild, Component, OnInit, ElementRef } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import esriConfig from "@arcgis/core/config";

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public view: any = null;
  validateForm!: UntypedFormGroup;
  
  yearFrom = "";
  yearTo = "";
  country = "";
  @ViewChild('map', { static: true }) private map!: ElementRef;
  @ViewChild('searchBar', { static: true }) private searchBar!: ElementRef;
  
  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      yearFrom: [null, [Validators.required]],
      yearTo: [null, [Validators.required]],
      checkPassword: [null, [Validators.required]],
      nickname: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      website: [null, [Validators.required]],
      captcha: [null, [Validators.required]],
      agree: [false]
    });

    this.initializeMap().then(() => {
      // The map has been initialized
      console.log('The map is ready.');
    });
  }

  initializeMap(): Promise<any> {
    const container = this.map.nativeElement;
    esriConfig.apiKey = environment.API_KEY;
    const map = new Map({
      basemap: "arcgis-topographic", //Basemap layer service
      ground: "world-elevation", //Elevation service
    });

    const view = new SceneView({
      container,
      map: map,
      camera: {
        position: {
          x: -118.808, //Longitude
          y: 33.961, //Latitude
          z: 2000 //Meters
        },
        tilt: 75
      }
    });
    view.ui.add(this.searchBar.nativeElement,"top-right")
    this.view = view;
    
    return this.view.when();
  }

  submitForm() {
    console.log("Form submitted");
  }
}
