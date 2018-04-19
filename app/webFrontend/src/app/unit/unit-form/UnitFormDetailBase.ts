import {IUnit} from "../../../../../../shared/models/units/IUnit";

export class UnitFormDetailBase{
  // default implementation
  addDetailsToSave(unit: IUnit): IUnit
  {
    // cast and change properties of DetailUnit
    // if something is invalid throw an Exception with errormessage
    return unit;
  };
}
