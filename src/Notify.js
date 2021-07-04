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

function Notify() {
  const [rede, setrede] = useState(false);
  const [acValues, setacValues] = useState({
    car_vs_car: "",
    car_vs_bike: "",
    car_vs_pedestrian: "",
    car_vs_tree: "",
    human_gatherings: "",
    drown_in_water: "",
    vehicle_fire: "",
  });
  const [isActive, setisActive] = useState([]);
  const [values, setvalues] = useState({});
  useEffect(async () => {
    await appendFile();
  }, []);
  useEffect(() => {
    acType();
  }, [acValues]);

  function appendFile() {
    axios
      .get(`${process.env.REACT_APP_LMS_MAIN_URL}/api/get_one/`)
      .then((res) => {
        setacValues({
          ...acValues,
          car_vs_car: res.data.accuracy.car_vs_car,
          car_vs_bike: res.data.accuracy.car_vs_bike,
          car_vs_pedestrian: res.data.accuracy.car_vs_pedestrian,
          car_vs_tree: res.data.accuracy.car_vs_tree,
          human_gatherings: res.data.accuracy.human_count_avg,
          drown_in_water: res.data.accuracy.drown_in_water,
          vehicle_fire: res.data.accuracy.vehicle_fire,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function acType() {
    let arr = [];
    for (let i = 0; i < Object.keys(acValues).length; i++) {
      if (parseFloat(Object.values(acValues)[i]) > 30) {
        arr.push({ [Object.keys(acValues)[i]]: true });
      } else {
        arr.push({ [Object.keys(acValues)[i]]: false });
      }
    }
    setisActive(...[arr]);
    setrede(!rede);
  }

  useEffect(() => {
    let result = {};
    for (let z = 0; z < isActive.length; z++) {
      result[Object.keys(isActive[z])] = Object.values(isActive[z])[0];
    }
    setvalues(...[result]);
  }, [rede]);

  return (
    <div>
      <h1> Notify of Reports </h1>
      <br />
      <br />
      <Form className="container">
        <FormGroup>
          <FormLabel>Nearest Hospital</FormLabel>
          <FormControl
            type="text"
            placeholder="Hospital"
            value={
              values.car_vs_car ||
              values.car_vs_bike ||
              values.car_vs_pedestrian ||
              values.human_gatherings ||
              values.drown_in_water ||
              values.vehicle_fire
                ? "Alert Send"
                : ""
            }
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Nearest Police Station</FormLabel>
          <FormControl
            type="text"
            placeholder="Station"
            value={
              values.car_vs_car ||
              values.car_vs_bike ||
              values.car_vs_pedestrian ||
              values.human_gatherings
                ? "Alert Send"
                : ""
            }
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Nearest FireBrigade</FormLabel>
          <FormControl
            type="text"
            placeholder="FireBrigade"
            value={values.vehicle_fire ? "Alert Send" : ""}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Nearest Crane Support</FormLabel>
          <FormControl
            type="text"
            placeholder="Crane Support"
            value={
              values.car_vs_car || values.car_vs_bike || values.drown_in_water
                ? "Alert Send"
                : ""
            }
          />
        </FormGroup>
        <br />
        <br />
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Notification sent to relevant fields"
          />
          <FormText className="text-muted">Alerts</FormText>
        </FormGroup>
      </Form>
    </div>
  );
}

export default Notify;
