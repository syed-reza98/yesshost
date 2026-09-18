import { whmRequest, WhmServerConfig } from "./client";

export interface CreateSessionOptions {
  username: string;
  service?: "cpaneld" | "whostmgrd" | "webmaild";
  app?: string; // e.g. 'FileManager_Home', 'Database_phpMyAdmin'
}

export interface SessionResult {
  cp_security_token: string;
  expires: number;
  service: string;
  session: string;
  url: string;
}

export async function createCpanelSession(
  server: WhmServerConfig,
  options: CreateSessionOptions
): Promise<string> {
  const service = options.service || "cpaneld";
  const params: Record<string, string> = {
    service,
    user: options.username,
  };

  if (options.app) {
    params.app = options.app;
  }

  const response = await whmRequest<SessionResult>(server, "create_user_session", params);

  if (response.metadata.result !== 1 || !response.data?.url) {
    throw new Error(response.metadata.reason || "Failed to create WHM user session");
  }

  return response.data.url;
}
