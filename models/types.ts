export namespace Models {
  export interface User {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    picturePath?: string;
    friends: string[];
    location: string;
    occupation: string;
    viewedProfile?: number;
    impressions?: number;
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
    updateAt: Date;
    tags: string[];
    images: string[];
    category: string;
    featuredImage: string;
  }
}
