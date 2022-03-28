import { action, makeObservable, observable } from 'mobx';
import IUser from "../Interface/User";
import config from "../config";
import axios from "axios";

export interface UserStoreInterface {
    testValue: string;
    dataSelected: any;
    ListUser: IUser[] | [];
    upadeList: (data: any) => void;
    AddNewUSer: (user: IUser) => Promise<any>;
    getListUser: () => Promise<any>;
    getMoyenne: () => Promise<any>;
    filterUser: (email: string) => Promise<any>;
}


class UserStore implements UserStoreInterface {

    @observable testValue = "test";

    @observable dataSelected: any;

    @observable ListUser: IUser[] | [] = [{
        firstName: " string;",
        lastName: " string;",
        email: " string;",
        note: 0,
        img: " string;"
    }];

    constructor() {
        makeObservable(this);
    }

    @action upadeList = (data: IUser[] | []) => {
        this.ListUser = data;
    };

    @action AddNewUSer = async (
        user: IUser
    ) => {

        return await axios.post(
            `${config.servers.apiUrl}user`,
            {
                ...user
            }
        );

    };

    @action getListUser = async () => {

        return await axios.get(`${config.servers.apiUrl}user`);

    };

    @action filterUser = async (email: string) => {

        return await axios.post(`${config.servers.apiUrl}user/filter`, { email: email });

    };

    @action getMoyenne = async () => {

        return await axios.get(`${config.servers.apiUrl}user/moyenne`);

    };

}

export default new UserStore();