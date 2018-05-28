import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-monthly-payment',
  templateUrl: './monthly-payment.component.html',
  styleUrls: ['./monthly-payment.component.css']
})
export class MonthlyPaymentComponent implements OnInit {

  constructor(private meta: Meta,title: Title) {   
    title.setTitle('Mortgage Monthly Payment Calculator - MeeFinancial Inc.');        
    this.meta.addTag({ name: 'description', content: 'Use the Mortgage Payment Calculator to discover the estimated amount of your monthly mortgage payments based on the mortgage option you choose.' },true);    
    this.meta.addTag({ name: 'author', content: 'MeeFinancial Inc.' }, true);
    this.meta.addTag({ name: 'keywords', content: 'mortgage payment, mortgage payment calculator, mortgage, toronto mortgage, canada mortgage, DIY mortgage, mortgage agent, mortgage broker, mortgage monthly payment, mortgage calculator' }, true);    
  }


  ngOnInit() {
  }

}
