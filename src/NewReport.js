import Axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  FormText,
  FormCheck,
  Form,
  Image,
} from "react-bootstrap";

function NewReport() {
  const [newVlaue, setnewVlaue] = useState({});

  let interval = setInterval(appendFile, 5000);

  useEffect(async () => {
    await appendFile();
  }, []);

  function appendFile() {
    Axios.get(`${process.env.REACT_APP_LMS_MAIN_URL}/api/get_one/`)
      .then((res) => {
        setnewVlaue(res);
        clearInterval(interval);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h3>Recent accident report</h3>
      <br />
      <br />
      <Form className="container">
        <FormGroup>
          <FormControl
            type="text"
            placeholder="New Accident in ABC Location"
            value={newVlaue.data ? newVlaue.data.location : ""}
          />
          <br />
          <video>
            <source src={newVlaue.data ? newVlaue.data.file : ""}></source>
          </video>
          {/* <Image src={newVlaue.data ? newVlaue.data.image : ""} fluid /> */}
        </FormGroup>

        <FormGroup>
          <FormLabel>Location</FormLabel>
          <FormControl
            type="text"
            placeholder="Location with Time Zone"
            value={
              newVlaue.data
                ? newVlaue.data.location + " " + newVlaue.data.time
                : ""
            }
          />
        </FormGroup>
      </Form>
    </div>
  );
}

export default NewReport;
