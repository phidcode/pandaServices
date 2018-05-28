import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private meta: Meta,title: Title) {    
    title.setTitle('DIY Mortgage - MeeFinancial Inc.');    
    this.meta.addTag({ name: 'description', content: 'Buying a home? We can help. Get pre-approved and qualify for a mortgage.' },true);    
    this.meta.addTag({ name: 'author', content: 'MeeFinancial Inc.' }, true);
    this.meta.addTag({ name: 'keywords', content: 'mortgage, toronto mortgage, canada mortgage, DIY mortgage, real estate, buying home, ontario real estate, toronto mortgage, diy mortgage' }, true);    
  }

  ngOnInit() {
  }

}
