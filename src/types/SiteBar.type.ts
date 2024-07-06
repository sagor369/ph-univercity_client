import { ReactNode } from "react";

export type TRoute = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TRoute[];
  };

export  type TSiteBar = {
    key: string;
    label: ReactNode;
    children?: TSiteBar[];
  };
 export type TPath = {
    path: string;
    element: ReactNode;
  };