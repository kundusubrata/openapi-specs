# API Documentation with OpenAPI Specs and Swagger in a Hono & Cloudflare Workers Application

This project demonstrates how to build an API documentation system using **Hono**, **Cloudflare Workers**, and the `@hono/zod-openapi` and `@hono/swagger-ui` packages. It generates OpenAPI specifications from your API definitions and provides an interactive Swagger UI for easy exploration and testing of the API.

## Features

-   **OpenAPI Documentation**: Automatically generated API specs using Hono and Zod.
-   **Swagger UI**: Interactive API documentation accessible via the `/ui` endpoint.
-   **Cloudflare Deployment**: Hosted on Cloudflare Workers for fast, reliable access.

## Live Demo

Visit the live application: [Hono-Cloudflare-OpenAPI-Swagger](https://hono-cloudflare-openapi-swagger.kundu-subrata2020.workers.dev/)

## Endpoints

-   `/doc`: OpenAPI documentation in JSON format.
-   `/ui`: Swagger UI for interactive API exploration.

## Setup

1.  Clone the repository:
	```
	git clone https://github.com/kundusubrata/openapi-specs.git
	cd openapi-specs/2-hono-cloudflare-openapi-swagger
	```
2.  Install dependency && Running the server:
	```
	pnpm install
	pnpm run dev
	```
3. Deploy to Cloudflare Workers:
	```
	pnpm run deploy  # for preview environment
	wrangler publish # for live environment
	```
	
