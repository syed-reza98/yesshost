// cPanel Phusion Passenger entry point for Next.js standalone
// cPanel's "Setup Node.js App" uses this file as the startup script.
// It simply delegates to the compiled standalone server.

process.chdir(__dirname);

// Set PORT if not already set by Passenger
process.env.PORT = process.env.PORT || "3000";
process.env.HOSTNAME = process.env.HOSTNAME || "0.0.0.0";

// Boot the Next.js standalone server
require("./.next/standalone/server.js");
