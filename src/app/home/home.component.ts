import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loanForm: FormGroup;
  income = { min: 100000, max: 300000, current: 200000, percent: 0 }
  expense = { min: 10000, max: 100000, current: 25000, percent: 0 }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      monthlyIncome: [this.income.current, [Validators.min(this.income.min), Validators.max(this.income.max)]],
      monthlyExpense: [this.expense.current, [Validators.min(this.expense.min), Validators.max(this.expense.max)]],
      repaymentTanure: [6],
      haveExistingLone: [{ value: true }],
      existingLoanAmount: []
    })
    this.onRangeChange(this.income);
    this.onRangeChange(this.expense);
  }
  onRangeChange(data) {
    data.percent = Math.ceil(((data.current - data.min) * 100) / (data.max - data.min))
  }

}
