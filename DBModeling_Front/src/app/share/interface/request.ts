export interface Request {
    tables:[
        tableName:string,
        fields:[{
            fieldName:string,
            fieldType:string,
            isPK:boolean,
            allowNull:boolean,
        }]
    ];
    constraints:[
        {
            primaryTableName:string,
            foreignTableName:string,
        }
    ]

}