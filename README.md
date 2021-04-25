npm init -y      
mkdir src
touch index.ts
====================
npm install -g typescript
tsc --init  // generate tsconfig.json file
tslint --init
====================
install  dependencies  see package.json
 "@typegoose/typegoose": "^7.0.0",
    "@types/mongoose": "^5.7.16",
    "apollo-server-express": "^2.13.0",
    "body-parser": "^1.19.0",
    "class-validator": "^0.12.2",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "graphql": "^15.0.0",
    "helmet": "^3.22.0",
    "mongoose": "^5.9.13",
    "reflect-metadata": "^0.1.13",
    "type-graphql": "^1.0.0-rc.1",
    "typedi": "^0.8.0"
====================
env file contains  projecect config
PORT=5030
GRAPHQL_PATH=/graphql
NODE_ENV=development
REDIS_PORT=6379
REDIS_HOST=localhost
MONGODB_URI=mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false
============================================================
===== project structures
├── src                        # Where your source code lives
│   ├── bootstrap              # Bootstrapping and loading of the API dependencies (Express, Apollo, Database, ...)
│   ├── entities               # Used to generate typing, schemas and ORM models
│   ├── modules                # Business logic of the app divided by domain (eg: User, Post, Todo)
│   ├── tests                  # Where all our testing strategy lives
│   ├── utils                  # Collection of utils function that we use in the project
│   ├── config.ts              # Config of the app, sourced by environment variables
│   └── index.ts               # Entry point of the API
│
├── jest-mongodb-config.js     # Optional if you don't use MongoDB!
├── jest.config.js             # Jest configuration
├── docker-compose.yml         # Docker compose configuration (Optional !)
├── .env.example               # Example of what your .env file should look like
├── .gitignore                 # Standard gitignore file
├── package.json               # Node module dependencies
├── README.md                  # Simple readme file
└── tsconfig.json              # TypeScript compiler options
================================================================================
===== module structure
├── src
│   └── modules
│       └── user               # Module name
│           ├── input.ts       # Input validation for mutations and queries using class-validator
│           ├── model.ts       # Database model
│           ├── resolver.ts    # GraphQL revolver
│           └── service.ts     # Business logic of your app
================================================================================
npm start
===========playground screen

http://localhost:5030/graphql