// Angular imports
import { ViewChild, Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { ValidationErrors } from '@angular/forms';

// Globe imports
import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import esriConfig from "@arcgis/core/config";
import { environment } from 'src/environments/environment';

// i18n imports
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  public view: any = null;
  searchDisable = true;
  toDisable = true;
  countries = ["AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "CV", "KH", "CM", "CA", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CD", "CG", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "CI", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "SZ", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "MK", "RO", "RU", "RW", "RE", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "UM", "US", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW", "AX"];
  statuses = ["finished", "ongoing"];
  validateForm!: UntypedFormGroup;
  @ViewChild('map', { static: true }) private map!: ElementRef;
  @ViewChild('searchBar', { read: ElementRef, static: false }) private searchBar!: ElementRef;

  constructor(
    private fb: UntypedFormBuilder,
    public translocoService: TranslocoService) {
    this.validateForm = this.fb.group({
      yearFrom: ['', [Validators.required],],
      yearTo: [{value:'', disabled: false}, [this.yearRangeValidator]],
      country: ['', [Validators.required]],
      parties: [[], [Validators.required]],
      status: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {


  }

  ngAfterViewInit(): void {
    this.initializeMap().then(() => {
      // The map has been initialized
      // console.log('The map is ready.');
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
        tilt: 75 //Perspective in degrees
      }
    });

    // Add Search widget
    view.ui.add(this.searchBar.nativeElement, "bottom-right")
    this.view = view;

    return this.view.when();
  }

  submitForm() {
    console.log(this.validateForm.value);
  }

  yearRangeValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    if (control.value)
      if (control.value < this.validateForm.controls['yearFrom'].value || control.value > new Date().getFullYear()) {
        this.searchDisable = true;
        return { confirm: true, error: true };
      } 
    this.searchDisable = false;
    return {};
  }

  // TODO When yearForm is empty, disable yearTo
  // yearFromValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
  //  if (control.value) {
  //   this.validateForm.controls['yearTo'].enable();
  //   this.searchDisable = false;
  //   this.toDisable = false; 
  //  }
  //  this.searchDisable 
  //  return {};
  // }

  reset() {
    this.validateForm.reset();
    this.searchDisable = true;
  }
}