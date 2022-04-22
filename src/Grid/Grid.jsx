import React from 'react';
import './Grid.css'

const Grid = (props) => {
    return (
      <>
        {props.currentData.map((data, index) => (
          <div
            className="main"
            key={data.id}
            onClick={() => {
              console.log("Post id",data.id);
              props.setCurrentID(data.id);
            }}
          >
              <div className='button'>
                  <button className='btn-del'onClick={props.remove} >Delete</button>
              </div>
            <div className="title">
              <h3>{data.title}</h3>
            </div>
            <div className="body">
              <p>{data.body}</p>
            </div>
          </div>
        ))}
      </>
    );
  };


export default Grid