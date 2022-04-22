import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const NewEntry = (props) => {
    return (
      <>
        <div className="main-form">
          <center>
            <h3>Add more Records</h3>
          </center>
          <Row>
            <Col>
              <div>
                <input
                  name="title-form"
                  type="text"
                  value={props.title}
                  className="field"
                  placeholder="Title"
                  onChange={(e)=>{props.setTitle(e.target.value)}}
                />
              </div>
            </Col>
            <Col>
              <div>
                <input
                  name="body-form"
                  type="textarea"
                  value={props.body}
                  className="field-area"
                  placeholder="Body"
                  onChange={(e)=>{props.setBody(e.target.value)}}
                />
              </div>
            </Col>
            <Col>
              <button
                className="btn"
                  onClick={props.update}
              >
                <span>Update</span>
              </button>
            </Col>
          </Row>
        </div>
      </>
    );
  };

  export default NewEntry