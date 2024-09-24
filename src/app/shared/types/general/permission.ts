type PermissionPrefix = "read" | "update" | "create" | "delete" | "import";

export type Permission = `${PermissionPrefix}.${Uppercase<string>}`;

export enum PermissionsCheckMode {
  REQUIRED_ALL,
  REQUIRED_ONE_OF,
}
