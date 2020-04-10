"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var App = /** @class */ (function () {
    function App(routes, port) {
        this.app = express_1.default();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
    }
    App.prototype.initializeMiddlewares = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    };
    App.prototype.initializeRoutes = function (routes) {
        var _this = this;
        routes.forEach(function (route) {
            _this.app[route.method](route.prefix + route.route, function (req, res, next) {
                var result = (new route.controller)[route.action](req, res, next);
                if (result instanceof Promise) {
                    result.then(function (result) {
                        console.log(result);
                        if (result !== null && result !== undefined)
                            return res.json(result);
                        else
                            return undefined;
                    })
                        .catch(function (err) { return console.log(err); });
                }
                else if (result !== null && result !== undefined) {
                    return res.send(result);
                }
            });
        });
    };
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("App listening on the port " + _this.port);
        });
    };
    return App;
}());
exports.default = App;
