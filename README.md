# financial-transaction
Just another demo app for ReactJS with Nodejs Express and Typescript API

## Available Scripts

In the front directory, you can run:
### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Also you have available the production build version in `front/build`
You may serve it with a static server:
  `npm install -g serve`
  `serve -s build`

In the api  directory, you can run:
### `node index.js`, `npm run prod`, `npm run dev`
Which will run the app in production build / production  / development mode and will listen on port `3001` Open [http://localhost:3001](http://localhost:3001) to view it in browser.

### API

Regarding the REST JSON API I must say that it has three endpoints which are
`GET` `/api/v1/financial_account`
 From here we can get account details and transaction history
`POST` `/api/v1/financial_account`
 From here we create a new transaction, if it is a valid transaction, then it gets stored in-memory with all the others valid transactions
 `GET` `/api/v1/financial_account/{id}`
 This one returns a transaction by his id, taking id (an integer) as url param.
