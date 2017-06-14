import { createAction } from "redux-actions";

export interface ContentLoadActionPayload  {
    title: string;
    summary: string;
}

export const contentLoadAction =
    createAction<ContentLoadActionPayload, string, string>("ContentLoadAction", (title, summary) => ({title, summary}));