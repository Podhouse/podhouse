/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useAuthUser_user = {
  readonly _id: string;
  readonly id: string;
  readonly " $refType": "useAuthUser_user";
};
export type useAuthUser_user$data = useAuthUser_user;
export type useAuthUser_user$key = {
  readonly " $data"?: useAuthUser_user$data;
  readonly " $fragmentRefs": FragmentRefs<"useAuthUser_user">;
};

const node: ReaderInlineDataFragment = {
  kind: "InlineDataFragment",
  name: "useAuthUser_user",
};
(node as any).hash = "05309bac873c010a8bf34713e8553511";
export default node;
