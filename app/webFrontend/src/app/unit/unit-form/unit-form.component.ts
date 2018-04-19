import {Component, OnInit, Input, ViewChildren, QueryList} from '@angular/core';
import {ICourse} from '../../../../../../shared/models/ICourse';
import {ILecture} from '../../../../../../shared/models/ILecture';
import {IUnit} from '../../../../../../shared/models/units/IUnit';
import {NotificationService, UnitService} from '../../shared/services/data.service';
import {UnitFormDetailBase} from "./UnitFormDetailBase";
import {MatSnackBar} from "@angular/material";


@Component({
  selector: 'app-unit-form',
  templateUrl: './unit-form.component.html',
  styleUrls: ['./unit-form.component.scss']
})
export class UnitFormComponent implements OnInit {

  @Input() model: IUnit;
  @Input() type: string;
  @Input() course: ICourse;
  @Input() lecture: ILecture;
  @Input() onDone: () => void;
  @Input() onCancel: () => void;

  @ViewChildren(UnitFormDetailBase) viewChildren: QueryList<UnitFormDetailBase>;


  constructor(
    private unitService: UnitService,
    private snackBar: MatSnackBar,
    private notificationService: NotificationService) {}

  ngOnInit() {}

  saveUnit() {
    let unit = this.model;

    for (let _i = 0; _i < this.viewChildren.length; _i++) {
      let detailComponent = this.viewChildren[_i];
      try {
        unit = detailComponent.addDetailsToSave(unit)
      }catch (error) {
        //TODO Snackbar
        // cancel saving
        return;
      }
    }
    let prom = undefined;
    if(UnitFormComponent.isNewUnit(unit)){
      prom = this.unitService.createItem({unit: unit,lectureId: this.lecture._id });
    }else {
      prom = this.unitService.updateItem({unit: unit});
    }
    prom.then(
      (unit) => {
        this.snackBar.open('Unit saved', '', {duration: 3000});
        this.onDone();
        return this.notificationService.createItem(
          {
            changedCourse: this.course,
            changedLecture: this.lecture._id,
            changedUnit: unit,
            text: 'Course ' + this.course.name + ' has a new unit.'
          });
      },
      (error) => {
        const message = `Couldn\'t create unit`;
        this.snackBar.open(message, '', {duration: 3000});
      });
  }

  private static isNewUnit(unit:IUnit): boolean {
    return typeof unit._id === 'undefined';
  }
}
