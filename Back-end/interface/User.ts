import { Document } from "mongoose";

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    note: number;
    img: string;
    dateCreated: Date;
}
