import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h3>Information</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ad,
        beatae ipsum rerum nisi animi nesciunt. Corporis amet facere dolores.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ad,
        beatae ipsum rerum nisi animi nesciunt. Corporis amet facere dolores.
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Back to home page
      </button>
    </>
  );
};
