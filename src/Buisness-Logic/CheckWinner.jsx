export function checkWinner(input, answer) {
  return markGreenTile(input, answer);
}

function markGreenTile(input, answer) {
  //   console.log("answer snapshot:", JSON.stringify(answer, null, 2));

  let answerClone = structuredClone(answer);
  //   console.log("answerClone snapshot:", JSON.stringify(answerClone, null, 2));
  console.log("anserClone", answerClone);
  let greenChecked = input.map((letterObj) => {
    let isGreen = false;
    for (const ans of answerClone) {
      if (
        letterObj.letter === ans.letter &&
        letterObj.position === ans.position
      ) {
        ans.letter = null;
        isGreen = true;
        break;
      }
    }
    if (isGreen) {
      return { ...letterObj, status: "correct", color: "green" };
    } else {
      return { ...letterObj };
    }
  });
  let y = markYellowAndRedTile(greenChecked, answerClone);
  //   console.log("greenChecked:", greenChecked);
  //   console.log("yellowChecked:", y);

  return y;
}

function markYellowAndRedTile(greenChecked, answerClone) {
  return greenChecked.map((gc) => {
    if (gc.color === "green") return gc;
    let isYellow = false;
    for (const ans of answerClone) {
      if (ans.letter === gc.letter) {
        ans.letter = null;
        isYellow = true;
        break;
      }
    }
    if (isYellow) {
      return { ...gc, status: "present", color: "yellow" };
    } else {
      return { ...gc, status: "absent", color: "red" };
    }
  });
}
