import https from "https";

export interface WhmServerConfig {
  hostname: string;
  username: string;
  apiToken: string;
  port?: number;
}

export interface WhmApiResponse<T = any> {
  metadata: {
    result: number;
    reason: string;
    version: number;
    command: string;
  };
  data?: T;
}

export async function whmRequest<T = any>(
  server: WhmServerConfig,
  command: string,
  params: Record<string, string | number | boolean | undefined> = {}
): Promise<WhmApiResponse<T>> {
  const port = server.port || 2087;
  const searchParams = new URLSearchParams();
  searchParams.set("api.version", "1");

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      searchParams.set(key, String(value));
    }
  }

  const url = `https://${server.hostname}:${port}/json-api/${command}?${searchParams.toString()}`;

  const agent = new https.Agent({
    rejectUnauthorized: false, // Allows connection to cloud nodes with self-signed or internal SSL
  });

  const headers = {
    Authorization: `whm ${server.username}:${server.apiToken.trim()}`,
    Accept: "application/json",
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

  try {
    const res = await fetch(url, {
      method: "GET",
      headers,
      // @ts-expect-error Node fetch agent support
      agent,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`WHM HTTP error: ${res.status} ${res.statusText}`);
    }

    const json = (await res.json()) as WhmApiResponse<T>;
    return json;
  } catch (error: any) {
    clearTimeout(timeoutId);
    if (error.name === "AbortError") {
      throw new Error(`WHM request timed out after 30s for command: ${command}`);
    }
    throw error;
  }
}
