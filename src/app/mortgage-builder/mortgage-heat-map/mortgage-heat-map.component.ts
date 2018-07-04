import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MortgageBuilderService} from '../mortgage-builder.service';
import { Mortgage, Purpose, OtherDebts, PersonalInfo, JobInfo, PropertyInfo } from '../data-model';
@Component({
  selector: 'app-mortgage-heat-map',
  templateUrl: './mortgage-heat-map.component.html',
  styleUrls: ['./mortgage-heat-map.component.css']
})
export class MortgageHeatMapComponent implements OnInit, OnChanges {

  @Input() formGroup: FormGroup;

  mortgage: Mortgage;

  constructor(private mbs: MortgageBuilderService) { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  resetForm() {
    this.mortgage = this.mbs.loadMortgageBuilder();
  }
}
