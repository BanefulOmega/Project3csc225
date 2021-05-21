import React, { useEffect, useState } from "react";
import axios from "axios";
import Console from "./Console";
import Loader from "react-loader-spinner";
function Consoles() {
  const [consoles, setConsoles] = useState([]);
  const [selectedConsole, setSelectedConsole] = useState(null);
  function getAllConsoles() {
    axios.get("https://csc225.mockable.io/consoles").then(function (response) {
      setConsoles(response.data);
    });
  }

  useEffect(function () {
    getAllConsoles();
  }, []);

  if (selectedConsole) {
    return (
      <div>
        <Console selectedConsole={selectedConsole} />
        <button onClick={() => setSelectedConsole(null)}>
          <img
            src={
              "https://cdn.alphablossom.com/wp-content/uploads/2014/06/home-icon-featured.png"
            }
          />
        </button>
      </div>
    );
  }
  if (consoles.length === 0) {
    return <Loader type="Grid" color="#DC143C" height={80} width={80} />;
  }
  return (
    <div>
      {consoles.map(function (Console) {
        return (
          <p key={consoles.id}>
            <button onClick={() => setSelectedConsole(Console.id)}>
              {Console.name} - <img src={Console.image} />
            </button>
          </p>
        );
      })}
    </div>
  );
}
export default Consoles;
