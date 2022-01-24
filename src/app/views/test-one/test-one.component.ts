import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.scss']
})
export class TestOneComponent implements OnInit {

  formClima: FormGroup;
  isLoading = false;
  forecasts: any[] = []
  constructor(
    public testSrv: TestService
  ) { }

  ngOnInit(): void {
    this.formClima = new FormGroup({
      lat: new FormControl(null, [Validators.required, Validators.min(-90), Validators.max(90)]),
      lon: new FormControl(null, [Validators.required, Validators.min(-180), Validators.max(180)])
    });
  }

  getForecast() {
    if (this.formClima.invalid) {
      this.formClima.markAllAsTouched();
      return;
    }
    const params = this.formClima.value;
    params.lat = params.lat.toString();
    params.lon = params.lon.toString();
    this.isLoading = true;
    this.testSrv.getClima(params).subscribe(data => {
      console.log(data);
      this.isLoading = false;
      this.forecasts = data.datos;
    }, err => {
      console.error(err);
      this.isLoading = false;
    })
  }

}
