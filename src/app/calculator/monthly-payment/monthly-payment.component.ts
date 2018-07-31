import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-monthly-payment',
  templateUrl: './monthly-payment.component.html',
  styleUrls: ['./monthly-payment.component.css']
})
export class MonthlyPaymentComponent implements OnInit {

  monthlyPaymentCalculatorForm: FormGroup;

  calDownPayment1 = 0;
  calDownPayment2 = 0;
  calDownPayment3 = 0;

  dftMortgageInsurance1 = 0;
  dftMortgageInsurance2 = 0;
  dftMortgageInsurance3 = 0;

  reqTotalMortgage1 = 0;
  reqTotalMortgage2 = 0;
  reqTotalMortgage3 = 0;

  estMonthlyPayment1 = 0;
  estMonthlyPayment2 = 0;
  estMonthlyPayment3 = 0;

  constructor(private meta: Meta,title: Title, private fb: FormBuilder, public translate: TranslateService) {   
    title.setTitle('Mortgage Monthly Payment Calculator - MeeFinancial Inc., Your Digital Mortgage');        
    this.meta.addTag({ name: 'description', content: 'Use the Mortgage Payment Calculator to discover the estimated amount of your monthly mortgage payments based on the mortgage option you choose.' },true);    
    this.meta.addTag({ name: 'author', content: 'MeeFinancial Inc.' }, true);
    this.meta.addTag({ name: 'keywords', content: 'mortgage payment, mortgage payment calculator, mortgage, toronto mortgage, canada mortgage, DIY mortgage, mortgage agent, mortgage broker, mortgage monthly payment, mortgage calculator' }, true);    
    this.createForm();

    translate.addLangs(['en', 'zh']);
    translate.setDefaultLang('en');
  }

  createForm() {
    this.monthlyPaymentCalculatorForm = this.fb.group({
      askingPrice: [0, [Validators.required, Validators.min(0)]],
      rateDownPayment1: [5.0, [Validators.required, Validators.min(5.0)]],
      rateDownPayment2: [10.0, [Validators.required, Validators.min(5.0)]],
      rateDownPayment3: [15.0, [Validators.required, Validators.min(5.0)]],
      yrsAmortizationPeriod1: [5, [Validators.required, Validators.min(0)]],
      yrsAmortizationPeriod2: [15, [Validators.required, Validators.min(0)]],
      yrsAmortizationPeriod3: [25, [Validators.required, Validators.min(0)]],
      rateMortgage1: [3.08, [Validators.required, Validators.min(0.0)]],
      rateMortgage2: [3.08, [Validators.required, Validators.min(0.0)]],
      rateMortgage3: [3.08, [Validators.required, Validators.min(0.0)]],
    });
  }

  PMT(ir, np, pv, fv, type) {
    /*
     * ir   - interest rate per month
     * np   - number of periods (months)
     * pv   - present value
     * fv   - future value
     * type - when the payments are due:
     *        0: end of the period, e.g. end of month (default)
     *        1: beginning of period
     */
    var pmt, pvif;

    fv || (fv = 0);
    type || (type = 0);

    if (ir === 0)
        return (pv + fv)/np;

    pvif = Math.pow(1 + ir, np);
    pmt = ir * pv * (pvif + fv) / (pvif - 1);

    if (type === 1)
        pmt /= (1 + ir);

    return pmt;
  }

  CMHC(homePrice, rateDownPayment){
    var downPayment = homePrice * (rateDownPayment/100);
    var mortgageAmount = homePrice - downPayment;
    var mortgageInsurance = 0.0; 
    var premium = 0.0;
    if(rateDownPayment >= 5 && rateDownPayment < 10){
      premium = 2.75;
    }
    else if(rateDownPayment >= 10 && rateDownPayment < 15){
      premium = 2.00;
    }
    else if(rateDownPayment >= 15 && rateDownPayment < 20){
      premium = 1.75; 
    }
    else{
      premium = 0.00;
    }
    mortgageInsurance = mortgageAmount * (premium/100);
    return mortgageInsurance;
  }

  convertInputToValidNum(input) {
    return parseFloat(input.toString().replace(/[^0-9\.-]+/g, ''));
  }

  onSubmit() {
    console.log(this.monthlyPaymentCalculatorForm.value);
    const {askingPrice, rateDownPayment1, rateDownPayment2, rateDownPayment3, yrsAmortizationPeriod1, yrsAmortizationPeriod2, yrsAmortizationPeriod3, rateMortgage1, rateMortgage2, rateMortgage3} = this.monthlyPaymentCalculatorForm.value;
    this.calDownPayment1 = this.convertInputToValidNum(askingPrice) * (rateDownPayment1/100);
    this.calDownPayment2 = this.convertInputToValidNum(askingPrice) * (rateDownPayment2/100);
    this.calDownPayment3 = this.convertInputToValidNum(askingPrice) * (rateDownPayment3/100);
    this.dftMortgageInsurance1 = this.CMHC(this.convertInputToValidNum(askingPrice), rateDownPayment1);
    this.dftMortgageInsurance2 = this.CMHC(this.convertInputToValidNum(askingPrice), rateDownPayment2);
    this.dftMortgageInsurance3 = this.CMHC(this.convertInputToValidNum(askingPrice), rateDownPayment3);
    this.reqTotalMortgage1 = askingPrice - this.calDownPayment1 + this.dftMortgageInsurance1;
    this.reqTotalMortgage2 = askingPrice - this.calDownPayment2 + this.dftMortgageInsurance2;
    this.reqTotalMortgage3 = askingPrice - this.calDownPayment3 + this.dftMortgageInsurance3;
    var effectiveMortgageRate1 = Math.pow((1 + (rateMortgage1 / 100) / 2), 2) - 1;
    var effectiveMortgageRate2 = Math.pow((1 + (rateMortgage2 / 100) / 2), 2) - 1;
    var effectiveMortgageRate3 = Math.pow((1 + (rateMortgage3 / 100) / 2), 2) - 1;
    this.estMonthlyPayment1 = this.PMT(effectiveMortgageRate1/12, yrsAmortizationPeriod1*12, this.reqTotalMortgage1, 0, 0);
    this.estMonthlyPayment2 = this.PMT(effectiveMortgageRate2/12, yrsAmortizationPeriod2*12, this.reqTotalMortgage2, 0, 0);
    this.estMonthlyPayment3 = this.PMT(effectiveMortgageRate3/12, yrsAmortizationPeriod3*12, this.reqTotalMortgage3, 0, 0);
  }

  ngOnInit() {
    this.createForm();
  }

}
