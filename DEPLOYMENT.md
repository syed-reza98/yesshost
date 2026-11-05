# 🚀 YessHost — cPanel Deployment Guide

**Domain:** `www.yesshost.com` / `yesshost.com`  
**Server Host:** `s1321.sgp1.mysecurecloudhost.com` (IP: `192.250.235.43`)  
**Stack:** Next.js 15 (standalone) + MySQL/MariaDB 10.6 (cPanel) + LiteSpeed Web Server + NextAuth v5

---

## Production Credentials & Database

- **cPanel Username:** `yesshost`
- **MySQL Database:** `yesshost_yesshost`
- **MySQL User:** `yesshost_dbuser`
- **MySQL Password:** `YessHost_Db_2026!Secure`
- **Database Connection URI:** `mysql://yesshost_dbuser:YessHost_Db_2026!Secure@127.0.0.1:3306/yesshost_yesshost`
- **Node.js Version:** 20.x LTS (Virtual Environment: `/home/yesshost/nodevenv/app/20/bin/node`)
- **Application Root:** `/home/yesshost/app`
- **Web Document Root:** `/home/yesshost/public_html`

---

## Step 2 — Build the App Locally

On your **local machine** (not the server), run:

```bash
cd /path/to/yesshost

# Install dependencies
npm install

# Build for production (standalone output)
npm run build:cpanel
```

This creates `.next/standalone/` with everything needed to run the app.

---

## Step 3 — Prepare the Upload Package

After building, create a zip of these specific files/folders:

```
yesshost/
├── .next/             ← entire build output
├── public/            ← static assets
├── app.js             ← Passenger entry point
├── package.json
├── .env               ← (you'll create this — see Step 4)
└── node_modules/      ← NOT needed (standalone bundles deps)
```

> **Important:** The `.next/standalone/` folder already contains all Node modules needed. You do NOT need to upload `node_modules/`.

Create a zip from your terminal:

```bash
# From the project root
zip -r yesshost-deploy.zip .next/ public/ app.js package.json .htaccess
```

---

## Step 4 — Create the Production `.env` File

On your **local machine**, create a file named `.env` with these contents:

```env
DATABASE_URL="mysql://yessban2_syed:oushodhwala2026@127.0.0.1:3306/yessban2_yesshost"

AUTH_SECRET="run-this: openssl rand -base64 32"
AUTH_TRUST_HOST="true"
NEXTAUTH_URL="https://host.yessbangla.top"

CRON_SECRET="any-random-secret-string-here"

AZURE_WHM_HOST="yesshost-cpanel.eastasia.cloudapp.azure.com"
AZURE_WHM_IP="20.205.120.22"
AZURE_WHM_USER="root"
AZURE_WHM_TOKEN="INSVHR5CGF22G438OZO5675NO30PPR8A"

NODE_ENV="production"
PORT="3000"
HOSTNAME="0.0.0.0"
```

**Generate a secure AUTH_SECRET:**
```bash
openssl rand -base64 32
```
Replace `"run-this: openssl rand -base64 32"` with the output.

---

## Step 5 — Set Up Node.js App in cPanel

1. In cPanel → scroll to **Software** → click **Setup Node.js App**
2. Click **Create Application**
3. Fill in:

| Field | Value |
|-------|-------|
| Node.js version | **18.x** or **20.x** (latest available) |
| Application mode | **Production** |
| Application root | `host.yessbangla.top` |
| Application URL | `host.yessbangla.top` |
| Application startup file | `app.js` |

4. Click **Create**
5. cPanel will show you the **virtual environment path** — note it down (e.g., `/home/yessban2/nodevenv/host.yessbangla.top/18`)

---

## Step 6 — Upload Files via cPanel File Manager

1. In cPanel → **File Manager** → navigate to `public_html/host.yessbangla.top/` (or the directory cPanel set for the Node.js app)
2. Click **Upload** → upload the `yesshost-deploy.zip`
3. Right-click the zip → **Extract** → extract to the current directory
4. Upload your `.env` file to the same directory

Your directory should look like:

```
~/host.yessbangla.top/
├── .next/
│   └── standalone/
│       ├── server.js
│       ├── .next/
│       └── node_modules/
├── public/
├── app.js
├── .env
├── .htaccess
└── package.json
```

---

## Step 7 — Run Database Migrations (SSH)

Connect via SSH (cPanel → **Terminal** or via SSH client):

```bash
ssh yessban2@host.yessbangla.top
```

Navigate to your app directory:

```bash
cd ~/host.yessbangla.top
```

Run the database migration to create all tables:

```bash
# Option A: Run the SQL migration file directly (recommended for first deploy)
mysql -u yessban2_syed -p'oushodhwala2026' yessban2_yesshost < .next/standalone/.next/../../../drizzle/0000_init.sql
```

Or if you want to use drizzle-kit (requires Node/npx on server):

