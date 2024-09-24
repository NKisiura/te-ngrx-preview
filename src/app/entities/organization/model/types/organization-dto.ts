export interface OrganizationDTO {
  readonly organizationId: number;
  readonly organizationName: string;
  readonly country: string;
  readonly businessType: string;
  readonly homeTerminalTimezone: string;
  readonly addressId: number;
}
