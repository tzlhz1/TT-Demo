interface Pool{
    max:number,
    min:number,
    idle:number
}

export interface DB{
    database:string,
    username:string,
    password:string,
    host:string,
    port:number,
    dialect:string,
    pool:Pool,
    logging:boolean
}