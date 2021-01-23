import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loanForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      monthlyIncome: [158000],
      monthlyExpense: [0],
      repaymentTanure: [6],
      haveExistingLone: [{ value: true }],
      existingLoanAmount: []
    })
  }

}
