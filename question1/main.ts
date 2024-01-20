export function isValidWalk(walk: string[]) {
  //early return if we don't have 10 steps
  if (walk.length !== 10) {
    console.log("Walk does not have 10 steps");
    return false;
  }

  //set n,s,e,w as coordinates
  let x = 0
  let y = 0

  //if n or s, y+ or y-; if e or w x+ or x-
  //loop walk string
  walk.forEach(step => {
    if(step === 'n'){
        y++
    } else if (step === 's'){
        y--
    } else if (step === 'e'){
        x++
    }else if (step === 'w'){
        x--
    }
  })

  //if x and y are 0, we made it to the start
  return (x === 0 && y === 0)
}