```bash
# Option B: Use drizzle-kit push (needs local drizzle config)
DATABASE_URL="mysql://yessban2_syed:oushodhwala2026@127.0.0.1:3306/yessban2_yesshost" npx drizzle-kit push
```

**Verify tables were created:**
```bash
mysql -u yessban2_syed -p'oushodhwala2026' yessban2_yesshost -e "SHOW TABLES;"
```

---

## Step 8 — Import SQL via cPanel phpMyAdmin (Alternative to Step 7)

If SSH is not available:

1. cPanel → **phpMyAdmin**
2. Select database `yessban2_yesshost` from the left panel
3. Click **Import** tab
4. Upload the file: `drizzle/0000_init.sql` from your local machine
5. Click **Go** — all tables will be created

---

## Step 9 — Set Environment Variables in cPanel Node.js App

1. Go back to **Setup Node.js App** in cPanel
2. Click **Edit** on your app
3. Scroll to **Environment Variables** section
4. Add each variable from your `.env` file one by one:

| Key | Value |
|-----|-------|
| `DATABASE_URL` | `mysql://yessban2_syed:oushodhwala2026@127.0.0.1:3306/yessban2_yesshost` |
| `AUTH_SECRET` | *(your generated secret)* |
| `AUTH_TRUST_HOST` | `true` |
| `NEXTAUTH_URL` | `https://host.yessbangla.top` |
| `CRON_SECRET` | *(your cron secret)* |
| `AZURE_WHM_HOST` | `yesshost-cpanel.eastasia.cloudapp.azure.com` |
| `AZURE_WHM_IP` | `20.205.120.22` |
| `AZURE_WHM_USER` | `root` |
| `AZURE_WHM_TOKEN` | `INSVHR5CGF22G438OZO5675NO30PPR8A` |
| `NODE_ENV` | `production` |
| `PORT` | `3000` |
| `HOSTNAME` | `0.0.0.0` |

5. Click **Save**

> **Tip:** You can also just upload the `.env` file to the app root — the standalone server reads it automatically.

---

## Step 10 — Start the Application

1. In **Setup Node.js App** → click **Start** (▶) on your app
2. Wait 10–30 seconds for it to initialize
3. Visit `https://host.yessbangla.top` in your browser

---

## Step 11 — Seed the Database (Optional)

To create the initial admin user and sample data:

Via SSH:

```bash
cd ~/host.yessbangla.top
# Copy drizzle config and seed file
node -e "
const { execSync } = require('child_process');
// Or run seed directly if tsx is available
execSync('npx tsx src/lib/db/seed.ts', { stdio: 'inherit' });
"
```

Or on your **local machine** pointed at the production database:

```bash
DATABASE_URL="mysql://yessban2_syed:oushodhwala2026@YOUR_SERVER_IP:3306/yessban2_yesshost" npm run db:seed
```

> ⚠️ Only run seed on a fresh database — it may overwrite data.

---

## Troubleshooting

### App shows 500 Error
```bash
# Check Node.js app logs in cPanel
# Setup Node.js App → View Log
```

### Database connection refused
- Verify `127.0.0.1` is correct (cPanel MySQL is always local)
- Check the username format: `yessban2_syed` (not just `syed`)
- Confirm database name: `yessban2_yesshost`

### Auth/Login not working
- Ensure `NEXTAUTH_URL` is exactly `https://host.yessbangla.top` (no trailing slash)
- Ensure `AUTH_TRUST_HOST=true` is set
- Check that `AUTH_SECRET` is at least 32 characters

### Static files (CSS/JS) not loading
The `.htaccess` handles static file routing. If it's not working:
```bash
# Make sure mod_rewrite is enabled (usually is on cPanel)
# Check that .htaccess is in the app root directory
```

### Restart the app after changes
```bash
# Via SSH
cd ~/host.yessbangla.top
# Touch a temp file to trigger Passenger restart
touch tmp/restart.txt
```
Or use **Setup Node.js App** → **Restart** button in cPanel.

---

## Quick Reference

| Item | Value |
|------|-------|
| Domain | `yesshost.com` / `www.yesshost.com` |
| Server Host | `s1321.sgp1.mysecurecloudhost.com` (`192.250.235.43`) |
| App Root | `/home/yesshost/app/` |
| Startup File | `app.js` |
| DB Host | `127.0.0.1:3306` |
| DB Name | `yesshost_yesshost` |
| DB User | `yesshost_dbuser` |
| DB Pass | `YessHost_Db_2026!Secure` |
| Node.js Version | 20.x (CloudLinux alt-nodejs20) |
| Web Server | LiteSpeed Web Server |
| App Mode | Production |

---

## File Summary — What Was Added for cPanel

| File | Purpose |
|------|---------|
| `app.js` | Phusion Passenger entry point |
| `.htaccess` | Apache → Passenger routing |
| `.env.production.example` | Environment variable template |
| `DEPLOYMENT.md` | This guide |
| `package.json` (`build:cpanel`) | Build script for cPanel deployment |
