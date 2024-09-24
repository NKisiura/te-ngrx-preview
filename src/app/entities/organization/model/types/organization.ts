export interface Organization {
  readonly organizationId: number;
  readonly organizationName: string;
  readonly country: string;
  readonly businessType: string;
  readonly homeTerminalTimezone: string;
  readonly addressId: number;
}
