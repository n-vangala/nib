import React from 'react';

function ProjectDomain(props) {
  return (
    <div className="projectDomain">
        <img src={props.image} />
        <p>{props.name}</p>
    </div>
  );
}

export default ProjectDomain;
