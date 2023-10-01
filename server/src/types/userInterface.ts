import { Types } from "mongoose"
export interface UserInterface {
    _id?: Types.ObjectId;
    name?: string;
    email?: string;
    phone?: Number;
    password?: string;
    gender?: string;
    birthday?: Date;
    age?: number; //age
    address?: string;
    image?: string;
    about?: string;
    experience?: string;
    profession?: string;
    resume?: any;
    education?: string; //education

    page2q1?: string; //role
    page2q2?: string; //exp
    page2q3?: string; //joined
    page2q4?: string; //topic
    page2q5?: string; //language
    page2q6?: string;
    page2q7?: string;
    page2q8?: string;
    page2q9?: string;

    page3q1?: string;
    page3q2?: string; //workplace
    page3q3?: string; //timetable
    page3q4?: string; //location
}

export interface CreateUserInterface {
    name: string,
    email: string,
    phone?: number,
    password?: string,
    createdAt?: Date
}