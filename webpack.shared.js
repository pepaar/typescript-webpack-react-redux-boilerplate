/// <reference path="typings/node/node.d.ts"/>

var isProduction = process.env.NODE_ENV == "production";

/**
 * Method for removing object properties
 */
var removeObjectProperties = function(obj, props) {
    for(var i = 0; i < props.length; i++) {
        if(obj.hasOwnProperty(props[i])) {
            delete obj[props[i]];
        }
    }
};

module.exports = {
  isProduction: isProduction,
  removeObjectProperties: removeObjectProperties
}