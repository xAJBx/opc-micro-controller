// AJB TODO:
// -remedy sensor render to only render "Value"
// -need a cleaner render

import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { Table } from "react-bootstrap";

export default function Sensors() {
  const [sensors, setSensors] = React.useState([]);

  _applySensorChanges = React.useCallback(sensors => setSensors(sensors), []);

  React.useEffect(() => {
    fetchSensorsAndUpdateUI();
  }, []);

  return (
    <React.Fragment>
      <div className="list-group">
        <Table striped bordered condensed hover size="sm" variant="dark">
          <thead>
            <tr>
              <th>Sensor Number</th>
              <th>Value (*F)</th>
            </tr>
          </thead>
          <tbody>
            {sensors.map(sensor => (
              <tr key={sensor.sensor_num}>
                <td>{sensor.sensor_num}</td>
                <td>{sensor.value}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </React.Fragment>
  );
}

let _applySensorChanges = null;

export function applySensorChanges(sensors) {
  if (_applySensorChanges) {
    _applySensorChanges(sensors);
  }
}

export function fetchSensorsAndUpdateUI() {
  fetch("http://localhost:4001/AI") // enter your node express ip:port/dirrectory
    .then(response => response.json())
    .then(response => applySensorChanges(response.data))
    .catch(err => console.error(err));
}

setInterval(fetchSensorsAndUpdateUI, 1000);
