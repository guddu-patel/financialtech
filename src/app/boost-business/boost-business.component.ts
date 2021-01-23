import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boost-business',
  templateUrl: './boost-business.component.html',
  styleUrls: ['./boost-business.component.scss']
})
export class BoostBusinessComponent implements OnInit {
  features = [
    {
      title: 'Quick cash disbursement',
      'description': 'Get terms loans that your business needs within 72 hrs',
      img: '/assets/img/Get Paid Instantly.png'
    },
    {
      title: 'Low-interest rate',
      'description': 'Achieve your financial goals with an amazing interest rate starting at 13% per annum',
      img: '/assets/img/Low interest rate.png'
    },
    {
      title: 'Zero Paperwork',
      'description': 'Get started instantly by submitting only your basic details & bank statements',
      img: '/assets/img/Secure Payments.png'
    },
    {
      title: 'Ace your business finances',
      'description': 'Manage banking, accounting & everything in between, on one platform',
      img: '/assets/img/freelancer_feature_icon_6@1.5x.png'
    },
    {
      title: 'Loans to fight COVID-19',
      'description': 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh',
      img: '/assets/img/Covid.png'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
