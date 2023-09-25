# ToDoTracker

## Set up for creating project from scratch
Goal of project is to learn to use React and Typescript for frontend development

1. install nvm and restart terminal `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`

2. continue install other `nvm install --lts`

3. Create app `yarn create react-app app --template typescript`

## Running the app
1. `cd ./my-app` and then `npm start`  
Note starting may take a few minutes. If running in a VM, create `.env` folder
in the project directory and add the line `CHOKIDAR_USEPOLLING=true` to ensure 
changes can be loaded


## Typescript 
### Datatypes
Example code:  
```
let name: string = "name";
let age: number;
let isStudent: boolean;
let hobbies: string[]; // array of strings
let roleTuple: [string, number];
```
