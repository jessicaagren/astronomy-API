# astronomy-API

This is an API providing information about the solar system, its planets, and their moons.

## Getting started

### 1. Clone the project

To download the project, run `git clone <repository-url>` in the terminal.

### 2. Install dependencies

Navigate to the project root folder and run `npm install`.

### 3. Set up the database

Create a mySQL database using the `astronomyAPI.sql` file.

### 4. Configure environment variables

Add `.env` file with the following:

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=<password>
DB_NAME=astronomy_api
```

### 5. Run the project

Start the server in development mode with `npm run dev` and access the API at http://localhost:3000.

## Endpoints

### Planets

- /api/planets/
- /api/planets/:id/
- /api/planets/:id/moons/
- /api/planets/regular-planets/
- /api/planets/dwarf-planets/

### Moons

- /api/moons/
- /api/moons/:id/

## Folder and file structure

```
AstronomyAPI
├─ server.js
├─ astronomyAPI.sql
├─ config
│ └─ database.js
├─ data
│ ├─ moonData.js
│ └─ planetData.js
├─ middlewares
│ └─ errorHandler.js
├─ routes
│ ├─ moonRoutes.js
│ └─ planetRoutes.js
├─ services
│ ├─ moonService.js
│ └─ planetService.js
└─ utils
├─ errorHelpers.js
├─ logHelpers.js
├─ moonHelpers.js
└─ planetHelpers.js
```

## Technologies

- Node.js
- Express
- MySQL

## Linkedin

[My Linkedin profile](https://www.linkedin.com/in/jessicaagren/)
