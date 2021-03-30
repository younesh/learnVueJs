# todo-vuex

## intro 
ce tuto de todo liste essaye d'implementer le mecanisme de vueX ( store / state management) expliqué dans ce  https://www.youtube.com/watch?v=wbp_ro-eWwQ&t=1s

## pour créer l'api rest en local 
 + installer la dep jason server ( qui permet d'exposer en local un fichier json comme une Api rest !!)
   ```
   yarn global add json-server
   ```

 + pour lancer l'api rest local :  ( moi j'utiliser le port 5151 ds cette appli qu'en peut modifier sans oubliler de le faire ds le code !! )
    
    ```
    json-server --watch db.json --port 5151
    ```




## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

NB : to lunch this app : yarn serve --port 5051
to lanch DB json-server : json-server --watch db.json --port 5151

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
