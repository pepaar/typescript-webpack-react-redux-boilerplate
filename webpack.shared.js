/// <reference path="node_modules/@types/node/index.d.ts"/>

var isProduction = process.env.NODE_ENV == "production";

module.exports = {
  isProduction: isProduction
}