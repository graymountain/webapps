function floorHeights(startLevel, floors){
  var heights = [];
  level = startLevel;
  for (var no = 0; no < floors; no ++) {
    level = level + 3000;
    heights.push(level);
  }
  return heights;
}

var x = floorHeights(3500, 23);
console.log("The floor levels are " + x);