import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Permission } from "@shared/types/general";
import { User, UserAdapter, UserDTO } from "@entities/user/model";
import {
  Organization,
  OrganizationAdapter,
  OrganizationDTO,
} from "@entities/organization/model";

@Injectable({
  providedIn: "root",
})
export class CoreApiService {
  private readonly http = inject(HttpClient);

  private readonly PERMISSIONS_URL = "./mock-data/core/get-permissions.json";
  private readonly SESSION_USER_URL = "./mock-data/core/get-session-user.json";
  private readonly SESSION_ORGANIZATION_URL =
    "./mock-data/core/get-session-organization.json";

  public getPermissions(): Observable<Permission[]> {
    return this.http.get<Permission[]>(this.PERMISSIONS_URL);
  }

  public getSessionUser(): Observable<User> {
    return this.http
      .get<UserDTO>(this.SESSION_USER_URL)
      .pipe(map(UserAdapter.fromDTO));
  }

  public getSessionOrganization(): Observable<Organization> {
    return this.http
      .get<OrganizationDTO>(this.SESSION_ORGANIZATION_URL)
      .pipe(map(OrganizationAdapter.fromDTO));
  }
}
