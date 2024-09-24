import { UserType } from "./user-type";

export interface User {
  readonly userId: number;
  readonly userFirstName: string;
  readonly userLastName: string;
  readonly userFullName: string;
  readonly email: string;
  readonly userType: UserType;
  readonly timeZone: string;
  readonly isAdmin: boolean;
}
