import { ContentLoadAction, create } from "../Actions/ContentLoadAction";

export function loadContent(): ContentLoadAction {
    const title: string = "Typescript-Webpack-React-Flux/Redux boilerplate";
    const summary: string = "The goal of this example is to help you start when combining Typescript with React and Redux. " +
        "LESS in combination of CSS modules is used for styling components. For running, building and bundling there is powerful Webpack. " +
        "Check the console logs as you click around the page and install redux devtools chrome extenstion for better development experience.";

    return create(title, summary);
}