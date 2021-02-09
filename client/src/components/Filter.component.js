import React, {useState, useEffect} from 'react';
import Button from 'react-bulma-components/lib/components/button';
import Tile from 'react-bulma-components/lib/components/tile';
import Heading from 'react-bulma-components/lib/components/heading';
import Image from 'react-bulma-components/lib/components/image';
import Tag from 'react-bulma-components/lib/components/tag';
import ExportCSV from './ExportCSV.component';
import axios from "axios";
import '../App.css';

//---------------- Bottle filter

export const BottleFilter = (props) => {
  const bottle = props.bottle;
  const bottles = props.bottles;
  const rod = props.rod;
  const brush = props.brush;
  const setBuildClick = props.setBuildClick;
  const buildClick = props.buildClick;

  const addBottle = async (data) => {
    await axios.post("/bottle", {
      name: data.name,
      drawing: data.drawing,
      mold: data.mold,
      depth: data.depth,
      thread: data.thread
    })
    .then(function (response) {
      if (response.status === 200) {
        alert("Bottle added to the list!");
        console.log("Succesfully added");
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

  const addBottleClick = (element) => {
    addBottle(element);
    setBuildClick(!buildClick);
  };

  if (bottle && bottle.name){
    const filteredBottles = bottles.filter( element => {
      return element.name.toLowerCase().indexOf(bottle.name.toLowerCase()) !== -1;
    });

    return (
      <div>
        <ExportCSV csvData={filteredBottles} fileName="bottles" />
        <br />
        <br />
        {filteredBottles.map((element) => (
          <Tile kind="ancestor" className="App">
            <Tile kind="parent">
              <Tile renderAs="article" kind="child" notification color="light">
                <Heading size={7} renderAs="h6">{element.name}
                  <br/>
                  <br/>
                  <Tag color="dark" className="App"> Drawing </Tag>
                  <Tag color="info"> {element.drawing}</Tag>
                  <br/>
                  <Tag color="dark"> Thread </Tag>
                  <Tag color="info"> {element.thread}</Tag>
                <br/>
                  <Tag color="dark"> Depth </Tag>
                  <Tag color="info"> {element.depth}</Tag>
                <br/>
                <br/>
                <Button
                  type="submit"
                  color="info"
                  onClick={() => {
                    addBottleClick(element);
                  }}
                  size="small"
                >
                  Add Bottle
                </Button>
                </Heading>
              </Tile>
            </Tile>
          </Tile>
        ))}
      </div>
    );
  } else if (rod && rod.thread && brush && brush.brushLength){
    const filteredBottles = bottles.filter( element => {
      let gap = (Number(element.depth) - (Number(rod.dimensions.length) + Number(brush.brushLength)) );
      if (gap > 2 && gap < 6 && (element.thread.toLowerCase().indexOf(rod.thread.toLowerCase()) !== -1) ){
        return element;
      } else {
        return "";
      }
    });

    return (
      <div>
      <ExportCSV csvData={filteredBottles} fileName="bottles" />
      <br />
      <br />
        {filteredBottles.map((element) => (
          <Tile kind="ancestor" className="App">
            <Tile kind="parent">
              <Tile renderAs="article" kind="child" notification color="light">
                <Heading size={7} renderAs="h6">{element.name}
                  <br/>
                  <br/>
                  <Tag color="dark" className="App"> Drawing </Tag>
                  <Tag color="info"> {element.drawing}</Tag>
                  <br/>
                  <Tag color="dark"> Thread </Tag>
                  <Tag color="info"> {element.thread}</Tag>
                  <br/>
                  <Tag color="dark"> Depth </Tag>
                  <Tag color="info"> {element.depth}</Tag>
                  <br/>
                  <br/>
                  <Button
                    type="submit"
                    color="info"
                    onClick={() => {
                      addBottleClick(element);
                    }}
                    size="small"
                  >
                    Add Bottle
                  </Button>
                </Heading>
              </Tile>
            </Tile>
          </Tile>
        ))}
      </div>
    );

  } else if (rod && rod.thread){
    const filteredBottles = bottles.filter( element => {
      return element.thread.toLowerCase().indexOf(rod.thread.toLowerCase()) !== -1;
    });

    return (
      <div>
      <ExportCSV csvData={filteredBottles} fileName="bottles" />
      <br />
      <br />
        {filteredBottles.map((element) => (
          <Tile kind="ancestor" className="App">
            <Tile kind="parent">
              <Tile renderAs="article" kind="child" notification color="light">
                <Heading size={7} renderAs="h6">{element.name}
                  <br/>
                  <br/>
                  <Tag color="dark" className="App"> Drawing </Tag>
                  <Tag color="info"> {element.drawing}</Tag>
                  <br/>
                  <Tag color="dark"> Thread </Tag>
                  <Tag color="info"> {element.thread}</Tag>
                  <br/>
                  <Tag color="dark"> Depth </Tag>
                  <Tag color="info"> {element.depth}</Tag>
                  <br/>
                  <br/>
                  <Button
                    type="submit"
                    color="info"
                    onClick={() => {
                      addBottleClick(element);
                    }}
                    size="small"
                  >
                    Add Bottle
                  </Button>
                </Heading>
              </Tile>
            </Tile>
          </Tile>
        ))}
      </div>
    );
  }

  return (
    <div>
    <ExportCSV csvData={bottles} fileName="bottles" />
    <br />
    <br />
      {bottles.map((element) => (
        <Tile kind="ancestor" className="App">
          <Tile kind="parent">
            <Tile renderAs="article" kind="child" notification color="light">
              <Heading size={7} renderAs="h6">{element.name}
                <br/>
                <br/>
                <Tag color="dark" className="App"> Drawing </Tag>
                <Tag color="info"> {element.drawing}</Tag>
                <br/>
                <Tag color="dark"> Thread </Tag>
                <Tag color="info"> {element.thread}</Tag>
                <br/>
                <Tag color="dark"> Depth </Tag>
                <Tag color="info"> {element.depth}</Tag>
                <br/>
                <br/>
                <Button
                  type="submit"
                  color="info"
                  onClick={() => {
                    addBottleClick(element);
                  }}
                  size="small"
                >
                  Add Bottle
                </Button>
              </Heading>
            </Tile>
          </Tile>
        </Tile>
      ))}
    </div>
  );
};

//---------------- Bottle filter

//---------------- Brush filter

export const BrushFilter = (props) => {
  const brush = props.brush;
  const brushes = props.brushes;
  const claim = props.claim;
  const rod = props.rod;
  const bottle = props.bottle;
  const setBuildClick = props.setBuildClick;
  const buildClick = props.buildClick;

  const addBrush = async (data) => {
    await axios.post("/brush", {
        brush: data.brush,
        original: data.original,
        shaftLength: data.shaftLength,
        shaftDiameter: data.shaftDiameter,
        brushLength: data.brushLength,
        brushDiameter: data.brushDiameter,
        type: data.type
      })
      .then(function (response) {
        if (response.status === 200) {
          alert("Brush added to the list!");
          console.log("Succesfully added");
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

  const addBrushClick = (element) => {
    addBrush(element);
    setBuildClick(!buildClick);
  };

   if (brush && brush.brush){
    const filteredBrushes = brushes.filter( element => {
      return element.brush.toLowerCase().indexOf(brush.brush.toLowerCase()) !== -1;
    });

    return (
      <div>
      <ExportCSV csvData={filteredBrushes} fileName="brushes" />
      <br />
      <br />
        {filteredBrushes.map((element) => (
          <Tile kind="ancestor" className="App">
            <Tile kind="parent">
              <Tile renderAs="article" kind="child" notification color="light">
                <Heading size={7} renderAs="h6" >{element.brush}
                  <br/>
                  <br/>
                  <Image rounded="true" key={element.brush} size="2by1" className="center" src={require(`../images/${element.brush}.jpg`)} alt="" />
                  <br/>
                  <Tag color="dark"> Drawing </Tag>
                  <Tag color="info"> {element.drawing}</Tag>
                  <br/>
                  <Tag color="dark"> Type </Tag>
                  <Tag color="info"> {element.type}</Tag>
                  <br/>
                  <Tag color="dark"> Length </Tag>
                  <Tag color="info"> {element.brushLength}</Tag>
                  <br/>
                  <Tag color="dark"> Shaft </Tag>
                  <Tag color="info"> {element.shaftDiameter}</Tag>
                  <br/>
                  <Tag color="dark"> Brush </Tag>
                  <Tag color="info"> {element.brushDiameter}</Tag>
                  <br/>
                  <br/>
                  <Button
                    type="submit"
                    color="info"
                    size="small"
                    onClick={() => {
                      addBrushClick(element);
                    }}
                  >
                    Add Brush
                  </Button>
                </Heading>
              </Tile>
            </Tile>
          </Tile>
        ))}
      </div>
    );

  } else if (claim){
    const filteredBrushes = brushes.filter( element => {
      if (claim === "definition" && element.claim.definition === true) {
        return element;
      } else if (claim === "volumizing" && element.claim.volumizing === true)  {
        return element;
      } else if (claim === "lengthening" && element.claim.lengthening === true) {
        return element;
      } else if (claim === "curling" && element.claim.curling === true) {
        return element;
      } else if (claim === "plumping" && element.claim.plumping === true) {
        return element;
      } else {
        return "";
      }
    });

    return (
      <div>
      <ExportCSV csvData={filteredBrushes} fileName="brushes" />
      <br />
      <br />
        {filteredBrushes.map((element) => (
          <Tile kind="ancestor" className="App">
            <Tile kind="parent">
              <Tile renderAs="article" kind="child" notification color="light">
                <Heading size={7} renderAs="h6" >{element.brush}
                  <br/>
                  <br/>
                  <Image rounded="true" key={element.brush} size="2by1" className="center" src={require(`../images/${element.brush}.jpg`)} alt="" />
                  <br/>
                  <Tag color="dark"> Drawing </Tag>
                  <Tag color="info"> {element.drawing}</Tag>
                  <br/>
                  <Tag color="dark"> Type </Tag>
                  <Tag color="info"> {element.type}</Tag>
                  <br/>
                  <Tag color="dark"> Length </Tag>
                  <Tag color="info"> {element.brushLength}</Tag>
                  <br/>
                  <Tag color="dark"> Shaft </Tag>
                  <Tag color="info"> {element.shaftDiameter}</Tag>
                  <br/>
                  <Tag color="dark"> Brush </Tag>
                  <Tag color="info"> {element.brushDiameter}</Tag>
                  <br/>
                  <br/>
                  <Button
                    type="submit"
                    color="info"
                    size="small"
                    onClick={() => {
                      addBrushClick(element);
                    }}
                  >
                    Add Brush
                  </Button>
                </Heading>
              </Tile>
            </Tile>
          </Tile>
        ))}
      </div>
    );

  } else if (rod && rod.name && bottle && bottle.name){
    const filteredBrushes = brushes.filter( element => {
      let mascaraGap =  (Number(bottle.depth) - (Number(element.brushLength) + Number(rod.dimensions.length)));
      if (mascaraGap > 1 && mascaraGap < 6) {
        return element;
      } else {
        return null ;
      }
    });

    return (
      <div>
      <ExportCSV csvData={filteredBrushes} fileName="brushes" />
      <br />
      <br />
        {filteredBrushes.map((element) => (
          <Tile kind="ancestor" className="App">
            <Tile kind="parent">
              <Tile renderAs="article" kind="child" notification color="light">
                <Heading size={7} renderAs="h6" >{element.brush}
                  <br/>
                  <br/>
                  <Image rounded="true" key={element.brush} size="2by1" className="center" src={require(`../images/${element.brush}.jpg`)} alt="" />
                  <br/>
                  <Tag color="dark"> Drawing </Tag>
                  <Tag color="info"> {element.drawing}</Tag>
                  <br/>
                  <Tag color="dark"> Type </Tag>
                  <Tag color="info"> {element.type}</Tag>
                  <br/>
                  <Tag color="dark"> Length </Tag>
                  <Tag color="info"> {element.brushLength}</Tag>
                  <br/>
                  <Tag color="dark"> Shaft </Tag>
                  <Tag color="info"> {element.shaftDiameter}</Tag>
                  <br/>
                  <Tag color="dark"> Brush </Tag>
                  <Tag color="info"> {element.brushDiameter}</Tag>
                  <br/>
                  <br/>
                  <Button
                    type="submit"
                    color="info"
                    size="small"
                    onClick={() => {
                      addBrushClick(element);
                    }}
                  >
                    Add Brush
                  </Button>
                </Heading>
              </Tile>
            </Tile>
          </Tile>
        ))}
      </div>
    );

  }

  return (
    <div>
    <ExportCSV csvData={brushes} fileName="brushes" />
    <br />
    <br />
      {brushes.map((element) => (
        <Tile kind="ancestor" className="App">
          <Tile kind="parent">
            <Tile renderAs="article" kind="child" notification color="light">
              <Heading size={7} renderAs="h6" >{element.brush}
                <br/>
                <br/>
                <Image rounded="true" key={element.brush} size="2by1" className="center" src={require(`../images/${element.brush}.jpg`)} alt="" />
                <br/>
                <Tag color="dark"> Drawing </Tag>
                <Tag color="info"> {element.drawing}</Tag>
                <br/>
                <Tag color="dark"> Type </Tag>
                <Tag color="info"> {element.type}</Tag>
                <br/>
                <Tag color="dark"> Length </Tag>
                <Tag color="info"> {element.brushLength}</Tag>
                <br/>
                <Tag color="dark"> Shaft </Tag>
                <Tag color="info"> {element.shaftDiameter}</Tag>
                <br/>
                <Tag color="dark"> Brush </Tag>
                <Tag color="info"> {element.brushDiameter}</Tag>
                <br/>
                <br/>
                <Button
                  type="submit"
                  color="info"
                  size="small"
                  onClick={() => {
                    addBrushClick(element);
                  }}
                >
                  Add Brush
                </Button>
              </Heading>
            </Tile>
          </Tile>
        </Tile>
      ))}
    </div>
  );
};

//---------------- Brush filter

//---------------- Rod filter

export const RodFilter = (props) => {
  const rod = props.rod;
  const rods = props.rods;
  const bottle = props.bottle;
  const brush = props.brush;
  const setBuildClick = props.setBuildClick;
  const buildClick = props.buildClick;

  const addRod = async (data) => {
    await axios.post("/rod", {
        name: data.name,
        drawing: data.drawing,
        thread: data.thread,
        dimensions: {
          length: data.dimensions.length,
          rodDiameter: data.dimensions.rodDiameter,
          brushDiameter: data.dimensions.brushDiameter,
        }
      })
      .then(function (response) {
        if (response.status === 200) {
          alert("Rod added to the list!");
          console.log("Succesfully added");
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

  const addRodClick = (element) => {
    addRod(element);
    setBuildClick(!buildClick);
  };

  if (rod && rod.name){
    const filteredRods = rods.filter( element => {
      return element.name.toLowerCase().indexOf(rod.name.toLowerCase()) !== -1;
    });

    return (
      <div>
      <ExportCSV csvData={filteredRods} fileName="rods" />
      <br />
      <br />
        {filteredRods.map((element) => (
          <Tile kind="ancestor" className="App">
            <Tile kind="parent">
              <Tile renderAs="article" kind="child" notification color="light">
                <Heading size={7} renderAs="h6" >{element.name}
                  <br/>
                  <br/>
                  <Tag color="dark"> Drawing </Tag>
                  <Tag color="info"> {element.drawing}</Tag>
                  <br/>
                  <Tag color="dark"> Thread </Tag>
                  <Tag color="info"> {element.thread}</Tag>
                  <br/>
                  <Tag color="dark"> Length </Tag>
                  <Tag color="info"> {element.dimensions.length}</Tag>
                  <br/>
                  <Tag color="dark"> Shaft </Tag>
                  <Tag color="info"> {element.dimensions.brushDiameter}</Tag>
                  <br/>
                  <Tag color="dark"> Rod </Tag>
                  <Tag color="info"> {element.dimensions.rodDiameter}</Tag>
                  <br/>
                  <br/>
                  <Button
                    type="submit"
                    color="info"
                    size="small"
                    onClick={() => {
                      addRodClick(element);
                    }}
                  >
                    Add Rod
                  </Button>
                </Heading>
              </Tile>
            </Tile>
          </Tile>
        ))}
      </div>
    );

  } else if (bottle && bottle.thread && bottle.depth){
    const filteredRods = rods.filter( element => {
      let depthDiff = (Number(bottle.depth) - Number(element.dimensions.length));
      if (element.thread && (depthDiff > 0)) {
        return element.thread.toLowerCase().indexOf(bottle.thread.toLowerCase()) !== -1;
      } else {
        return "";
      }
    });

    return (
      <div>
      <ExportCSV csvData={filteredRods} fileName="rods" />
      <br />
      <br />
        {filteredRods.map((element) => (
          <Tile kind="ancestor" className="App">
            <Tile kind="parent">
              <Tile renderAs="article" kind="child" notification color="light">
                <Heading size={7} renderAs="h6" >{element.name}
                  <br/>
                  <br/>
                  <Tag color="dark"> Drawing </Tag>
                  <Tag color="info"> {element.drawing}</Tag>
                  <br/>
                  <Tag color="dark"> Thread </Tag>
                  <Tag color="info"> {element.thread}</Tag>
                  <br/>
                  <Tag color="dark"> Length </Tag>
                  <Tag color="info"> {element.dimensions.length}</Tag>
                  <br/>
                  <Tag color="dark"> Shaft </Tag>
                  <Tag color="info"> {element.dimensions.brushDiameter}</Tag>
                  <br/>
                  <Tag color="dark"> Rod </Tag>
                  <Tag color="info"> {element.dimensions.rodDiameter}</Tag>
                  <br/>
                  <br/>
                  <Button
                    type="submit"
                    color="info"
                    size="small"
                    onClick={() => {
                      addRodClick(element);
                    }}
                  >
                    Add Rod
                  </Button>
                </Heading>
              </Tile>
            </Tile>
          </Tile>
        ))}
      </div>
  );

  } else if (bottle && bottle.thread){
    const filteredRods = rods.filter( element => {
      if (element.thread) {
        return element.thread.toLowerCase().indexOf(bottle.thread.toLowerCase()) !== -1;
      } else {
        return "";
      }
    });

    return (
      <div>
      <ExportCSV csvData={filteredRods} fileName="rods" />
      <br />
      <br />
        {filteredRods.map((element) => (
          <Tile kind="ancestor" className="App">
            <Tile kind="parent">
              <Tile renderAs="article" kind="child" notification color="light">
                <Heading size={7} renderAs="h6" >{element.name}
                  <br/>
                  <br/>
                  <Tag color="dark"> Drawing </Tag>
                  <Tag color="info"> {element.drawing}</Tag>
                  <br/>
                  <Tag color="dark"> Thread </Tag>
                  <Tag color="info"> {element.thread}</Tag>
                  <br/>
                  <Tag color="dark"> Length </Tag>
                  <Tag color="info"> {element.dimensions.length}</Tag>
                  <br/>
                  <Tag color="dark"> Shaft </Tag>
                  <Tag color="info"> {element.dimensions.brushDiameter}</Tag>
                  <br/>
                  <Tag color="dark"> Rod </Tag>
                  <Tag color="info"> {element.dimensions.rodDiameter}</Tag>
                  <br/>
                  <br/>
                  <Button
                    type="submit"
                    color="info"
                    size="small"
                    onClick={() => {
                      addRodClick(element);
                    }}
                  >
                    Add Rod
                  </Button>
                </Heading>
              </Tile>
            </Tile>
          </Tile>
        ))}
      </div>
  );

  } else if (brush && brush.type){
    const filteredRods = rods.filter( element => {
      let brushRodDiff =  Number(element.dimensions.brushDiameter) - Number(brush.shaftDiameter);
      let wipeDelta =  Number(brush.brushDiameter) - Number(element.dimensions.rodDiameter) ;
      if (brush.type === "INYECTADO" && wipeDelta > 0.5 && wipeDelta < 4.8) {
        if (brushRodDiff > 0.05 && brushRodDiff < 0.15){
          return element;
        } else {
          return "";
        }
      }
      if (brush.type === "NYLON" && wipeDelta > 0.8 && wipeDelta < 6.4) {
        if (brushRodDiff > -0.05 && brushRodDiff < 0.1){
          return element;
        } else {
          return "";
        }
      }
      if (brush.type === "LIP GLOSS" && wipeDelta > -2 && wipeDelta < 3) {
        if (brushRodDiff > 0 && brushRodDiff < 0.2){
          return element;
        } else {
          return "";
        }
      }
      if (brush.type === "DELINEADOR" && wipeDelta > -2 && wipeDelta < -1) {
        if (brushRodDiff > -0.05 && brushRodDiff < 0.1){
          return element;
        } else {
          return "";
        }
      }
    });

    return (
      <div>
      <ExportCSV csvData={filteredRods} fileName="rods" />
      <br />
      <br />
        {filteredRods.map((element) => (
          <Tile kind="ancestor" className="App">
            <Tile kind="parent">
              <Tile renderAs="article" kind="child" notification color="light">
                <Heading size={7} renderAs="h6" >{element.name}
                  <br/>
                  <br/>
                  <Tag color="dark"> Drawing </Tag>
                  <Tag color="info"> {element.drawing}</Tag>
                  <br/>
                  <Tag color="dark"> Thread </Tag>
                  <Tag color="info"> {element.thread}</Tag>
                  <br/>
                  <Tag color="dark"> Length </Tag>
                  <Tag color="info"> {element.dimensions.length}</Tag>
                  <br/>
                  <Tag color="dark"> Shaft </Tag>
                  <Tag color="info"> {element.dimensions.brushDiameter}</Tag>
                  <br/>
                  <Tag color="dark"> Rod </Tag>
                  <Tag color="info"> {element.dimensions.rodDiameter}</Tag>
                  <br/>
                  <br/>
                  <Button
                    type="submit"
                    color="info"
                    size="small"
                    onClick={() => {
                      addRodClick(element);
                    }}
                  >
                    Add Rod
                  </Button>
                </Heading>
              </Tile>
            </Tile>
          </Tile>
        ))}
      </div>
  );

  }

  return (
    <div>
    <ExportCSV csvData={rods} fileName="rods" />
    <br />
    <br />
      {rods.map((element) => (
        <Tile kind="ancestor" className="App">
          <Tile kind="parent">
            <Tile renderAs="article" kind="child" notification color="light">
              <Heading size={7} renderAs="h6" >{element.name}
                <br/>
                <br/>
                <Tag color="dark"> Drawing </Tag>
                <Tag color="info"> {element.drawing}</Tag>
                <br/>
                <Tag color="dark"> Thread </Tag>
                <Tag color="info"> {element.thread}</Tag>
                <br/>
                <Tag color="dark"> Length </Tag>
                <Tag color="info"> {element.dimensions.length}</Tag>
                <br/>
                <Tag color="dark"> Shaft </Tag>
                <Tag color="info"> {element.dimensions.brushDiameter}</Tag>
                <br/>
                <Tag color="dark"> Rod </Tag>
                <Tag color="info"> {element.dimensions.rodDiameter}</Tag>
                <br/>
                <br/>
                <Button
                  type="submit"
                  color="info"
                  size="small"
                  onClick={() => {
                    addRodClick(element);
                  }}
                >
                  Add Rod
                </Button>
              </Heading>
            </Tile>
          </Tile>
        </Tile>
      ))}
    </div>

  );

};

//---------------- Rod filter

//---------------- Wiper filter

export const WiperFilter = (props) => {
  const wiper = props.wiper;
  const wipers = props.wipers;
  const setBuildClick = props.setBuildClick;
  const buildClick = props.buildClick;

  const addWiper = async (data) => {
    await axios.post("/wiper", {
        name: data.name,
        drawing: data.drawing,
        mold: data.mold,
      })
      .then(function (response) {
        if (response.status === 200) {
          alert("Wiper added to the list!");
          console.log("Wiper succesfully added");
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

  const addWiperClick = (element) => {
    addWiper(element);
    setBuildClick(!buildClick);
  };

   if (wiper && wiper.name){
    const filteredWipers = wipers.filter( element => {
      return element.name.toLowerCase().indexOf(wiper.name.toLowerCase()) !== -1;
    });

    return (
      <div>
      <ExportCSV csvData={filteredWipers} fileName="wipers" />
      <br />
      <br />
        {filteredWipers.map((element) => (
          <Tile kind="ancestor" className="App">
            <Tile kind="parent">
              <Tile renderAs="article" kind="child" notification color="light">
              <Heading size={7} renderAs="h6" >{element.name}
                <br/>
                <br/>
                <Tag color="dark"> Drawing </Tag>
                <Tag color="info"> {element.drawing}</Tag>
                <br/>
                <br/>
                <Button
                  type="submit"
                  color="info"
                  size="small"
                  onClick={() => {
                    addWiperClick(element);
                  }}
                >
                  Add Wiper
                </Button>
              </Heading>
              </Tile>
            </Tile>
          </Tile>
        ))}
      </div>
    );
  }

  return (
    <div>
    <ExportCSV csvData={wipers} fileName="wipers" />
    <br />
    <br />
      {wipers.map((element) => (
        <Tile kind="ancestor" className="App">
          <Tile kind="parent">
            <Tile renderAs="article" kind="child" notification color="light">
              <Heading size={7} renderAs="h6" >{element.name}
                <br/>
                <br/>
                <Tag color="dark"> Drawing </Tag>
                <Tag color="info"> {element.drawing}</Tag>
                <br/>
                <br/>
                <Button
                  type="submit"
                  color="info"
                  size="small"
                  onClick={() => {
                    addWiperClick(element);
                  }}
                >
                  Add Wiper
                </Button>
              </Heading>
            </Tile>
          </Tile>
        </Tile>
      ))}
    </div>
  );
};

//---------------- Wiper filter

//---------------- Filter component

const Filter = () => {

//---------------- hooks

  const [bottle, setBottle] = useState([]);
  const [bottles, setBottles] = useState([]);
  const [rod, setRod] = useState([]);
  const [rods, setRods] = useState([]);
  const [wiper, setWiper] = useState([]);
  const [wipers, setWipers] = useState([]);
  const [brush, setBrush] = useState([]);
  const [brushes, setBrushes] = useState([]);
  const [claim, setClaim] = useState("");
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

    fetchBuild();
    fetchBottles();
    fetchBrushes();
    fetchRods();
    fetchWipers();

    if (!build[0]) {
      setWiper([]);
      setRod([]);
      setBrush([]);
      setBottle([]);
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
          <Tile renderAs="article" kind="child" notification className="is-white border verticalPad">
          <Button.Group size="small">
            <Button
              type="submit"
              className="is-danger is-light"
              size="small"
              onClick={() => {
                setClaim("");
              }}
            >
              No claim
            </Button>
            <Button
              type="submit"
              className="is-link"
              size="small"
              onClick={() => {
                setClaim("definition");
              }}
            >
              Definition
            </Button>
            <Button
              type="submit"
              className="is-link"
              size="small"
              onClick={() => {
                setClaim("volumizing");
              }}
            >
              Volumizing
            </Button>
            <Button
              type="submit"
              className="is-link"
              size="small"
              onClick={() => {
                setClaim("lengthening");
              }}
            >
              Lengthening
            </Button>
            <Button
              type="submit"
              className="is-link"
              size="small"
              onClick={() => {
                setClaim("plumping");
              }}
            >
              Plumping
            </Button>
            <Button
              type="submit"
              className="is-link"
              size="small"
              onClick={() => {
                setClaim("curling");
              }}
            >
              Curling
            </Button>
          </Button.Group>
            {claim ?
              <div>
                <Tag color="dark"> { claim } </Tag>
              </div>
              : "" }
          </Tile>
          <Tile renderAs="article" kind="child" notification className="is-white border">
            <ExportCSV csvData={build} fileName="build"/>
            <Button
              type="submit"
              className="is-danger is-light"
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
            </Tag.Group>
          </Tile>
        </Tile>
      </Tile>

      <Tile kind="ancestor">
        <Tile kind="parent" className="App">
          <Tile renderAs="article" kind="child" notification color="white">
            <BottleFilter rod={rod} brush={brush} bottle={bottle} bottles={bottles} setBuildClick={setBuildClick} buildClick={buildClick}></BottleFilter>
          </Tile>
          <Tile renderAs="article" kind="child" notification color="white" className="center">
            <BrushFilter rod={rod} bottle={bottle} setBuildClick={setBuildClick} buildClick={buildClick} brush={brush} brushes={brushes} claim={claim}></BrushFilter>
          </Tile>
          <Tile renderAs="article" kind="child" notification color="white">
            <RodFilter rod={rod} rods={rods} bottle={bottle} setBuildClick={setBuildClick} buildClick={buildClick} brush={brush}></RodFilter>
          </Tile>
          <Tile renderAs="article" kind="child" notification color="white">
            <WiperFilter rod={rod} rods={rods} bottle={bottle} setBuildClick={setBuildClick} buildClick={buildClick} brush={brush} wiper={wiper} wipers={wipers}></WiperFilter>
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
