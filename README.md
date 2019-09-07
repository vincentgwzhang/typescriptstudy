### Preparation
1. Git clone the repository
2. Install Nodejs and Typescript
3. In the workspace, run ```npm install```

#### Usage:
1. Create one file(for example, 0.1.basic-types.ts) in typescript file in src
2. In the package.json file, update the script part.
```
  "scripts": {
    "01": "node_modules/.bin/ts-node src/0.1.basic-types.ts"
  },
```
3. Run ```npm run 01```