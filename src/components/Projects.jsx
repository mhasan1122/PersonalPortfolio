import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="projects-container" id="projects">
        <h1>PROJECTS</h1>

        <div className="projects-row">
          {project.map((data) => (
            <div key={data.id} className="project-card">
              <div
                className="card"
                style={{
                  width: "18rem",
                  border: "1px solid yellow",
                  boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                }}
                data-aos="flip-left"
            data-aos-duration="1000"
              >
                <div className="img-container">
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "250px",
                      height: "200px",
                      border: "2px solid yellow",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <div className="btn-container">
                    <a href={data.demo} className="btn demo-btn">
                      Demo
                    </a>
                    <a href={data.source} className="btn code-btn">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-container {
          padding: 20px;
          margin-left:7%;
        }

        .projects-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .project-card {
          margin: 20px;
        }

        .card {
          background-color: #333;
          color: #fff;
          padding: 10px;
          border-radius: 10px;
        }

        .img-container {
          display: flex;
          justify-content: center;
          padding: 10px;
        }

        .card-body {
          text-align: center;
        }

        .btn-container {
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .btn {
          padding: 10px 15px;
          border-radius: 5px;
          text-decoration: none;
          color: white;
        }

        .demo-btn {
          background-color: #007bff;
        }

        .code-btn {
          background-color: #ffc107;
        }

        .btn:hover {
          opacity: 0.8;
        }
      `}</style>
    </>
  );
};

export default Projects;
