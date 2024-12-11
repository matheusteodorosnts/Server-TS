export class Server {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    };
};

export const server = new Server("Server 1", 1)
export const server2 = new Server("Server 2", 2)