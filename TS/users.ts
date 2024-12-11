import { Offline, Online } from "./status"

export class User {
    name: string;
    id: number;
    status: boolean;

    constructor(name: string, id: number, status: boolean) {
        this.name = name
        this.id = id
        this.status = status
    };
};

export const user1 = new User("User 1", 23131, Online)
export const user2 = new User("User 2", 317731, Offline)
export const user3 = new User("User 3", 161361, Offline)
export const user4 = new User("User 4", 31231, Online)
export const user5 = new User("User 5", 31231, Offline)