import { table } from "../interface/table.interface";
import fieldsObject from "./fields-object";
export class Table implements table {
    tableName: string ;
    fields: [fieldsObject];

    constructor()
    {
        this.tableName = "";
        this.fields=[new fieldsObject("","",false,false)];
    }
    

    setTableName(): void {
        throw new Error("Method not implemented.");
    }
    setField(): void {
        throw new Error("Method not implemented.");
    }
    addField(): void {
        throw new Error("Method not implemented.");
    }
    removeField(): void {
        throw new Error("Method not implemented.");
    }
}
