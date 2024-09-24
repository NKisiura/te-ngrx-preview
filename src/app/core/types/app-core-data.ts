import { AppConstants, Permission } from "@shared/types/general";
import { User } from "@entities/user/model";
import { Organization } from "@entities/organization/model";

export interface AppCoreData {
  readonly permissions: Permission[];
  readonly constants: AppConstants;
  readonly sessionUser: User;
  readonly sessionOrganization: Organization;
}
