import { createAction } from "redux-actions";

export const CONTENT_LOAD_ACTION = "ContentLoadAction";

export interface ContentLoadActionPayload  {
    title: string;
    summary: string;
}

export const contentLoadAction = createAction<ContentLoadActionPayload, ContentLoadActionPayload>(CONTENT_LOAD_ACTION, undefined);