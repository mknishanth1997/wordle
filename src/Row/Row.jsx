import { Tile } from "../Tile/tile";
import "./Row.css";

export function Row({
  rowArray,
  indexMain,
  setWinningRowIndex,
  winningRowIndex,
  animate,
}) {
  // [{}, {}, {}, {}, {}]
  // console.log(rowArray);
  return (
    <>
      {rowArray.map((individualLetterObj, index) => (
        <Tile
          key={`${indexMain} + ${index}`}
          letter={individualLetterObj.letter}
          statusColor={individualLetterObj.color}
          winningRowIndex={winningRowIndex}
          setWinningRowIndex={setWinningRowIndex}
          animate={animate}
        ></Tile>
      ))}
    </>
  );
}
