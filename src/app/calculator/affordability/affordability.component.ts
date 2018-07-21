import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-affordability',
  templateUrl: './affordability.component.html',
  styleUrls: ['./affordability.component.css']
})
export class AffordabilityComponent implements OnInit {

  affordabilityForm: FormGroup;
  // monyrs = [
  //   {id: '1', name: '/Month'},
  //   {id: '2', name: '/Year'},
  // ];
  submitted = false;
  GDSR = 0.32;
  TDSR = 0.40;
  maxAffordability = 0.0;
  downPayment = 0.0;
  downPaymentRate = 0.2;
  amortizationPeriod = 30;
  mortgageRate = 0.023;
  mortgageType = '5-Year Fixed';
  monthlyMortgagePayment = 0.0;

  constructor(private meta: Meta, title: Title, private fb: FormBuilder) {
    title.setTitle('Affordability Calculator - MeeFinancial Inc., Your Digital Mortgage');
    this.meta.addTag({ name: 'description', content: 'Find out how much you can afford to purchase your home. Receive free consultation and apply for your mortgage. At MeeFinancial Inc., we\'re here to help.' }, true);
    this.meta.addTag({ name: 'author', content: 'MeeFinancial Inc.' }, true);
    this.meta.addTag({ name: 'keywords', content: 'affordability calculator, mortgage affordibility' }, true);
    this.createForm();
  }

  createForm() {
      this.affordabilityForm = this.fb.group({
        annualIncomeForm: this.fb.group({
          annualIncome: [0.00, [Validators.required]],
          coApplicantIncome: [0.00, [Validators.required]],
        }),
        livingCostsForm: this.fb.group({
          propertyTax: [472.0, [Validators.required]],
          // propertyTaxMonYr: ['1', [Validators.required]],
          chkPropertyTax: [false],
          condoFees: [300.0, [Validators.required]],
          chkCondoFees: [false],
          heatingCosts: [118.0, [Validators.required]],
          chkHeatingCosts: [false],
        }),
        debtPaymentsForm: this.fb.group({
          creditCard: [0.00, [Validators.required]],
          carPayment: [0.00, [Validators.required]],
          otherLoanExpenses: [0.00, [Validators.required]],
        }),
      });
  }

  onSubmit() {
    this.submitted = true;
    var form = this.affordabilityForm.value;
    var annualIncomeForm = form.annualIncomeForm;
    var livingCostsForm = form.livingCostsForm;
    var debtPaymentsForm = form.debtPaymentsForm;

    var totalMonthlyIncome = (this.convertPriceToValidNum(annualIncomeForm.annualIncome) + this.convertPriceToValidNum(annualIncomeForm.coApplicantIncome)) / 12;
    var totalLivingCosts = (this.convertPriceToValidNum(livingCostsForm.propertyTax) + this.convertPriceToValidNum(livingCostsForm.condoFees) + this.convertPriceToValidNum(livingCostsForm.heatingCosts));
    var totalDebtPayments = (this.convertPriceToValidNum(debtPaymentsForm.creditCard) + this.convertPriceToValidNum(debtPaymentsForm.carPayment) + this.convertPriceToValidNum(debtPaymentsForm.otherLoanExpenses));

    if (totalMonthlyIncome <= 0) {
      return;
    }

    if (totalDebtPayments > 0) {
      this.monthlyMortgagePayment = totalMonthlyIncome * this.TDSR - totalLivingCosts - totalDebtPayments;
    }
    else {
      this.monthlyMortgagePayment = totalMonthlyIncome * this.GDSR - totalLivingCosts;
    }

    var EffectiveMortgageRate = Math.pow((1 + this.mortgageRate / 2), 2) - 1;
    this.maxAffordability = this.calculateAffordability(this.monthlyMortgagePayment, this.downPaymentRate, EffectiveMortgageRate/12, this.amortizationPeriod*12);
    this.downPayment = this.maxAffordability * this.downPaymentRate;
  }

  calculateAffordability(pmt, dp, ir, np) {
    var maxHomePrice = 0.0;
    var pvif = Math.pow(1 + ir, np); 
    if(ir === 0){
      maxHomePrice = pmt * np
    }
    else{
      maxHomePrice = (pmt * (pvif - 1)) / (ir * pvif);
    }
    return maxHomePrice * (1 + dp);
  }

  convertPriceToValidNum(price) {
    return parseFloat(price.toString().replace(/[^0-9\.-]+/g, ''));
  }

  ngOnInit() {
    this.createForm();
  }

}
