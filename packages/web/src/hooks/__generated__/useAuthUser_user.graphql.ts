/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useAuthUser_user = {
    readonly id: string;
    readonly email: string;
    readonly " $refType": "useAuthUser_user";
};
export type useAuthUser_user$data = useAuthUser_user;
export type useAuthUser_user$key = {
    readonly " $data"?: useAuthUser_user$data;
    readonly " $fragmentRefs": FragmentRefs<"useAuthUser_user">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "useAuthUser_user"
};
(node as any).hash = '518bd7010948e7d123bed08c7c946743';
export default node;
