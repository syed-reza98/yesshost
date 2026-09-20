import { NextResponse } from "next/server";
import os from "os";

export const dynamic = "force-dynamic";

export async function GET() {
  const cpus = os.cpus();
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMem = totalMem - freeMem;
  const memUsagePercent = Math.round((usedMem / totalMem) * 100);
  const uptimeSeconds = os.uptime();

  const days = Math.floor(uptimeSeconds / (24 * 3600));
  const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);

  const nodes = [
    {
      id: "bdix-core-01",
      name: "BDIX Dhaka Core 01",
      location: "Dhaka, Bangladesh",
      datacenter: "Colocity BDIX Tier III",
      status: "operational",
      uptimePercent: "99.99%",
      pingMs: 2,
      services: {
        http: true,
        https: true,
        cpanel: true,
        mysql: true,
        dns: true,
        ftp: true,
      },
    },
    {
      id: "usa-premium-01",
      name: "USA Premium Cloud 01",
      location: "Hillsboro, Oregon, USA",
      datacenter: "Infomart Tier IV",
      status: "operational",
      uptimePercent: "99.98%",
      pingMs: 198,
      services: {
        http: true,
        https: true,
        cpanel: true,
        mysql: true,
        dns: true,
        ftp: true,
      },
    },
    {
      id: "sgp-edge-01",
      name: "Singapore Low Latency Edge",
      location: "Jurong, Singapore",
      datacenter: "Equinix SG1",
      status: "operational",
      uptimePercent: "99.99%",
      pingMs: 38,
      services: {
        http: true,
        https: true,
        cpanel: true,
        mysql: true,
        dns: true,
        ftp: true,
      },
    },
  ];

  return NextResponse.json({
    overallStatus: "operational",
    system: {
      uptimeText: `${days}d ${hours}h ${minutes}m`,
      memoryUsagePercent: memUsagePercent,
      cpuCount: cpus.length,
      platform: os.platform(),
    },
    nodes,
    lastChecked: new Date().toISOString(),
  });
}
