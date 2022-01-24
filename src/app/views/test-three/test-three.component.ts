import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test-three',
  templateUrl: './test-three.component.html',
  styleUrls: ['./test-three.component.scss']
})
export class TestThreeComponent implements OnInit {

  yearsForm: FormGroup;
  isLoading = false;
  bisiestos: string = null;

  constructor(
    public testSrv: TestService
  ) { }

  ngOnInit(): void {
    this.yearsForm = new FormGroup({
      inicio: new FormControl(null, [Validators.required]),
      final: new FormControl(null, [Validators.required])
    });
  }

  getBisiestos() {
    if (this.yearsForm.invalid) {
      this.yearsForm.markAllAsTouched();
      return;
    }
    const params = this.yearsForm.value;
    params.inicio = params.inicio.toString();
    params.final = params.final.toString();
    this.testSrv.getBisiestos(params).subscribe(data => {
      console.log(data);
      this.isLoading = false;
      this.bisiestos = data.bisiestos || null;
    }, err => {
      this.isLoading = false;
      console.error(err);
    })
  }

}
