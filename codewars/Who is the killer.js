function killer(suspectInfo, dead) {
  for (let key in suspectInfo) {
    if (dead.every((person)=>suspectInfo[key].includes(person))) {
      return key;
    }
  }
}