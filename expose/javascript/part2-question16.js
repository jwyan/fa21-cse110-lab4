let statistics = {
    redCars: 21, 
    blueCars: 45, 
    greenCars: 12, 
    raceCars: 5,
    blackCars: 40, 
    rareCars: 2
  };
  
  for (let property in statistics){ 
    let firstChar = property.charAt(0);
    if(firstChar === 'r') {
      console.log(property);
    }
    else if(statistics[property] % 2 == 1) {
      console.log(property);
    }
  }