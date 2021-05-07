import  { Room }  from "../room/room";


export class User {
    id: string;
    name: string;
    room: Room=null;

    constructor(id:string,name:string){
        this.id=id;
        this.name=name;
        this.room;
        User.allUsers.push(this);
    }

    static allUsers : User[] = [];
    static all(){
        return this.allUsers
    }
    static get(id:string){
        return this.allUsers.find((e)=>e.id===id)
    }
    getRoom(){
        return this.room;
    }

}
