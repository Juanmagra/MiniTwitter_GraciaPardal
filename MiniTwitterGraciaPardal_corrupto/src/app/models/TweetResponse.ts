export interface User {
  id: number;
  username: string;
  descripcion: string;
  website: string;
  photoUrl: string;
  created: Date;
}

export class Tweet {
  id: number;
  mensaje: string;
  likes: any[];
  user: User;
  constructor(id:number, mensaje:string, likes:any, user:User){
    this.id = id;
    this.mensaje = mensaje;
    this.likes = likes;
    this.user = user;
  }

}


