# v0-landing (Next.js + Tailwind v4)

This is a minimal Next.js app-dir project scaffold using your generated `layout.tsx`, `page.tsx` and `globals.css`.

## Local development

```bash
# Node 20+ recommended
npm install
npm run dev
# http://localhost:3000
```

## Build & Run (production)

```bash
npm run build
npm run start  # serves on :3000
```

## Notes
- `globals.css` uses Tailwind v4-style imports. If `tw-animate-css` fails to install on your server,
  comment out the `@import "tw-animate-css";` line to proceed.
- UI components used by your page were scaffolded in `components/ui/*` so imports like `@/components/ui/button` resolve.
- Path alias `@/*` is configured in `tsconfig.json`.
```

### Deploy on Ubuntu (VPS) — quick guide

1) **Login & Base tools**
```bash
sudo apt update
sudo apt install -y curl ca-certificates gnupg ufw
```

2) **Install Node.js 20 LTS**
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs build-essential
node -v && npm -v
```

3) **Clone/upload the project**
```bash
# If you use git:
# git clone <your-repo-url> /var/www/v0-landing
# Or upload the zip and extract:
mkdir -p /var/www/v0-landing && cd /var/www/v0-landing
```
Copy the project files into `/var/www/v0-landing`.

4) **Install deps & build**
```bash
cd /var/www/v0-landing
npm install
npm run build
```

5) **Run as a service (systemd)**
Create `/etc/systemd/system/v0-landing.service`:
```
[Unit]
Description=Next.js v0 landing
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/v0-landing
Environment=NODE_ENV=production
ExecStart=/usr/bin/npm start --silent
Restart=always

[Install]
WantedBy=multi-user.target
```
Then:
```bash
sudo systemctl daemon-reload
sudo systemctl enable v0-landing
sudo systemctl start v0-landing
sudo systemctl status v0-landing --no-pager
```

6) **Reverse proxy with Nginx + TLS**
```bash
sudo apt install -y nginx
sudo ufw allow 'Nginx Full'
sudo tee /etc/nginx/sites-available/v0-landing <<'NGINX'
server {
  listen 80;
  server_name YOUR_DOMAIN;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
  }
}
NGINX
sudo ln -sf /etc/nginx/sites-available/v0-landing /etc/nginx/sites-enabled/v0-landing
sudo nginx -t && sudo systemctl reload nginx
```

TLS (HTTPS) via Certbot:
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d YOUR_DOMAIN
```

7) **Update & deploy workflow**
- Update code in `/var/www/v0-landing`
- `npm install && npm run build`
- `sudo systemctl restart v0-landing`

---

## Static export (optional)
If your page has no server-side data fetching, you can export static files:
```bash
npm run build
npx next export
# Files in ./out can be served by Nginx directly as a static site.
```
Create an Nginx static site:
```
server {
  listen 80;
  server_name YOUR_DOMAIN;
  root /var/www/v0-landing/out;
  location / { try_files $uri $uri/ =404; }
}
```

## Troubleshooting
- **Port 3000 already in use** → change the port in `npm start` or set `PORT=4000` env and adjust Nginx `proxy_pass`.
- **tw-animate-css not found** → run `npm i -D tw-animate-css` or comment out its import in `app/globals.css`.
- **Fonts import errors** → ensure `"geist"` and `"@vercel/analytics"` are installed (they are in `package.json`).

Happy shipping! 🚀
