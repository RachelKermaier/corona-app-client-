import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocationService } from 'src/app/services/location.service';
import { Location } from 'src/app/models/Location';
import { switchAll } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-report-your-path',
  templateUrl: './report-your-path.component.html',
  styleUrls: ['./report-your-path.component.scss']
})
export class ReportYourPathComponent implements OnInit {
  locationsList!: Location[];
  newLocation: Location = new Location();
  LocationForm: FormGroup = new FormGroup({
    StartDate: new FormControl(new Date(),Validators.required),
    EndDate: new FormControl(new Date(),Validators.required),
    City: new FormControl("",Validators.required),
    Address: new FormControl("",Validators.required),
    PatientID: new FormControl("",Validators.required)
  });
  constructor(private _location: LocationService) { }

  ngOnInit(): void {
  }
  getLocationById() {
    let id = this.LocationForm.controls["PatientID"].value;
    if (!id) {
      Swal.fire({
        title: "Ooops...",
        icon: "error",
        text: "you must enter your ID!"
      })
    }
    else if(!RegExp("^[0-9]{9}$").test(id))
{
  Swal.fire({
    title: "Ooops...",
    icon: "error",
    text: "you ID is not valied!",
    showConfirmButton:false
  })
}
    else {
      this._location.getAllLocationByPatientId(id).subscribe(data => {
        this.locationsList = data
      })
    }
  }
  AddLocation() {

    this.newLocation.startDate = this.LocationForm.controls["StartDate"].value;
    this.newLocation.endDate = this.LocationForm.controls["EndDate"].value;
    this.newLocation.city = this.LocationForm.controls["City"].value;
    this.newLocation.address = this.LocationForm.controls["Address"].value;
    this.newLocation.patientId = this.LocationForm.controls["PatientID"].value;
    if (!this.newLocation || !this.newLocation.startDate || !this.newLocation.endDate || !this.newLocation.address || !this.newLocation.city || !this.newLocation.patientId) {
      Swal.fire({
        title: "Ooops...",
        icon: "error",
        text: "you must fill all the fileds!"
      })
    }else if(!RegExp("^[0-9]{9}$").test(this.newLocation.patientId))
    {
      Swal.fire({
        title: "Ooops...",
        icon: "error",
        text: "you ID is not valied!",
        showConfirmButton:false
      })
    }
    else {
      this._location.addNewLocation(this.newLocation).subscribe(() => {
        this.getLocationById()
      })
    }
  }
}
