/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useAuthUser_user = {
  readonly _id: string;
  readonly id: string;
  readonly email: string;
  readonly createdAt: string;
  readonly updatedAt: string;
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
(node as any).hash = "137b7251299861c60d19eb40d2804126";
export default node;
