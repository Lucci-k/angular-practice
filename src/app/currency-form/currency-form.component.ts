import { Component, OnInit } from '@angular/core';
import { FormControl, NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.css']
})


export class CurrencyFormComponent implements OnInit {

  amount = 1.00
  to = ''
  from = ''
  finalAmount: number = 0

  options1 = [
    {name: "USD", value: 'usd'},
    {name: "JPY", value: 'jpy'}
  ]
  // currencies
  USD = 'usd'
  JPY = 'jpy'
  // conversions
  usdjpy = 109.81
  jpyusd = 0.0091

  constructor() { }

  ngOnInit(): void {
  }
  
  onMakeConversion(from: string, to: string, amount: any) {

    console.log(this.finalAmount)
    console.log(from+to, amount)
    switch(from+to) {
      case 'USDJPY':
        this.finalAmount = amount*this.usdjpy;
        break;
      case 'JPYUSD':
        this.finalAmount =  amount*this.jpyusd;
        break;
      default: 
      this.finalAmount = 0;
        break;
    }
    console.log(this.finalAmount)
  }
}
