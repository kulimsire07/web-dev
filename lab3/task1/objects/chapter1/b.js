function isEmpty(obj) {
    for (let key in obj) {
      return false;               // if there is at least one property
    }
    return true;
  }
  
  let schedule = {};
  console.log(isEmpty(schedule));  // true
  
  schedule["8:30"] = "get up";
  console.log(isEmpty(schedule));  // false
  