import { Row } from '../Row/Row';
import './wordle-grid.css';

export function WordleGrid({ fullArray, setWinningRowIndex, winningRowIndex }) {
  return (
    <>
      <div className="grid-container">
        {fullArray.map((rowArray, index) => (
          <Row
            rowArray={rowArray}
            indexMain={index}
            key={index}
            setWinningRowIndex={setWinningRowIndex}
            winningRowIndex={winningRowIndex}
            animate={index === winningRowIndex}
          ></Row>
        ))}
      </div>
    </>
  );
}
