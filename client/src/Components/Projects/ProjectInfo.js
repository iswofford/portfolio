import React, { useState } from "react";
import { FcCollapse, FcExpand } from "react-icons/fc";

const ProjectInfo = ({ title, body }) => {
  const [show, setShow] = useState(false);
  const generateKey = (pre) => {
    return `${pre}_${ new Date().getTime() }`;
}
  return (
    <div
      className={show ? "post-card-open" : "post-card"}
      onClick={() => setShow(!show)}
    >
      <div className="collapse-option">
        <h6>{title}</h6>
        <p>{show ? <FcCollapse size={20} /> :
         <FcExpand size={20} />}</p>
      </div>
      <div className="description">
        {show ? body?.map((item) => 
        <p key={generateKey(item.id)}>{item.description}</p>) : null}
      </div>
    </div>
  );
};

export default ProjectInfo;
