import IPost from "./entities/Post";
import { ISinglePostActionType } from "./actions/entityActions";

// API
export const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3000/posts");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const addSinglePost = async (data: IPost) => {
  try {
    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(data)
    });
    const resp = await response.json();
    return resp;
  } catch (e) {
    console.log(e);
  }
};

export const editSinglePost = async (data: IPost) => {
  try {
    const response = await fetch(`http://localhost:3000/posts/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        title: data.title,
        completed: data.completed
      })
    });
    const resp = await response.json();
    return resp;
  } catch (e) {
    console.log(e);
  }
};

export const removeSinglePost = async (id: number) => {
  try {
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    });
    return response;
  } catch (e) {
    console.log(e);
  }
};
