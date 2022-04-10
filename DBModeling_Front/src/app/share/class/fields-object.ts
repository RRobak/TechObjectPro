import { fieldsObjectInterface } from '../interface/fields-object.interface';

export default class fieldsObject implements fieldsObjectInterface {
  fieldName: string;
  fieldType: string;
  isPK: boolean;
  allowNull: boolean;
  constructor(
    _fieldName: string,
    _fieldType: string,
    _isPK: boolean,
    _allowNull: boolean
  ) {
    this.fieldName = _fieldName;
    this.fieldType = _fieldType;
    this.isPK = _isPK;
    this.allowNull = _allowNull;
  }

}
