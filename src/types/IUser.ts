export type IUser = {
  userName: string;
  name: string;
  password: string;
  type: "admin" | "tester" | "user";
  _id: string;
};
