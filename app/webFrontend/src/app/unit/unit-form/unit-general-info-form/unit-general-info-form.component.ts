import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UnitFormDetailBase} from '../UnitFormDetailBase';
import {IUnit} from "../../../../../../../shared/models/units/IUnit";

@Component({
  selector: 'app-unit-general-info-form',
  templateUrl: './unit-general-info-form.component.html',
  styleUrls: ['./unit-general-info-form.component.scss']
})

export class UnitGeneralInfoFormComponent implements OnInit, UnitFormDetailBase {


  @Input()
  public model: any;

  public form: FormGroup;
  private active: boolean;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [this.model ? this.model.name : '', Validators.required],
      description: [this.model ? this.model.description : '', Validators.required],
      visible: [this.model ? this.model.visible : false]
    });
    this.active = this.model.visible;
  }

  updateDateTime(date: Date) {
    // TODO: selectedChanged event is deprecated
    // set time to 23:59
    date.setHours(23);
    date.setMinutes(59);
  }
  onChangeActive(value) {
    this.active = value.checked;
    this.model.visible = this.active;
  }


  addDetailsToSave(unit: IUnit): IUnit {
    unit.name = this.form.value.name;
    unit.description = this.form.value.description;
    return unit;
  }


}
