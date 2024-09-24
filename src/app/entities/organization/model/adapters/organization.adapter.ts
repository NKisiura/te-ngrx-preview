import {
  Organization,
  OrganizationDTO,
} from "@entities/organization/model/types";

export class OrganizationAdapter {
  public static fromDTO(dto: OrganizationDTO): Organization {
    const {
      organizationId,
      organizationName,
      country,
      businessType,
      homeTerminalTimezone,
      addressId,
    } = dto;

    return {
      organizationId,
      organizationName,
      country,
      businessType,
      homeTerminalTimezone,
      addressId,
    };
  }
}
