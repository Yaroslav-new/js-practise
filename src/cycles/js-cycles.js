// https://www.codewars.com/kata/59fb783bab11f89202001083

const items = [
    { type: 'newspaper', material: 'paper' },
    { type: 'bottle', material: 'glass' },
    { type: 'apple', material: 'organic' },
    { type: 'bag', material: 'plastic' },
    { type: 'milk carton', material: 'paper', secondMaterial: 'plastic' }
  ];

function recycle(array) {
    const container = {
      paper: [],
      glass: [],
      organic: [],
      plastic: []
    };
  
    for (let item of array) {
      const { type, material, secondMaterial } = item;
      if (container[material]) container[material].push(type);
      if (secondMaterial && container[secondMaterial]) container[secondMaterial].push(type);
    }
  
    return [container.paper, container.glass, container.organic, container.plastic];
  };

console.log(recycle(items));

// https://www.codewars.com/kata/5b6db1acb118141f6b000060

function recycle(array) {
  const container = {
    paper: [],
    glass: [],
    organic: [],
    plastic: []
  };

  for (let item of array) {
    const { type, material, secondMaterial } = item;
    if (container[material]) container[material].push(type);
    if (secondMaterial && container[secondMaterial]) container[secondMaterial].push(type);
  }

  return [container.paper, container.glass, container.organic, container.plastic];
};

// need to add console log and array


// https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1

function outed(meet, boss){
  let totaleppines = 0;
  for (let key in meet) {
    totaleppines +=meet[key];
  };
  
  if (boss in meet) {
    totaleppines +=meet[boss];
  };
  
  const numberPeopeInRoom = Object.keys(meet).length;
  
  const avarageHappinesInRoom = totaleppines / numberPeopeInRoom;
  
  return avarageHappinesInRoom > 5 ? 'Nice Work Champ!' : 'Get Out Now!';
};

const meet = {
  'Alice': 6,
  'Bob': 4,
  'Charlie': 5,
  'Dave': 3,
  'boss': 7
};

console.log(meetingOutcome(meet, 'boss')); 