import { useEffect, useRef } from "react";
import "./ParticleBall.scss";
import { ParticleBallFunction } from "./particle-ball-animation";
function ParticleBall() {
  const canvasDiv = useRef(null);
  useEffect(() => {
    if (canvasDiv.current.children.length === 0) {
      const app = ParticleBallFunction();
      canvasDiv.current.appendChild(app.view);
    }
  }, []);
  return <div id="particle-ball" ref={canvasDiv}></div>;
}

export default ParticleBall;
