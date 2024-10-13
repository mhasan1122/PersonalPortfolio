import React from 'react';
import experience from './data/experience.json';

const Experience = () => {
    return (
        <>
            <div className="container ex" id="experience">
                <h1>EXPERIENCE</h1>
                {
                    experience.map((data) => {
                        return (
                            <div key={data.id} className="ex-items text-center"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >
                                <div className="left">
                                    
                                    {data.id === 1 && (
                                        <img src={require('../components/company/ieee.png')}  alt={data.role} 
                                        style={{ width: '280px', height: 'auto' }}/>
                                    )}
                                    {data.id === 2 && (
                                        <img src={require('../components/company/kaggle.png')}  alt={data.role} />
                                    )}
                                </div>
                                <div className="right">
                                    <h2>{data.role} </h2>
                                    <h4>
                                        <span style={{color: "yellowgreen"}}>{data.startDate} - {data.endDate} </span> 
                                        <span style={{color: "yellow"}}>{data.location} </span>
                                    </h4>
                                    <h5 style={{color: "yellow"}}>{data.experiences[0]}</h5>
                                    {/* Add check for second experience if it exists */}
                                    {data.experiences[1] && (
                                        <h5 style={{color: "yellow"}}>{data.experiences[1]}</h5>
                                    )}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}

export default Experience;
