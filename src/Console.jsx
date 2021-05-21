import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
function Console(props) {
  const [ConsoleData, SetConsoleData] = useState(null);

  useEffect(
    function () {
      axios
        .get(` https://csc225.mockable.io/consoles/${props.selectedConsole}`)
        .then(function (response) {
          SetConsoleData(response.data);
        });
    },
    [props.selectedConsole]
  );

  if (!ConsoleData) {
    return <Loader type="Audio" color="#DC143C" height={80} width={80} />;
  }
  return (
    <div className="card">
      <img src={ConsoleData.image} alt={ConsoleData.name} />
      <p>{ConsoleData.name}</p>
      <p>Price is ${ConsoleData.price}</p>
      <p>Made in {ConsoleData.country}</p>
      <p>Release Year in {ConsoleData.releaseYear}</p>
    </div>
  );
}
export default Console;
