import IAction from "./IAction";
export const type = "ContentLoadAction";

export interface ContentLoadAction extends IAction {
    title: string;
    summary: string;
}

export function create(title: string, summary: string): ContentLoadAction {
    return {
        title,
        summary,
        type,
    };
}