import Sushi from "./Sushi";
import MoreButton from "./MoreButton";
import { useState } from "react";

function SushiContainer({ sushis, onEatSushi }) {
  const [sushiIndex, setSushiIndex] = useState(0);

  const sushiComponents = sushis
    .slice(sushiIndex, sushiIndex + 4)
    .map((sushi) => (
      <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} />
    ));

  function handleClickMore() {
    /** (sushiIndex + 4) % sushis.length
     * is a way to wrap back around to the beginning of the array
     * once we get to the end, using the remainder (%) operator
     */
    setSushiIndex((sushiIndex) => (sushiIndex + 4) % sushis.length);
  }

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onClickMore={handleClickMore} />
    </div>
  );
}

export default SushiContainer;