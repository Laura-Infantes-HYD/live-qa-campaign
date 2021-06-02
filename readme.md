## Usage

    This code can be added to a blank VWO campaign. When this campaign is set live 
    to 100% it will read the test id (ex. CS001) passed as a query of any url 
    that follows the pattern below and set the test id as a cookie of value true:

    https://clientsite.com/?HYD_QA=true&CS001=true
  
    This will allow to set any campaign on the same account live to 100% with audience 
    targeted to a cookie named after the test id and with a value of true. Then it will be 
    possible to create a live preview link by adding the above shown queries (where CS001 is 
    swapped for the test id) to the test url that we wish to live preview.


## Install
```bash
npm i
```

## Build
```bash
npm run build

