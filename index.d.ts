export type ErrorResponse = {
  code: number;
  message: string | string[];
  fields?: Record<string, string | string[]>;
};

export interface ServerResponse<T> {
  success: boolean;
  data: T | null;
  error: ErrorResponse | null;
}

export type UserRole = "admin" | "superadmin" | "editor" | "eventManager";

export type PictureCategory = "profile" | "post" | "ad";

export type UserStatus = "active" | "inactive";

export interface User {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  picturePath?: string;
  username: string;
  role: UserRole;
  createdAt?: Date;
  updatedAt?: Date;
  token?: string;
  status: UserStatus;
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
