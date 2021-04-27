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

================================================================================

================================================================================
npm start
===========playground screen

http://localhost:5030/graphql