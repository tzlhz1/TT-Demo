interface Define{
    timestamps:boolean
}

export interface DB{
    database:string,
    username:string,
    password:string,
    host:string,
    port:number,
    dialect:string,
    logging:boolean,
    define:Define
}