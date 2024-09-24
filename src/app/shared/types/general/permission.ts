type PermissionPrefix = "read" | "update" | "create" | "delete" | "import";

export type Permission = `${PermissionPrefix}.${Uppercase<string>}`;
