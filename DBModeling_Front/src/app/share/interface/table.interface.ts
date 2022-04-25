import { fieldsObjectInterface } from "./fields-object.interface";

export interface table{
    tableName:string;
    fields:[fieldsObjectInterface];
    setTableName():void;
    setField():void;
    addField():void;
    removeField():void;
}

