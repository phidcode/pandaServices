import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-affordability',
  templateUrl: './affordability.component.html',
  styleUrls: ['./affordability.component.css']
})
export class AffordabilityComponent implements OnInit {

  constructor(private meta: Meta,title: Title) {    
    title.setTitle('Mortgage Affordability Calculator - MeeFinancial Inc.');
    this.meta.addTag({ name: 'description', content: 'Find out how much you can afford to purchase your home. Receive free consultation and apply for your mortgage. At MeeFinancial Inc., we\'re here to help.' },true);    
    this.meta.addTag({ name: 'author', content: 'MeeFinancial Inc.' }, true);
    this.meta.addTag({ name: 'keywords', content: 'affordability calculator, mortgage affordibility' }, true);    
  }

  ngOnInit() {
  }

}
