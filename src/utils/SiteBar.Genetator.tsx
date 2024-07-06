import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { TRoute, TSiteBar } from "../types";

export const CreateSidebar = (routs: TRoute[], role: string) => {
  const paths = routs.reduce((acc: TSiteBar[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name} </NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label:item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name} </NavLink>,
        })),
      });
    }
    return acc;
  }, []);
  return paths;
};
