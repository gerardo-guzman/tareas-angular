import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test-two',
  templateUrl: './test-two.component.html',
  styleUrls: ['./test-two.component.scss']
})
export class TestTwoComponent implements OnInit {

  formFechas: FormGroup;
  isLoading = false;
  domingos: string = null;

  constructor(
    public testSrv: TestService
  ) { }

  ngOnInit(): void {
    this.formFechas = new FormGroup({
      fechaInicial: new FormControl(null, Validators.required),
      fechaFinal: new FormControl(null, Validators.required)
    });
  }

  getSundays() {
    if (this.formFechas.invalid) {
      this.formFechas.markAllAsTouched();
      return;
    }
    const params = this.formFechas.value;
    params.fechaInicial = this.formatDate(params.fechaInicial);
    params.fechaFinal = this.formatDate(params.fechaFinal);
    this.isLoading = true;
    this.testSrv.getLastSundays(params).subscribe(data => {
      this.isLoading = false;
      console.log(data);
      this.domingos = data.domingos || 0;
    }, err => {
      this.isLoading = true;
      console.error(err);
    })
    console.log(params);
  }

  formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

}
