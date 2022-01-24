import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test-four',
  templateUrl: './test-four.component.html',
  styleUrls: ['./test-four.component.scss']
})
export class TestFourComponent implements OnInit {

  formMatriz: FormGroup;
  isLoading = false;
  matrix: any[];
  resultado: number;

  constructor(
    public testSrv: TestService
  ) { }

  ngOnInit(): void {
    this.formMatriz = new FormGroup({
      n: new FormControl(null, [Validators.required, Validators.min(2)]),
      rotate: new FormControl('2,-3,1', Validators.required),
      x: new FormControl(null, [Validators.required, Validators.min(0)]),
      y: new FormControl(null, [Validators.required, Validators.min(0)])
    });
  }

  getCoordenada() {
    if (this.formMatriz.invalid) {
      this.formMatriz.markAllAsTouched();
      return;
    }
    const values = this.formMatriz.value;
    this.createMatrix(values.n);
    const params = {
      n: values.n.toString(),
      rotate: values.rotate,
      coords: `${values.x},${values.y}`
    };
    this.isLoading = true;
    this.testSrv.getMatrixCoord(params).subscribe(data => {
      console.log(data);
      this.resultado = data.resp;
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
      console.error(err);
    })

  }

  createMatrix(n: number) {
    const matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = []
        for (let j = 0; j < n; j ++) {
            matrix[i].push(i * n + j + 1);
        }   
    }
    this.matrix = matrix;
  }
}
