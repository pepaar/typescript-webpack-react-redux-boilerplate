/// <reference path="./custom/webpack.d.ts"/>

declare module "react" {
    export = React;
}

declare module "react-dom" {
    import DOM = ReactDOM;
    export = DOM;
}