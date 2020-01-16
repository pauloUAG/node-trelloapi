const express = require('express');
const UserController = require('./controllers/UserController');
const BoardController = require('./controllers/BoardController');
const ListController = require('./controllers/ListController');
const CardController = require('./controllers/CardController');

const ReportController = require('./controllers/ReportController');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.post('/users/:user_id/boards', BoardController.store);
routes.get('/users/:user_id/boards', BoardController.index);
routes.put('/users/:user_id/boards/:id', BoardController.update);
routes.delete('/users/:user_id/boards/:id', BoardController.delete);

routes.post('/boards/:board_id/lists', ListController.store);
routes.get('/boards/:board_id/lists', ListController.index);
routes.put('/boards/:board_id/lists/:id', ListController.update);
routes.delete('/boards/:board_id/lists/:id', ListController.delete);

routes.post('/lists/:list_id/cards', CardController.store);
routes.get('/lists/:list_id/cards', CardController.index);
routes.put('/lists/:list_id/cards/:id', CardController.update);
routes.delete('/lists/:list_id/cards/:id', CardController.delete);

routes.get('/reports', ReportController.show);

module.exports = routes;