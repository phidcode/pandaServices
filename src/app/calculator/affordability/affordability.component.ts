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

  constructor(private meta: Meta, title: Title, private fb: FormBuilder) {
    title.setTitle('Mortgage Affordability Calculator - MeeFinancial Inc.');
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
          propertyTax: [0.00, [Validators.required]],
          // propertyTaxMonYr: ['1', [Validators.required]],
          chkPropertyTax: [false],
          condoFees: [0.00, [Validators.required]],
          chkCondoFees: [false],
          heatingCosts: [0.00, [Validators.required]],
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
    // console.log(this.affordabilityForm);
    this.submitted = true;
    const form = this.affordabilityForm.value;
    const annualIncomeForm = form.annualIncomeForm;
    const livingCostsForm = form.livingCostsForm;
    const debtPaymentsForm = form.debtPaymentsForm;

    const totalMonthlyIncome = (this.convertPriceToValidNum(annualIncomeForm.annualIncome) + this.convertPriceToValidNum(annualIncomeForm.coApplicantIncome)) / 12;
    const totalLivingCosts = (this.convertPriceToValidNum(livingCostsForm.propertyTax) + this.convertPriceToValidNum(livingCostsForm.condoFees) + this.convertPriceToValidNum(livingCostsForm.heatingCosts));
    const totalDebtPayments = (this.convertPriceToValidNum(debtPaymentsForm.creditCard) + this.convertPriceToValidNum(debtPaymentsForm.carPayment) + this.convertPriceToValidNum(debtPaymentsForm.otherLoanExpenses));
    console.log(totalMonthlyIncome, totalLivingCosts, totalDebtPayments);
  }

  convertPriceToValidNum(price) {
    return parseFloat(price.toString().replace(/[^0-9\.-]+/g, ''));
  }

  ngOnInit() {
    this.createForm();
  }

}
