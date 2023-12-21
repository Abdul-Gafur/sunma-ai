## Sunma AI

## Installation

**Local Development**

The easiest way to run this project is by using Docker.

Make sure you have Docker installed and then start it with `docker-compose`:

```bash
docker compose up -d --build

# or without build
docker compose up -d
```

Next, run the database migration:

```bash
docker compose exec server php artisan migrate
```

You can also ssh into the container:

```bash
docker compose exec server bash
```

Kill the container:

```bash
docker compose down -v --remove-orphans
```

If you are working on the UI, make sure to run Vite dev:

```bash
npm run dev
```