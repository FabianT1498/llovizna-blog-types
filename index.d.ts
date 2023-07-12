export interface ServerResponse<T> {
  success: boolean;
  data: T | null;
  error: {
    code: number;
    message: string | Array<string>;
  } | null;
}

export enum UserRole {
  Admin = "admin",
  Superadmin = "superadmin",
  Editor = "editor",
  EventManager = "eventManager",
}

export interface User {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  picturePath?: string;
  username: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  token?: string;
}

export interface Comment {
  _id?: string;
  authorId: string;
  postId: string;
  parentComment: string | null;
  content: string;
}

export interface Post {
  _id?: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  tags?: string[];
  images?: string[];
  category: string;
  featuredImage?: string;
}
