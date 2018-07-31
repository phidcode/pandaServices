import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css']
})
export class AdviceComponent implements OnInit {

  slides = [
    { img: '../../assets/images/lenders/td_canada_trust.png' },
    { img: '../../assets/images/lenders/scotiabank.png' },
    { img: '../../assets/images/lenders/national_bank.png' },
    { img: '../../assets/images/lenders/merix.png' },
    { img: '../../assets/images/lenders/ing.png' },
    { img: '../../assets/images/lenders/hometrust.png' },
    { img: '../../assets/images/lenders/first_national.png' },
    { img: '../../assets/images/lenders/equitable_trust.png' },
    { img: '../../assets/images/lenders/duca.png' },
    { img: '../../assets/images/lenders/10-logo-B2B-Bank.png' },
    { img: '../../assets/images/lenders/9-Mcap.jpg' },
    { img: '../../assets/images/lenders/7-Eclipse.png' },
    { img: '../../assets/images/lenders/6-Optimum-Mortgage.png' },
    { img: '../../assets/images/lenders/4-Street-Capital.png' }
  ];
  slideConfig = {
    'slidesToShow': 10, 'slidesToScroll': 10,
    'autoplay': true, 'speed': 1500,
    'infinite': true, 'dots': true,
    'arrows': true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };

  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'zh']);
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

}
