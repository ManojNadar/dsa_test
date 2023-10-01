let hayStack = "sadbutsad";
let needle = "sad";

function kuchbhi(x, y) {
  if (x.includes(y)) {
    return 0;
  }

  return -1;
}

console.log(kuchbhi(hayStack, needle));
