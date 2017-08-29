import { db } from '../models';
let DB = db.models;


var colors = [
  {
    name: 'lime green',
    isNeutral: false,
    hex: '#cddc39',
    rgb: 'rgb(205,220,57)',
    cymk: 'tbd',
    attributes: [
      { name: 'Freethinking' },
      { name: 'Innovative' },
      { name: 'Artistic' }, 
      { name: 'Ideas' }, 
      { name: 'Thought-provoking' }, 
      { name: 'Extroverted' }, 
      { name: 'Carefree' }
    ]
  },
  
  {
    name: 'green',
    isNeutral: false,
    hex: '#4caf50',
    rgb: 'rgb(76,175,80)',
    cymk: 'tbd',
    attributes: [
      { name: 'Abstract' },
      { name: 'Trustful' }, 
      { name: 'Clear-thinking' }, 
      { name: 'Stable' }, 
      { name: 'Open' }, 
      { name: 'Relaxed' },
    ]
  },
  
  {
    name: 'teal',
    isNeutral: false,
    hex: '#009688',
    rgb: 'rgb(0,150,136)',
    cymk: 'tbd',
    attributes: [
      { name: 'Conventional' }, 
      { name: 'Abstract' }, 
      { name: 'Artistic' }, 
      { name: 'Trustful' }, 
      { name: 'Introverted' }, 
      { name: 'Serious' }, 
      { name: 'Cooperataive' }, 
      { name: 'Open' }
    ]
  },
    
  {
    name: 'blue',
    isNeutral: false,
    hex: '#2196f3',
    rgb: 'rgb(33,150,243)',
    cymk: 'tbd',
    attributes: [
      { name: 'Ordered' }, 
      { name: 'Traditional' }, 
      { name: 'Abstract' }, 
      { name: 'Composed' }, 
      { name: 'Trustful' }, 
      { name: 'Introverted' }, 
      { name: 'Serious' }, 
      { name: 'Cooperative' }, 
      { name: 'Stable' }, 
      { name: 'Relaxed' }
    ]
  },
  
  {
    name: 'indigo',
    isNeutral: false,
    hex: '#3f51b5',
    rgb: 'rgb(63,81,181)',
    cymk: 'tbd',
    attributes: [
      { name: 'Freethinking' }, 
      { name: 'Practical' }, 
      { name: 'Ideas' }, 
      { name: 'Extroverted' }, 
      { name: 'Carefree' }, 
      { name: 'High-energy' }
    ]
  },
  
  {
    name: 'purple',
    isNeutral: false,
    hex: '#9c27b0',
    rgb: 'rgb(156,39,176)',
    cymk: 'tbd',
    attributes: [
      { name: 'Freethinking' }, 
      { name: 'Innovative' }, 
      { name: 'Abstract' }, 
      { name: 'Artistic' }, 
      { name: 'Warm' }, 
      { name: 'Carefree' }, 
      { name: 'Impulsive' }, 
      { name: 'Open' }
    ]
  },
  
  {
    name: 'magenta',
    isNeutral: false,
    hex: '#e91e63',
    rgb: 'rgb(233,30,99)',
    cymk: 'tbd',
    attributes: [
      { name: 'Conventional' }, 
      { name: 'Artistic' }, 
      { name: 'Warm' }, 
      { name: 'Thought-provoking' }, 
      { name: 'Cooperataive' }, 
    ]
  },
  
  {
    name: 'red',
    isNeutral: false,
    hex: '#f44336',
    rgb: 'rgb(244,67,54)',
    cymk: 'tbd',
    attributes: [
      { name: 'Traditional' }, 
      { name: 'Practical' }, 
      { name: 'Things' }, 
      { name: 'Thought-provoking' }, 
      { name: 'Dominant' }, 
      { name: 'Stable' }, 
      { name: 'Open' }, 
      { name: 'High-energy' }
    ]
  },
  
  {
    name: 'red-orange',
    isNeutral: false,
    hex: '#ff5722',
    rgb: 'rgb(255,87,34)',
    cymk: 'tbd',
    attributes: [
      { name: 'Traditional' }, 
      { name: 'Practical' }, 
      { name: 'Composed' }, 
      { name: 'Cautious' }, 
      { name: 'Cooperataive' }, 
      { name: 'Impulsive' }, 
      { name: 'Mysterious' }
    ]
  },
  
  {
    name: 'orange',
    isNeutral: false,
    hex: '#ff9800',
    rgb: 'rgb(255,152,0)',
    cymk: 'tbd',
    attributes: [
      { name: 'Freethinking' },
      { name: 'Ordered' }, 
      { name: 'Traditional' }, 
      { name: 'Concrete' }, 
      { name: 'Ideas' }, 
      { name: 'Skeptical' }, 
      { name: 'Thought-provoking' }, 
      { name: 'Bold' }, 
      { name: 'Extroverted' }, 
      { name: 'Carefree' }, 
      { name: 'Mysterious' }
    ]
  },
  
  {
    name: 'gold',
    isNeutral: false,
    hex: '#ffd600',
    rgb: 'rgb(255,214,0)',
    cymk: 'tbd',
    attributes: [
      { name: 'Disordered' }, 
      { name: 'Innovative' }, 
      { name: 'Introverted' }, 
      { name: 'Impulsive' }, 
      { name: 'High-energy' }
    ]
  },
  
  {
    name: 'yellow',
    isNeutral: false,
    hex: '#ffeb3b',
    rgb: 'rgb(255,235,59)',
    cymk: 'tbd',
    attributes: [
      { name: 'Freethinking' },
      { name: 'Disordered' }, 
      { name: 'Warm' }, 
      { name: 'Clear-thinking' }, 
      { name: 'Cautious' }, 
      { name: 'Extroverted' }, 
      { name: 'Relaxed' }
    ]
  },
  
  {
    name: 'black',
    isNeutral: true,
    hex: '#000',
    rgb: 'rgb(0,0,0)',
    cymk: 'tbd',
    attributes: [
      { name: 'Disordered' }, 
      { name: 'Concrete' }, 
      { name: 'Ideas' }, 
      { name: 'Skeptical' }, 
      { name: 'Clear-thinking' }, 
      { name: 'Introverted' }, 
      { name: 'Carefree' }, 
      { name: 'Dominant' }, 
      { name: 'Impulsive' }, 
      { name: 'Mysterious' }, 
      { name: 'High-energy' }
    ]
  },
  
  {
    name: 'brown',
    isNeutral: true,
    hex: '#795548',
    rgb: 'rgb(121,85,72)',
    cymk: 'tbd',
    attributes: [
      { name: 'Conventional' }, 
      { name: 'Disordered' }, 
      { name: 'Concrete' }, 
      { name: 'Things' }, 
      { name: 'Bold' }, 
      { name: 'Serious' }, 
      { name: 'Mysterious' }, 
      { name: 'Relaxed' }
    ]
  },
  
  {
    name: 'white',
    isNeutral: true,
    hex: '#fff',
    rgb: 'rgb(255,255,255)',
    cymk: 'tbd',
    attributes: [
      { name: 'Practical' }, 
      { name: 'Things' }, 
      { name: 'Clear-thinking' }, 
      { name: 'Introverted' }, 
      { name: 'Serious' }, 
      { name: 'Relaxed' }
    ]
  },
  
];

