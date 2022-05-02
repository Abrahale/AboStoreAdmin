export interface userForm{
    first_name: string,
    last_name: string,
    username: string,
    email:string,
    address: String,
    city: string,
    country:string,
    postal_code: string,
    about_me: string,
}

//IDEA we should be able to build this structure from backend 
//By passing in what should be displayed for the field name, and what values to expect with their validation requirements