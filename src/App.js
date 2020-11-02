import React from 'react';
import './App.css';
import Bounce from 'react-reveal/Bounce';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
let marked = require("marked");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {     

    return (
      <div className="App">
          
      <Container className="mt-5">
        <Bounce top>
        <Row>
          <Col className="text-center mt-5"><h1 className="title">Markdown Previewer</h1></Col>
        </Row>

        <Row>
        <Col className="text-white text-center mb-5">
        <h6>
        ⓒ 2020 by {" "}
        <a href="https://karen-developer.com" target="_blank">
          <span className="karen">Karen Chang</span>
        </a>
        </h6>
        </Col>
        </Row>
        </Bounce>

        <Bounce bottom>     
        <Row>
          <Col className="text-center m-2">
           <Form.Group controlId="exampleForm.ControlTextarea1">
           <Form.Label><h4 className="title">Input</h4></Form.Label>
           <Form.Control 
             as="textarea" 
             rows={20} 
             value={this.state.markdown}
             onChange={(e) => 
             {this.updateMarkdown(e.target.value);}}/>
           </Form.Group>
          </Col>

           <Col className="text-center m-2">
           <h4 className="title mb-3">Output</h4>
           <div className="text-left output-style"               
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
          ></div>            
          </Col>
        </Row> 
        </Bounce>               
      </Container>
     
      </div>
    );
  }
}

const placeholder = `## Links

Welcome to [karen-developer.com](https://karen-developer.com)

## Images

![freeCodeCamp Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/FreeCodeCamp_logo.png/375px-FreeCodeCamp_logo.png)

## Code

    // Developer Comments
    Eat
    Code
    Sleep
    Repeat
`;
