import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test-five',
  templateUrl: './test-five.component.html',
  styleUrls: ['./test-five.component.scss']
})
export class TestFiveComponent implements OnInit {

  texto = new FormControl(null, Validators.required);
  isLoading = false;
  letters: any[];

  constructor(
    public testSrv: TestService
  ) { }

  ngOnInit(): void {
  }

  getLetras() {
    if (this.texto.invalid) {
      this.texto.markAllAsTouched();
      return;
    }
    const params = {
      texto: this.texto.value
    };
    this.isLoading = true;
    this.testSrv.getContadorLetras(params).subscribe(data => {
      this.isLoading = false;
      this.letters = data.letters;
      console.log(data);
    }, err => {
      this.isLoading = false;
      console.error(err);
    })
  }

}
