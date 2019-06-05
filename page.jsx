// AJB TODO:
// -Properly orient jsx markup to get remady console.log errors
// -Page looks disgusting ;;; take a stylist course

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import CounterButton from "./counter";
import Sensors from "./sensors";
import CounterButtonDown from "./counterDown";
import { Table } from "react-bootstrap";
import { Image } from "react-bootstrap/Image";
import Fade from "react-bootstrap/Fade";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";
import { setState } from "react";
import RTChart from "react-rt-chart";

let title = { color: "white", fontWeight: "bold", background: "black" };

export default function Page() {
  const [table1, setTable1] = React.useState([false]);
  const [table2, setTable2] = React.useState([false]);
  const [table3, setTable3] = React.useState([false]);
  const [descript, setDescript] = React.useState([false]);

  return (
    <body>
      <h1 className="header" style={title}>
        The OPC Project
      </h1>

      <div>Open Process Control</div>

      <div>
        <div>
          <Button
            onClick={() => setDescript(descript ? false : true)}
            variant="outline-primary"
            size="lg"
            block
          >
            Description
          </Button>
          <Collapse in={descript}>
            <p>
              <div />
              OPC is an open source full stack web application. It's objective
              is to bring a low cost automation control and data acquisition
              solution to small business owners. OPC is currently in its first
              phase of development and is mostly proof of concept as of the time
              of this writing 2019/05/31 00:22. OPC is running on a Fedora 30
              Server KVM guest with a MariaDB database that receives an array of
              data entries from an infield micro processor via Dr. Charles
              Bell's MySQL Connector library. The database is then queried via
              the node Express application. A React front-end request sensor
              data and displays data in the browser through the aid of React
              Hooks.
              <div />
              <p>
                OPC is less of a product and serves more as a landscape for me
                to implement concepts and technologies, both hardware and
                software, as I learn about them and grow in my engineering
                journey.{" "}
              </p>
            </p>
          </Collapse>
        </div>
        <div>
          <Button
            onClick={() => setTable1(table1 ? false : true)}
            variant="outline-primary"
            size="lg"
            block
          >
            Project Hardware
          </Button>
          <Collapse in={table1}>
            <Table
              striped
              bordered
              condensed
              hover
              responsive
              size="sm"
              variant="dark"
            >
              <thead>
                <tr>
                  <th>
                    2012 Dell c8220
                    <img src="zeus.jpg" alt="" width="150" height="100" />
                  </th>
                  <th>Quntity</th>
                  <th>
                    Arduino Micro-Controller
                    <img src="mcu.jpg" alt="" width="150" height="100" />
                  </th>
                  <th>Quntity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Xeon E5-2690</td>
                  <td>2</td>
                  <td>Arduino Ethernet Shield</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Corsair Hydro Series H100i v2</td>
                  <td>2</td>
                  <td />
                  <td />
                </tr>
                <tr>
                  <td>Samsung M393B2G70D80 16gb 2Rx4 PC3-14900R</td>
                  <td>16</td>
                  <td />
                  <td />
                </tr>
                <tr>
                  <td>Samsung 850 Pro 256gb ssd</td>
                  <td>2</td>
                  <td />
                  <td />
                </tr>
                <tr>
                  <td>Toshiba MG05ACA800A 8tb</td>
                  <td>4</td>
                  <td />
                  <td />
                </tr>
                <tr>
                  <td>MSI Radeon RX 580 8gb</td>
                  <td>1</td>
                  <td />
                  <td />
                </tr>
                <tr>
                  <td>Corsair CX750</td>
                  <td>1</td>
                  <td />
                  <td />
                </tr>
              </tbody>
            </Table>
          </Collapse>
        </div>

        <div className="list-group">
          <Button
            onClick={() => setTable2(table2 ? false : true)}
            variant="outline-primary"
            size="lg"
          >
            Technology Stack and Configuration:
          </Button>
          <Collapse in={table2}>
            <Table
              striped
              bordered
              condensed
              hover
              responsive="sm"
              size="sm"
              variant="dark"
            >
              <thead>
                <tr>
                  <th>Hypervisor</th>
                  <th>Web Server</th>
                  <th>Micro-Controller</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CentOS 7 KVM</td>
                  <td>CentOS 7 Guest</td>
                  <td>Arduino</td>
                </tr>
                <tr>
                  <td>virt-manager</td>
                  <td>Appache HTTP Server</td>
                  <td>C++</td>
                </tr>
                <tr>
                  <td />
                  <td>MariaDB (MySQL)</td>
                  <td />
                </tr>
                <tr>
                  <td />
                  <td>Node.js</td>
                  <td />
                </tr>
                <tr>
                  <td />
                  <td>Express</td>
                  <td />
                  <td />
                </tr>
                <tr>
                  <td />
                  <td>React</td>
                  <td />
                </tr>
              </tbody>
            </Table>
          </Collapse>
        </div>

        <Button
          onClick={() => setTable3(table3 ? false : true)}
          variant="outline-primary"
          size="lg"
          block
        >
          Micro Controler Sensors
        </Button>

        <Collapse in={table3}>
          <Table>
            <thead>
              <tr />
            </thead>
            <tbody>
              <Sensors />
            </tbody>
          </Table>
        </Collapse>
      </div>
    </body>
  );
}
