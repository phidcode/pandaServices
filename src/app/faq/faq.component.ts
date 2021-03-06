import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private meta: Meta,title: Title, public translate: TranslateService) {    
    title.setTitle('FAQs - MeeFinancial Inc., Your Digital Mortgage');    
    this.meta.addTag({ name: 'description', content: 'Buying a home? We can help. Get pre-approved and qualify for a mortgage.' },true);    
    this.meta.addTag({ name: 'author', content: 'MeeFinancial Inc.' }, true);
    this.meta.addTag({ name: 'keywords', content: 'faq mortgage, toronto mortgage, canada mortgage, DIY mortgage, real estate, buying home, ontario real estate, toronto mortgage, diy mortgage' }, true);    
  
    translate.addLangs(['en', 'zh']);
    translate.setDefaultLang('en');
  }


  ngOnInit() {
  }

}
