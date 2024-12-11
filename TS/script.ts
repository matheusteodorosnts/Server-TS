import { Offline, Online } from "./status";
import { User, user1, user2, user3, user4, user5 } from "./users";
import { Server, server, server2 } from "./servidores";

console.log(`Name: ${server.name}| ID: ${server.id} | Users: ${user1.name} ${user1.id} ${user1.status} | ${user2.name} ${user2.id} ${user2.status}`)
console.log(`Name: ${server2.name}| ID: ${server2.id} | Users: ${user3.name} ${user3.id} ${user3.status} | ${user4.name} ${user4.id} ${user4.status} | ${user5.name} ${user5.id} ${user5.status}`)