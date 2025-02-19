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