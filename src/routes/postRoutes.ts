export const HOME = "/";
export const ADD_POST = "/add";
export const EDIT_POST = "/edit/:id";
export const VIEW_POST = "/post/:id";
export const REMOVE_POST = "/remove/:id";

export interface Route {
  id: number; // for defining route by id and future stylization
  path: string;
  description: string;
}

export const PostRoutes: Route[] = [
  {
    id: 1,
    path: HOME,
    description: "Home page"
  },
  {
    id: 2,
    path: ADD_POST,
    description: "Add new post"
  },
  {
    id: 3,
    path: EDIT_POST,
    description: "Edit existing post"
  },
  {
    id: 4,
    path: VIEW_POST,
    description: "View post"
  },
  {
    id: 5,
    path: REMOVE_POST,
    description: "Remove post"
  }
];
