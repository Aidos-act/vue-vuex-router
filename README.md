# stock Vue Vuex Router project

# Change Project Name in package.json

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### To fix Babel Parse Error
File > Preference > Settings > [Search Eslint] > Eslint: validate > edit settings.json > add 

```
"eslint.workingDirectories": [
    {"mode": "auto"}
],
```