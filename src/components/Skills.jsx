import React from 'react';
import skills from './data/skills.json';

const Skills = () => {
  return (
    <>
      <div className="container skills" id="skills">
        <h1>Skills</h1>
        <div className="items">
          {skills.map((data) => (
            <div
              className="item"
              key={data.id}
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              {/* Conditional rendering for specific skill IDs */}
              {data.id === 1 && (
                <img src={require('../components/skills/c.png')} alt={data.title} />
              )}
              {data.id === 2 && (
                <img src={require('../components/skills/c++.png')} alt={data.title} />
              )}
              {data.id === 3 && (
                <img src={require('../components/skills/html.png')} alt={data.title} />
              )}
              {data.id === 4 && (
                <img src={require('../components/skills/css.png')} alt={data.title} />
              )}
              {data.id === 5 && (
                <img src={require('../components/skills/javascript.png')} alt={data.title} />
              )}
              {data.id === 6 && (
                <img src={require('../components/skills/react.png')} alt={data.title} />
              )}
              {data.id === 7 && (
                <img src={require('../components/skills/node.png')} alt={data.title} />
              )}
              {data.id === 8 && (
                <img src={require('../components/skills/mysql.png')} alt={data.title} />
              )}
              {data.id === 9 && (
                <img src={require('../components/skills/machine.png')} alt={data.title} />
              )}
              {data.id === 10 && (
                <img src={require('../components/skills/deep.png')} alt={data.title} />
              )}
              {data.id === 11 && (
                <img src={require('../components/skills/mongodb.png')} alt={data.title} />
              )}
              {data.id === 12 && (
                <img src={require('../components/skills/figma.png')} alt={data.title} />
              )}
              
              <h3>{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
