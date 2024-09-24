import { User, UserDTO } from "@entities/user/model/types";

export class UserAdapter {
  public static fromDTO(dto: UserDTO): User {
    const {
      userId,
      userFirstName,
      userLastName,
      email,
      userType,
      timeZone,
      isAdmin,
    } = dto;

    return {
      userId,
      userFirstName,
      userLastName,
      userFullName: `${userFirstName} ${userLastName}`,
      email,
      userType,
      timeZone,
      isAdmin,
    };
  }
}
