export interface constraint{
    primaryTableName:string;
    foreignTableName:string;
    primaryKeyName:string;
    foreignKeyName:string;
    setConstraint():void;
    checkConstraint():boolean;
}