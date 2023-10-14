export type User = {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  about: string | null;
  _createdAt: string;
  image: string;
};
