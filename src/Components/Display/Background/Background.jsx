import { useEffect, useState } from "react";
import partiallyCloudyGif from "../../../Images/partiallycloudy.gif";
import overcastGif from "../../../Images/overcast.gif";
import rainingGif from "../../../Images/raining.gif";
import sunnyGif from "../../../Images/sunny.gif";

const Background = (props) => {
  const [background, setBackground] = useState("");

  useEffect(() => {
    if (props.condition === "Overcast") {
      setBackground(overcastGif);
    }
    if (props.condition === "Partially cloudy") {
      setBackground(partiallyCloudyGif);
    }
    if (props.condition === "Rain") {
      setBackground(rainingGif);
    }
    if (props.condition === "Clear") {
      setBackground(sunnyGif);
    }
    if (props.condition === "Rain, Overcast") {
      setBackground(rainingGif);
    }
  }, [props.condition]);

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-screen w-screen bg-cover bg-no-repeat bg-center ease-out duration-700"
    >
      {props.children}
    </div>
  );
};

export default Background;
