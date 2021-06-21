import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  FormText,
  FormCheck,
  Form,
} from "react-bootstrap";

function History() {
  const [newVlaue, setnewVlaue] = useState([]);

  useEffect(async () => {
    await appendFile();
  }, []);

  function appendFile() {
    axios
      .get(`${process.env.REACT_APP_LMS_MAIN_URL}/api/get_five/`)
      .then((res) => {
        setnewVlaue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log(newVlaue.length);
  return (
    <div>
      <h3> Past Accident History </h3>
      <br />
      <br />
      <Form className="container">
        {newVlaue.length > 0
          ? newVlaue.map((data) => (
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Accident in Kandy (Vehicle, Time, Location, Date, Accuracy percentage)"
                  value={`${data.location} , ${data.time} , ${data.time}`}
                />
              </FormGroup>
            ))
          : ""}
      </Form>
    </div>
  );
}

export default History;
