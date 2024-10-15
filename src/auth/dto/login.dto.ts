import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator"

export class LoginDto{
    @IsNotEmpty()
    @IsEmail()
    email: string
    
    @IsString()
    @Length(2,20)
    @IsNotEmpty()
    password: string

    
}