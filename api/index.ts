import App from './app/app';
import {Routes} from './app/routes';

const app = new App(
    Routes
  ,
  3001,
);
app.listen();