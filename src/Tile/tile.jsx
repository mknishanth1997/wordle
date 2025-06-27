import "./tile.css";

export function Tile({
  statusColor = "white",
  letter = "",
  winningRowIndex,
  setWinningRowIndex,
  animate = false,
}) {
  const baseClassName = "tile-box";
  let statusClassName = statusColor;
  let animationStatus = animate ? "pop-animation" : null;
  const finalClassName = `${baseClassName} ${statusClassName} ${animationStatus} `;
  return (
    <>
      <div className={finalClassName}>
        <h1>{letter}</h1>
      </div>
    </>
  );
}
