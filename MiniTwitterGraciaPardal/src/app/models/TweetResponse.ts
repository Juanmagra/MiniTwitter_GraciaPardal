export interface User{
  id: number;
  username: string;
  descripcion: string;
  website: string;
  photoUrl: string;
  created: Date;
}

export interface Tweet {
  id: number;
  mensaje: string;
  likes: any[];
  user: User;
  }