var attributes = [
  {
    name: 'Freethinking',
    description: 'attract out-of-box thinking',
    complement: 'Conventional',
    colors: [
      { name: 'lime green' },
      { name: 'indigo' },
      { name: 'purple' },
      { name: 'orange' },
      { name: 'yellow' },
    ]
  },
  
  {
    name: 'Conventional',
    description: 'create a responsible image',
    complement: 'Freethinking',
    colors: [
      { name: 'teal' },
      { name: 'magenta' },
      { name: 'brown' },
    ]
  },
  
  {
    name: 'Disordered',
    description: 'evoke an unexacting, bohemian setting',
    complement: 'Ordered',
    colors: [
      { name: 'gold' },
      { name: 'black' },
      { name: 'brown' },
    ]
  },
  
  {
    name: 'Ordered',
    description: 'create an efficient, self-disciplined image',
    complement: 'Disordered',
    colors: [
      { name: 'blue' },
      { name: 'orange' },
    ]
  },
  
  {
    name: 'Traditional',
    description: ' create a homelike, familiar feeling',
    complement: 'Innovative',
    colors: [
      { name: 'blue' },
      { name: 'red' },
      { name: 'red-orange' },
      { name: 'orange' },
    ]
  },
  
  {
    name: 'Innovative',
    description: 'introduce new knowledge and products',
    complement: 'Traditional',
    colors: [
      { name: 'lime green' },
      { name: 'purple' },
      { name: 'gold' },
    ]
  },
  
  {
    name: 'Concrete',
    description: 'perceive strong organizational skills',
    complement: 'Abstract',
    colors: [
      { name: 'orange' },
      { name: 'black' },
      { name: 'brown' },
    ]
  },
  
  {
    name: 'Abstract',
    description: 'evoke insightful, abstract thinking',
    complement: 'Concrete',
    colors: [
      { name: 'green' },
      { name: 'teal' },
      { name: 'blue' },
      { name: 'purple' },
    ]
  }
    
];


var attribCreate = function() {
  return DB.Attribute.bulkCreate(attributes, { include: [ DB.Color ] } )
  // return attributes.forEach(function(attrib) {
  //   DB.Attribute.create(
  //     {
  //       name: attrib.name,
  //       description: attrib.description,
  //       complement: attrib.complement,
  //       colors: colors  // associations
  //     }, 
  //     { include: [ DB.Color ] }
  //   )
  // })
};

var colorCreate = function() {
  return DB.Color.bulkCreate(colors, { include: [ DB.Attribute ] } )
  // .Promise.all(attributes)
  // .then(function() {
  //   console.log('attributes were created');
  // })

  // return Promise.all([
  //   colors.forEach(function(color) {
  //     DB.Color.create(
  //       {
  //         name: color.name,
  //         isNeutral: color.isNeutral,
  //         hex: color.hex,
  //         rgb: color.rgb,
  //         cymk: color.cymk,
  //         attributes: attributes
  //       },
  //       { include: [ DB.Attribute ] }
  //     )
  //   })
  // ])
};

attribCreate()
// Promise.all(attributes).then(function() {
//   console.log('attributes were created');
// })
.then(colorCreate())
// colorCreate();
// Promise.all(colors).then(function() {
//   console.log('colors were created');
// })
.then(function() {
  process.exit();
});