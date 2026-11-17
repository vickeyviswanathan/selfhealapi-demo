const BC_HOST = "https://api.businesscentral.dynamics.com";

export function getCompaniesEndpoint(tenantId: string) {
  return `${BC_HOST}${"/v1.0/companies"}?tenant=${tenantId}`;
}
