'use client'
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,

} from 'reactstrap';
import Image from 'next/image'
import CaptureMyFingerprint from '../../../../fingerprint-mfs100-utility/react-add-student';
const Forms =  () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Form Example
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="adhaarNumber">Adhaar Number</Label>
                <Input
                  id="adhaarNumber"
                  name="adhaarNumber"
                  placeholder="Adhaar placeholder"
                  type="text"
                  onBlur={(e) => {
                    debugger;
                    var regex = /^([0-9]{4}[0-9]{4}[0-9]{4}$)|([0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|([0-9]{4}-[0-9]{4}-[0-9]{4}$)/;
                    if (regex.test(e.target.value)) {
                      e.target.setCustomValidity("");
                      //$("#lblError").css("visibility", "hidden");
                    } else {
                      e.target.setCustomValidity("Invalid Adhaar");
                    }
                  }}
                />
              </FormGroup>


              <FormGroup>
                <Label for="exampleFile">Student Photo</Label>
                <Input id="exampleFile" name="file" type="file" />
                {/* <FormText>
                  This is some placeholder block-level help text for the above input. Its a bit
                  lighter and easily wraps to a new line.
                </FormText> */}
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>Finger prints</legend>
                <div class="fingerprint-grid-container">
                  <div class="box-item">
                    <Image alt="" id="finger1Value" src="https://dummyimage.com/300x400/c8f098/fff&text=fingerprint+image" width={300}
                      height={400} /><span id="q1">quality</span>
                    <div class="box-text">
                      <Button style={{ backgroundColor: "seagreen" }} className="mt-1 lg-1 sm-1 xs-1 " onClick={async (e) => {
                        document.querySelector("#finger1Value").setAttribute("autofocus", "true");
                        document.querySelector('#finger1Value').removeAttribute('src');
                        document.querySelector('#finger1Value').style.backgroundColor = "#bed7ee";
                        await CaptureMyFingerprint(1);
                      }} >Capture  </Button>
                    </div>
                  </div>
                  <div class="box-item">
                    <Image alt="" id="finger2Value" src="https://dummyimage.com/300x400/c8f098/fff&text=fingerprint+image" width={300}
                      height={400} /><span id="q2">quality</span>
                    <div class="box-text">
                      <Button style={{ backgroundColor: "seagreen" }} className="mt-1 lg-1 sm-1 xs-1 " onClick={async (e) => {
                        document.querySelector("#finger2Value").setAttribute("autofocus", "true");
                        document.querySelector('#finger2Value').removeAttribute('src');
                        document.querySelector('#finger2Value').style.backgroundColor = "#bed7ee";
                       await CaptureMyFingerprint(2);
                      }} >Capture  </Button>
                    </div>
                  </div>

                  <div class="box-item">
                    <Image alt="" id="finger3Value" src="https://dummyimage.com/300x400/c8f098/fff&text=fingerprint+image" width={300}
                      height={400} /><span id="q3">quality</span>
                    <div class="box-text">
                      <Button style={{ backgroundColor: "seagreen" }} className="mt-1 lg-1 sm-1 xs-1 " onClick={async (e) => {
                        document.querySelector("#finger3Value").setAttribute("autofocus", "true");
                        document.querySelector('#finger3Value').removeAttribute('src');
                        document.querySelector('#finger3Value').style.backgroundColor = "#bed7ee";
                       await CaptureMyFingerprint(3);
                      }} >Capture  </Button>
                    </div>
                  </div>
                  <div class="box-item">
                    <Image alt="" id="finger4Value" src="https://dummyimage.com/300x400/c8f098/fff&text=fingerprint+image" width={300}
                      height={400} /><span id="q4">quality</span>
                    <div class="box-text">
                      <Button style={{ backgroundColor: "seagreen" }} className="mt-1 lg-1 sm-1 xs-1 " onClick={async (e) => {
                        document.querySelector("#finger4Value").setAttribute("autofocus", "true");
                        document.querySelector('#finger4Value').removeAttribute('src');
                        document.querySelector('#finger4Value').style.backgroundColor = "#bed7ee";
                        await CaptureMyFingerprint(4);
                      }} >Capture  </Button>
                    </div>
                  </div>
                  <div class="box-item">
                    <Image alt="" id="finger5Value" src="https://dummyimage.com/300x400/c8f098/fff&text=fingerprint+image" width={300}
                      height={400} /><span id="q5">quality</span>
                    <div class="box-text">
                      <Button style={{ backgroundColor: "seagreen" }} className="mt-1 lg-1 sm-1 xs-1 " onClick={async (e) => {
                        document.querySelector("#finger5Value").setAttribute("autofocus", "true");
                        document.querySelector('#finger5Value').removeAttribute('src');
                        document.querySelector('#finger5Value').style.backgroundColor = "#bed7ee";
                        await CaptureMyFingerprint(5);
                      }} >Capture  </Button>
                    </div>
                  </div>
                  <div class="box-item">
                    <Image alt="" id="finger6Value" src="https://dummyimage.com/300x400/c8f098/fff&text=fingerprint+image" width={300}
                      height={400} /><span id="q6">quality</span>
                    <div class="box-text">
                      <Button style={{ backgroundColor: "seagreen" }} className="mt-1 lg-1 sm-1 xs-1 " onClick={async (e) => {
                        document.querySelector("#finger6Value").setAttribute("autofocus", "true");
                        document.querySelector('#finger6Value').removeAttribute('src');
                        document.querySelector('#finger6Value').style.backgroundColor = "#bed7ee";
                       await CaptureMyFingerprint(6);
                      }} >Capture  </Button>
                    </div>
                  </div>
                </div>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" /> <Label check>Check me out</Label>
              </FormGroup>
              <Button className="mt-2">Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row >
  );
};

export default Forms;
