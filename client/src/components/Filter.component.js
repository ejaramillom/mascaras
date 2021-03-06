import React, {useState, useEffect} from 'react';
import Button from 'react-bulma-components/lib/components/button';
import Tile from 'react-bulma-components/lib/components/tile';
import Tag from 'react-bulma-components/lib/components/tag';
import ExportCSV from './ExportCSV.component';
import {
  BottleFilter,
  BrushFilter,
  RodFilter,
  WiperFilter,
  CapFilter
} from './PartFilter.component';
import axios from "axios";
import '../App.css';

//---------------- Filter component

const Filter = () => {

//---------------- hooks

  const [bottle, setBottle] = useState([]);
  const [bottles, setBottles] = useState([]);
  const [cap, setCap] = useState([]);
  const [caps, setCaps] = useState([]);
  const [rod, setRod] = useState([]);
  const [rods, setRods] = useState([]);
  const [wiper, setWiper] = useState([]);
  const [wipers, setWipers] = useState([]);
  const [brush, setBrush] = useState([]);
  const [brushes, setBrushes] = useState([]);
  const [claim, setClaim] = useState("");
  const [category, setCategory] = useState("");
  const [build, setBuild] = useState([]);
  const [buildClick, setBuildClick] = useState(false);

//---------------- hooks end

//---------------- useEffect

  useEffect(() => {
    const fetchBuild = async () => {
      const {data} = await axios.get("/build")
      .catch(function (error) {
        console.log(error)
      });
      setBuild(data);
      if (data[0] && data[0].bottle) {
        setBottle(data[0].bottle);
      } else {
        setBottle([])
      }
      if (data[0] && data[0].rod) {
        setRod(data[0].rod);
      } else {
        setRod([])
      }
      if (data[0] && data[0].brush) {
        setBrush(data[0].brush);
      } else {
        setBrush([])
      }
      if (data[0] && data[0].wiper) {
        setWiper(data[0].wiper);
      } else {
        setWiper([])
      }
      if (data[0] && data[0].cap) {
        setCap(data[0].cap);
      } else {
        setCap([])
      }
    }

    const fetchBottles = async () => {
      const {data} = await axios.get("/bottle")
      .catch(function (error) {
        console.log(error)
      });
      setBottles(data);
    }

    const fetchBrushes = async () => {
      const {data} = await axios.get("/brush")
      .catch(function (error) {
        console.log(error)
      });
      setBrushes(data);
    }

    const fetchRods = async () => {
      const {data} = await axios.get("/rod")
      .catch(function (error) {
        console.log(error)
      });
      setRods(data);
    }

    const fetchWipers = async () => {
      const {data} = await axios.get("/wiper")
      .catch(function (error) {
        console.log(error)
      });
      setWipers(data);
    }

    const fetchCaps = async () => {
      const {data} = await axios.get("/cap")
      .catch(function (error) {
        console.log(error)
      });
      setCaps(data);
    }

    fetchBuild();
    fetchBottles();
    fetchBrushes();
    fetchRods();
    fetchWipers();
    fetchCaps();

    if (!build[0]) {
      setWiper([]);
      setRod([]);
      setBrush([]);
      setBottle([]);
      setCap([]);
    }

// no borrar esta linea
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [buildClick]);

//---------------- useEffect

//---------------- middlewares that must be moved and imported

  const deleteBuild = async () => {
    await axios.post("/delete")
    .then(function (response) {
      if (response.status === 200) {
        console.log("Succesfully deleted");
        setBottle([]);
        setRod([]);
        setWiper([]);
        setBrush([]);
        setCap([]);
        alert("Build deleted!");
      } else {
        const err = new Error(response.error);
        console.log(err);
        throw err;
      }
    })
    .catch(function (error) {
      alert(error);
    });
  };

  const removeBuildClick = () => {
    deleteBuild([]);
    setBuildClick(!buildClick);
  };

//---------------- middlewares that must be moved and imported end

//---------------- render
  return (
    <div>
      <Tile kind="ancestor" className="App">
        <Tile kind="parent" className="space">
          <Tile renderAs="article" kind="child" notification className="is-white verticalPad">
            <Button
              type="submit"
              className="is-success is-light leftPad"
              size="small"
              onClick={() => {
                setClaim("");
              }}
            >
              No claim
            </Button>
            <Button
              type="submit"
              className="is-link is-light leftPad"
              size="small"
              onClick={() => {
                setClaim("definition");
              }}
            >
              Definition
            </Button>
            <Button
              type="submit"
              className="is-link is-light leftPad"
              size="small"
              onClick={() => {
                setClaim("volumizing");
              }}
            >
              Volumizing
            </Button>
            <Button
              type="submit"
              className="is-link is-light leftPad"
              size="small"
              onClick={() => {
                setClaim("lengthening");
              }}
            >
              Lengthening
            </Button>
            <Button
              type="submit"
              className="is-link is-light leftPad"
              size="small"
              onClick={() => {
                setClaim("plumping");
              }}
            >
              Plumping
            </Button>
            <Button
              type="submit"
              className="is-link is-light leftPad"
              size="small"
              onClick={() => {
                setClaim("curling");
              }}
            >
              Curling
            </Button>

            <br />
            <br />

            {claim ?
              <div>
                <Tag color="dark"> { claim } </Tag>
              </div>
            : "" }

            <br />

            <Button
              type="submit"
              className="is-success is-light leftPad"
              size="small"
              onClick={() => {
                setCategory("");
              }}
            >
              No category
            </Button>
            <Button
              type="submit"
              className="is-link is-light leftPad"
              size="small"
              onClick={() => {
                setCategory("NYLON");
              }}
            >
              Nylon
            </Button>
            <Button
              type="submit"
              className="is-link is-light leftPad"
              size="small"
              onClick={() => {
                setCategory("INYECTADO");
              }}
            >
              Injected
            </Button>
            <Button
              type="submit"
              className="is-link is-light leftPad"
              size="small"
              onClick={() => {
                setCategory("DELINEADOR");
              }}
            >
              Eyeliner
            </Button>

            <br />
            <br />

            {category ?
              <div>
                <Tag color="dark"> { category } </Tag>
              </div>
            : "" }

          </Tile>

          <Tile renderAs="article" kind="child" notification className="is-white">
            <Button
              type="submit"
              className="is-danger is-light leftPad"
              size="small"
              onClick={() => {
                removeBuildClick();
              }}
            >
              Delete build!
            </Button>
            <br/>
            <br/>
            <Tag.Group className="center">
              <Tag color="dark"> Bottle </Tag>
              <Tag color="light"> {bottle.name}</Tag>
              <Tag color="dark"> Brush </Tag>
              <Tag color="light"> {brush.brush}</Tag>
              <Tag color="dark"> Rod </Tag>
              <Tag color="light"> {rod.name}</Tag>
              <Tag color="dark"> Wiper </Tag>
              <Tag color="light"> {wiper.name}</Tag>
              <Tag color="dark"> Cap </Tag>
              <Tag color="light"> {cap.name}</Tag>
            </Tag.Group>
          </Tile>
        </Tile>
      </Tile>

      <hr></hr>

      <Tile kind="ancestor">
        <Tile kind="parent" className="App">
          <Tile renderAs="article" kind="child" notification color="white">
            <BottleFilter rod={rod} brush={brush} bottle={bottle} bottles={bottles} setBuildClick={setBuildClick} buildClick={buildClick}></BottleFilter>
          </Tile>
          <Tile renderAs="article" kind="child" notification color="white" className="center">
            <BrushFilter rod={rod} bottle={bottle} setBuildClick={setBuildClick} buildClick={buildClick} brush={brush} brushes={brushes} claim={claim} category={category}></BrushFilter>
          </Tile>
          <Tile renderAs="article" kind="child" notification color="white">
            <RodFilter rod={rod} rods={rods} bottle={bottle} setBuildClick={setBuildClick} buildClick={buildClick} brush={brush}></RodFilter>
          </Tile>
          <Tile renderAs="article" kind="child" notification color="white">
            <WiperFilter rod={rod} bottle={bottle} setBuildClick={setBuildClick} buildClick={buildClick} brush={brush} wiper={wiper} wipers={wipers}></WiperFilter>
          </Tile>
          <Tile renderAs="article" kind="child" notification color="white">
            <CapFilter rod={rod} bottle={bottle} setBuildClick={setBuildClick} buildClick={buildClick} cap={cap} caps={caps}></CapFilter>
          </Tile>
          {/* <Tile renderAs="article" kind="child" notification>
            <WiperFilter></WiperFilter>
          </Tile> */}
        </Tile>
      </Tile>

      {/* verifying assembly tiles*/}

      {/* Delete and reset*/}
    </div>
  );
}

//--------------- render

export default Filter;

//---------------- Filter component
