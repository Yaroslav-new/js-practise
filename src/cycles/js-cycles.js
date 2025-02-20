// https://www.codewars.com/kata/5b6db1acb118141f6b000060 

const items = [
    { type: 'newspaper', material: 'paper' },
    { type: 'bottle', material: 'glass' },
    { type: 'apple', material: 'organic' },
    { type: 'bag', material: 'plastic' },
    { type: 'milk carton', material: 'paper', secondMaterial: 'plastic' }
  ];

function recycleItems(array) {
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

console.log(recycleItems(items));

// https://www.codewars.com/kata/59fb783bab11f89202001083

const recycle = [1, -1, 0, 2, -3, 0, 4, 5, -2];

function recycleMe(recycle){ 
  let plasticCount = 0;
  let glassCount = 0;
  let cardCount = 0;

  for (let item of recycle) {
      if (item > 0) {
          plasticCount++;
      } else if (item < 0) {
          glassCount++;
      } else {
          cardCount++;
      }
  }

  return [plasticCount, glassCount, cardCount];
};

console.log(recycleMe(recycle));

// https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1

const meet = {
  'Alice': 6,
  'Bob': 4,
  'Charlie': 5,
  'Dave': 3,
  'boss': 7
};

function meetingOutcome(meet, boss){
  let totaleppines = 0;
  for (let key in meet) {
    totaleppines +=meet[key];
      if (key === boss) {
        totaleppines +=meet[boss];
      }
  }
  
  const numberPeopeInRoom = Object.keys(meet).length;
  
  const avarageHappinesInRoom = totaleppines / numberPeopeInRoom;
  
  return avarageHappinesInRoom > 5 ? 'Nice Work Champ!' : 'Get Out Now!';
};

console.log(meetingOutcome(meet, 'boss')); 