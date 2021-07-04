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

function Select() {
  const [rede, setrede] = useState(false);
  const [isActiveSet, setisActiveSet] = useState([]);
  const [acValues, setacValues] = useState({
    car_vs_car: "",
    car_vs_bike: "",
    car_vs_pedestrian: "",
    car_vs_tree: "",
    human_gatherings: "",
    drown_in_water: "",
    vehicle_fire: "",
    normal: "",
  });
  const [isActive, setisActive] = useState({
    car_vs_car: false,
    car_vs_bike: false,
    car_vs_pedestrian: false,
    car_vs_tree: false,
    human_gatherings: false,
    drown_in_water: false,
    vehicle_fire: false,
    normal: false,
  });

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
          normal: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function acType() {
    setisActive({
      ...isActive,
      car_vs_car: false,
      car_vs_bike: false,
      car_vs_pedestrian: false,
      car_vs_tree: false,
      human_gatherings: false,
      drown_in_water: false,
      vehicle_fire: false,
      normal: false,
    });
    let max = [];
    for (let i = 0; i < Object.keys(isActive).length; i++) {
      if (50 < parseFloat(Object.values(acValues)[i])) {
        max.push({ [Object.keys(acValues)[i]]: true });
      } else {
        max.push({ [Object.keys(acValues)[i]]: false });
      }
    }
    setisActiveSet(...[max]);
    setrede(!rede);
  }

  useEffect(() => {
    let result = {};
    for (let z = 0; z < isActiveSet.length; z++) {
      result[Object.keys(isActiveSet[z])] = Object.values(isActiveSet[z])[0];
    }

    setisActive(result);
  }, [rede]);

  useEffect(() => {
    let arr = Object.values(isActive);
    const allEqual = (arr) => arr.every((val) => val === arr[0]);

    if (!allEqual) {
      setisActive({ ...isActive, normal: true });
    }
  }, [isActive]);

  return (
    <div>
      <h3>Select Accident Type</h3>
      <br />
      <br />
      <Form className="container">
        <FormGroup controlId="formBasicCheckbox">
          <FormCheck
            type="checkbox"
            label="Car vs Car"
            checked={isActive.car_vs_car ? "checked" : ""}
          />
        </FormGroup>
        <FormGroup controlId="formBasicCheckbox">
          <FormCheck
            type="checkbox"
            label="Car vs Bike"
            checked={isActive.car_vs_bike ? "checked" : ""}
          />
        </FormGroup>
        <FormGroup controlId="formBasicCheckbox">
          <FormCheck
            type="checkbox"
            label="Car vs Pedestrian"
            checked={isActive.car_vs_pedestrian ? "checked" : ""}
          />
        </FormGroup>
        <FormGroup controlId="formBasicCheckbox">
          <FormCheck
            type="checkbox"
            label="Car vs tree"
            checked={isActive.car_vs_tree ? "checked" : ""}
          />
        </FormGroup>
        <FormGroup controlId="formBasicCheckbox">
          <FormCheck
            type="checkbox"
            label="Human Gatherings"
            checked={isActive.human_gatherings ? "checked" : ""}
          />
        </FormGroup>
        <FormGroup controlId="formBasicCheckbox">
          <FormCheck
            type="checkbox"
            label="Drown In Water"
            checked={isActive.drown_in_water ? "checked" : ""}
          />
        </FormGroup>
        <FormGroup controlId="formBasicCheckbox">
          <FormCheck
            type="checkbox"
            label="Vehicle Fire"
            checked={isActive.vehicle_fire ? "checked" : ""}
          />
        </FormGroup>
        <FormGroup controlId="formBasicCheckbox">
          <FormCheck
            type="checkbox"
            label="Normal"
            checked={isActive.normal ? "checked" : ""}
          />
        </FormGroup>
      </Form>
    </div>
  );
}

export default Select;
