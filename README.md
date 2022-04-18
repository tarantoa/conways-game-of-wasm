# conways-game-of-wasm
Conway's Game of life implemented in rust with wasm bindings running on node.


## Build Steps

### Generate wasm library

```
wasm-pack build --target bundler
cd pkg
npm link
```

### Build the node application

```
cd ..
cd site
npm install
npm run serve
```

Webpage available on localhost:8080
