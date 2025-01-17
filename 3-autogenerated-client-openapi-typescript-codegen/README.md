# Autogenerated API Client using openapi-typescript-codegen

This project demonstrates how to create an **autogenerated API client** using the `openapi-typescript-codegen` library. It simplifies API integration by generating TypeScript clients directly from OpenAPI specifications.

## Features

-   **Client Generation**: Automatically generates a fully-typed TypeScript client from OpenAPI specs.
-   **Ease of Use**: Simplified API calls with built-in type safety.
-   **Integration with Hono Application**: Fetches OpenAPI specs from a live Hono-based Cloudflare Worker.

## Overview

The autogenerated client is created from the OpenAPI specs available at:  
[hono-cloudflare-openapi-swagger cloudflareworker-url](https://hono-cloudflare-openapi-swagger.kundu-subrata2020.workers.dev//doc).

### How It Works

1.  Fetch the OpenAPI specifications (`specs.json`).
2.  Use `openapi-typescript-codegen` to generate a TypeScript client.
3.  Call API endpoints using the generated client without manual fetch implementations.

Below is a visual explanation of the autogenerated client workflow:

![Autogenerated Client Explanation](/3-autogenerated-client-openapi-typescript-codegen/public/autogenerated-client.png)

## Getting Started

### Prerequisites

-   Node.js and npm installed.
-   `openapi-typescript-codegen` package installed.

### Steps to Generate the Client

1.  Fetch the OpenAPI specs:
	```
	curl -o specs.json https://hono-cloudflare-openapi-swagger.kundu-subrata2020.workers.dev/doc
	```
2. Run the generator to create the client:
	```
	npx openapi-typescript-codegen --input ./specs.json --output ./dist/generated  
	```
3. Add an entry file, `index.ts`, for testing the client:
	```
	import { DefaultService } from "./generated"; 
	async function main() {  
    const res = await DefaultService.getUsers("123123");  
    console.log(res);  
    }  
    main();  
    ```
4. Build and execute the code:
	```
	npx esbuild src/index.ts --bundle --platform=node --target=node10.4 --outfile=dist/index.js
	node dist/index.js
	```
## Example Use Case

The `DefaultService.getUsers` function in the generated client eliminates the need for manual `fetch` calls. This makes interacting with the API straightforward and type-safe:
```
	const user = await DefaultService.getUsers("123123");  
	console.log(user); 
```

