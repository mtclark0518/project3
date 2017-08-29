import { db } from '../models';
let DB = db.models;


var colors = [
  {
    name: 'lime green',
    isNeutral: false,
    hex: '#cddc39',
    rgb: 'rgb(205,220,57)',
    cymk: '24c 0m 94y 0k',
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
    cymk: '72c 5m 95y 0k',
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
    cymk: '83c 19m 53y 2k',
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
    cymk: '71c 34m 0y 0k',
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
    cymk: '84c 76m 0y 0k',
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
    cymk: '50c 90m 0y 0k',
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
    cymk: '2c 98m 42y 0k',
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
    cymk: '0c 89m 84y 0k',
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
    cymk: '0c 80m 93y 0k',
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
    cymk: '0c 48m 100y 0k',
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
    cymk: '1c 13m 100y 0k',
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
    cymk: '2c 2m 87y 0k',
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
    cymk: '60c 40m 40y 100k',
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
    cymk: '42c 62m 66y 29k',
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
    cymk: '0c 0m 0y 0k',
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
  },
    
  {
    name: 'Practical',
    description: 'convey objectives and instructions',
    complement: 'Artistic',
    colors: [
      { name: 'indigo' },
      { name: 'red' },
      { name: 'red-orange' },
      { name: 'white' },
    ]
  },
  
  {
    name: 'Artistic',
    description: 'inspire imaginative experiences',
    complement: 'Practical',
    colors: [
      { name: 'lime green' },
      { name: 'teal' },
      { name: 'purple' },
      { name: 'magenta' },
    ]
  },
  
  {
    name: 'Things',
    description: 'establish a grounded, fix-anything image',
    complement: 'Ideas',
    colors: [
      { name: 'red' },
      { name: 'brown' },
      { name: 'white' },
    ]
  },
  
  {
    name: 'Ideas',
    description: 'convey spontaneous, original ideas',
    complement: 'Things',
    colors: [
      { name: 'lime green' },
      { name: 'indigo' },
      { name: 'orange' },
      { name: 'black' },
    ]
  },
  
  {
    name: 'Composed',
    description: 'convey a reserved point of view',
    complement: 'Warm',
    colors: [
      { name: 'blue' },
      { name: 'red-orange' },
    ]
  },
  
  {
    name: 'Warm',
    description: 'encourage an uplifting, comfort-giving image',
    complement: 'Composed',
    colors: [
      { name: 'purple' },
      { name: 'magenta' },
      { name: 'yellow' },
    ]
  },
 
  {
    name: 'Trustful',
    description: 'encourage unsuspecting acceptance',
    complement: 'Skeptical',
    colors: [
      { name: 'green' },
      { name: 'teal' },
      { name: 'blue' },
    ]
  },
  
  {
    name: 'Skeptical',
    description: 'create a critical, truthgul awareness',
    complement: 'Trustful',
    colors: [
      { name: 'orange' },
      { name: 'black' },
    ]
  },
   
  {
    name: 'Clear-thinking',
    description: 'evoke self-assured thoughts',
    complement: 'Thought-provoking',
    colors: [
      { name: 'green' },
      { name: 'yellow' },
      { name: 'black' },
      { name: 'white' },
    ]
  },
  
  {
    name: 'Thought-provoking',
    description: 'promote progressive ideas',
    complement: 'Clear-thinking',
    colors: [
      { name: 'lime green' },
      { name: 'magenta' },
      { name: 'red' },
      { name: 'orange' },
    ]
  },
  
  {
    name: 'Cautious',
    description: 'create a threat-sensitive campaign',
    complement: 'Bold',
    colors: [
      { name: 'red-orange' },
      { name: 'yellow' },
    ]
  },
  
  {
    name: 'Bold',
    description: 'promote expressive social involvements',
    complement: 'Cautious',
    colors: [
      { name: 'orange' },
      { name: 'brown' },
    ]
  },
  
  {
    name: 'Extroverted',
    description: 'evoke assertive, group-oriented types',
    complement: 'Introverted',
    colors: [
      { name: 'lime green' },
      { name: 'indigo' },
      { name: 'orange' },
      { name: 'yellow' },
    ]
  },
  
  {
    name: 'Introverted',
    description: 'create empathetic, sensitive feelings',
    complement: 'Extroverted',
    colors: [
      { name: 'teal' },
      { name: 'blue' },
      { name: 'gold' },
      { name: 'black' },
      { name: 'white' },
    ]
  },
  
  {
    name: 'Serious',
    description: 'portray restrained self-control',
    complement: 'Carefree',
    colors: [
      { name: 'teal' },
      { name: 'blue' },
      { name: 'brown' },
      { name: 'white' },
    ]
  },
  
  {
    name: 'Carefree',
    description: 'create lively, spontaneous social interactions',
    complement: 'Serious',
    colors: [
      { name: 'lime green' },
      { name: 'indigo' },
      { name: 'purple' },
      { name: 'orange' },
      { name: 'black' },
    ]
  },
  
  {
    name: 'Cooperative',
    description: 'create a cooperative compliance',
    complement: 'Dominant',
    colors: [
      { name: 'teal' },
      { name: 'blue' },
      { name: 'magenta' },
      { name: 'red-orange' },
    ]
  },
  
  {
    name: 'Dominant',
    description: 'evoke dominant, forceful actions',
    complement: 'Cooperative',
    colors: [
      { name: 'red' },
      { name: 'black' },
    ]
  },
  
  {
    name: 'Impulsive',
    description: 'evoke a reactive, emotional feeling',
    complement: 'Stable',
    colors: [
      { name: 'purple' },
      { name: 'red-orange' },
      { name: 'gold' },
      { name: 'black' },
    ]
  },
  
  {
    name: 'Stable',
    description: 'reate a stable, conservative image',
    complement: 'Impulsive',
    colors: [
      { name: 'green' },
      { name: 'blue' },
      { name: 'red' },
    ]
  },
  
  {
    name: 'Open',
    description: 'evoke a genuine, forthright, sincere image',
    complement: 'Mysterious',
    colors: [
      { name: 'green' },
      { name: 'teal' },
      { name: 'purple' },
      { name: 'red' },
    ]
  },
  
  {
    name: 'Mysterious',
    description: 'create a mysterious, discreet ambience',
    complement: 'Open',
    colors: [
      { name: 'red-orange' },
      { name: 'orange' },
      { name: 'black' },
      { name: 'brown' },
    ]
  },
  
  {
    name: 'Relaxed',
    description: 'create a calming, relaxed mood',
    complement: 'High-energy',
    colors: [
      { name: 'green' },
      { name: 'blue' },
      { name: 'yellow' },
      { name: 'white' },
    ]
  },

  {
    name: 'High-energy',
    description: 'evoke an attention-getting immediacy',
    complement: 'Relaxed',
    colors: [
      { name: 'indigo' },
      { name: 'red' },
      { name: 'gold' },
      { name: 'black' },
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

var assocCreate = function() {
  // for each colors
  //   for each attributes
  //     add row to color_attributes
}

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
  // console.log('colors and attributes loaded');
});