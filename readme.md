## Description

    This code can be added to a VWO campaign. When set live it will read the test name(ex. CS001) passed as a query 
    in a url that follows the pattern below and set it as a cookie with the value of true:

    https://clientsite.com/?HYD_QA=true&CS001=true
  
    This will allow to set a different campaign live to 100% with audience targeted to the given cookie value pair, and
    be able to preview the experience only when accessing from the url containing the test name query. 


## Install
```bash
npm i
```

## Build
```bash
npm run build

