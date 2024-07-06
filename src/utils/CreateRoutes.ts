import { TPath, TRoute } from "../types";





export const CreatePath = (routs:TRoute[]) => {
  const paths = routs.reduce((acc: TPath[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
       acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);
  return paths
};
