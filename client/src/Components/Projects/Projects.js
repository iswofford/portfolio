import React, { useState } from "react";
import "./Projects.css";
import ProjectInfo from "./ProjectInfo";
import Pagination from "../Pagination/Pagination";
import { projects } from "../../Data.js";
const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const PER_PAGE = 5;
  const offset = (currentPage - 1) * PER_PAGE;
  const currentPageData = projects.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(projects.length / PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage + 1);
  };
  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };
  return (
    <div className="container projects" id="projects">
      <div className="section-title">
        <h5>Summary of projects I worked on</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {currentPageData?.map((item) => (
          <div
            className="col-xl-12 col-lg-12 col-md-12 col-sm-12"
            key={generateKey(item.id)}
          >
            <ProjectInfo {...item} />
          </div>
        ))}
      </div>
      <div className="pagination-details">
        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      </div>
    </div>
  );
};

export default Projects;
