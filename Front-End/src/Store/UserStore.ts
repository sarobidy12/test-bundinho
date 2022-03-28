import { action, makeObservable, observable } from 'mobx';
import IUser from "../Interface/User";
import config from "../config";
import axios from "axios";

export interface UserStoreInterface {
    ListUser: IUser[] | any[];
    loading: boolean;
    upadeList: (data: any) => void;
    AddNewUSer: (user: IUser) => Promise<any>;
    getListUser: () => Promise<any>;
    getMoyenne: () => Promise<any>;
    filterUser: (email: string) => Promise<any>;
    setLoading: (loading: boolean) => void;
}

class UserStore implements UserStoreInterface {

    @observable loading = false;

    @observable ListUser: IUser[] | any[] = [{
        firstName: "test",
        lastName: " test;",
        email: " test;",
        note: 0,
        img: " test;",
        dateCreated: new Date()
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


    @action setLoading = async (loading: boolean) => {

        this.loading = loading;

    };

}

export default new UserStore();
