/// <reference path="../../typings/tsd.d.ts" />

import Flux = require("flux");
import IAction from "../Actions/IAction";

export default new Flux.Dispatcher<IAction>();