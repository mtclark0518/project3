"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var DB = models_1.db.models;
/*
 * The colors and attributes tables are used to seed the color_psych data-
 * base. colors.attributes[] is meant to init the color-has-many-attributes
 * relationships; attributes.colors[] is meant to init the attributes-has-
 * many colors relationships.
 *
 * Currently, some of the colors.attributes items are commented out because
 * the seeding was only working for brand new color and/or attribute records;
 * if the color/attribute was created previously, either the relationship was
 * not created or a duplicate relationship entry was created (based on whether
 * color.name/attribute.name was set to unique or not)
 */
var colors = [
    {
        name: 'lime green',
        isNeutral: false,
        hex: '#cddc39',
        rgb: 'rgb(205,220,57)',
        cymk: '24c 0m 94y 0k',
        attributes: [
            {
                name: 'Freethinking',
                description: 'attract out-of-box thinking',
                complement: 'Conventional',
            },
            {
                name: 'Innovative',
                description: 'introduce new knowledge and products',
                complement: 'Traditional',
            },
            {
                name: 'Artistic',
                description: 'inspire imaginative experiences',
                complement: 'Practical',
            },
            {
                name: 'Ideas',
                description: 'convey spontaneous, original ideas',
                complement: 'Things',
            },
            {
                name: 'Thought-provoking',
                description: 'promote progressive ideas',
                complement: 'Clear-thinking',
            },
            {
                name: 'Extroverted',
                description: 'evoke assertive, group-oriented types',
                complement: 'Introverted',
            },
            {
                name: 'Carefree',
                description: 'create lively, spontaneous social interactions',
                complement: 'Serious',
            }
        ]
    },
    {
        name: 'green',
        isNeutral: false,
        hex: '#4caf50',
        rgb: 'rgb(76,175,80)',
        cymk: '72c 5m 95y 0k',
        attributes: [
            {
                name: 'Abstract',
                description: 'evoke insightful, abstract thinking',
                complement: 'Concrete',
            },
            {
                name: 'Trustful',
                description: 'encourage unsuspecting acceptance',
                complement: 'Skeptical',
            },
            {
                name: 'Clear-thinking',
                description: 'evoke self-assured thoughts',
                complement: 'Thought-provoking',
            },
            {
                name: 'Stable',
                description: 'create a stable, conservative image',
                complement: 'Impulsive',
            },
            {
                name: 'Open',
                description: 'evoke a genuine, forthright, sincere image',
                complement: 'Mysterious',
            },
            {
                name: 'Relaxed',
                description: 'create a calming, relaxed mood',
                complement: 'High-energy',
            },
        ]
    },
    {
        name: 'teal',
        isNeutral: false,
        hex: '#009688',
        rgb: 'rgb(0,150,136)',
        cymk: '83c 19m 53y 2k',
        attributes: [
            {
                name: 'Conventional',
                description: 'create a responsible image',
                complement: 'Freethinking',
            },
            // { 
            //   name: 'Abstract',
            //   description: 'evoke insightful, abstract thinking',
            //   complement: 'Concrete',
            // }, 
            // { 
            //   name: 'Artistic',
            //   description: 'inspire imaginative experiences',
            //   complement: 'Practical',
            //  }, 
            // { 
            //   name: 'Trustful',
            //   description: 'encourage unsuspecting acceptance',
            //   complement: 'Skeptical',
            // }, 
            {
                name: 'Introverted',
                description: 'create empathetic, sensitive feelings',
                complement: 'Extroverted',
            },
            {
                name: 'Serious',
                description: 'portray restrained self-control',
                complement: 'Carefree',
            },
            {
                name: 'Cooperative',
                description: 'create a cooperative compliance',
                complement: 'Dominant',
            },
        ]
    },
    {
        name: 'blue',
        isNeutral: false,
        hex: '#2196f3',
        rgb: 'rgb(33,150,243)',
        cymk: '71c 34m 0y 0k',
        attributes: [
            {
                name: 'Ordered',
                description: 'create an efficient, self-disciplined image',
                complement: 'Disordered',
            },
            {
                name: 'Traditional',
                description: ' create a homelike, familiar feeling',
                complement: 'Innovative',
            },
            // { 
            //   name: 'Abstract',
            //   description: 'evoke insightful, abstract thinking',
            //   complement: 'Concrete',
            // }, 
            {
                name: 'Composed',
                description: 'convey a reserved point of view',
                complement: 'Warm',
            },
        ]
    },
    {
        name: 'indigo',
        isNeutral: false,
        hex: '#3f51b5',
        rgb: 'rgb(63,81,181)',
        cymk: '84c 76m 0y 0k',
        attributes: [
            // { 
            //   name: 'Freethinking',
            //   description: 'attract out-of-box thinking',
            //   complement: 'Conventional',
            // },
            {
                name: 'Practical',
                description: 'convey objectives and instructions',
                complement: 'Artistic',
            },
            // { 
            //   name: 'Ideas',
            //   description: 'convey spontaneous, original ideas',
            //   complement: 'Things',
            // }, 
            // { 
            //   name: 'Extroverted',
            //   description: 'evoke assertive, group-oriented types',
            //   complement: 'Introverted',
            // }, 
            // { 
            //   name: 'Carefree',
            //   description: 'create lively, spontaneous social interactions',
            //   complement: 'Serious',
            // },
            {
                name: 'High-energy',
                description: 'evoke an attention-getting immediacy',
                complement: 'Relaxed',
            }
        ]
    },
    {
        name: 'purple',
        isNeutral: false,
        hex: '#9c27b0',
        rgb: 'rgb(156,39,176)',
        cymk: '50c 90m 0y 0k',
        attributes: [
            // { 
            //   name: 'Freethinking',
            //   description: 'attract out-of-box thinking',
            //   complement: 'Conventional',
            // },
            // { 
            //   name: 'Innovative',
            //   description: 'introduce new knowledge and products',
            //   complement: 'Traditional',
            // },
            // { 
            //   name: 'Abstract',
            //   description: 'evoke insightful, abstract thinking',
            //   complement: 'Concrete',
            // }, 
            // { 
            //   name: 'Artistic',
            //   description: 'inspire imaginative experiences',
            //   complement: 'Practical',
            // }, 
            {
                name: 'Warm',
                description: 'encourage an uplifting, comfort-giving image',
                complement: 'Composed',
            },
            // { 
            //   name: 'Carefree',
            //   description: 'create lively, spontaneous social interactions',
            //   complement: 'Serious',
            // },
            {
                name: 'Impulsive',
                description: 'evoke a reactive, emotional feeling',
                complement: 'Stable',
            },
        ]
    },
    {
        name: 'magenta',
        isNeutral: false,
        hex: '#e91e63',
        rgb: 'rgb(233,30,99)',
        cymk: '2c 98m 42y 0k',
        attributes: []
    },
    {
        name: 'red',
        isNeutral: false,
        hex: '#f44336',
        rgb: 'rgb(244,67,54)',
        cymk: '0c 89m 84y 0k',
        attributes: [
            // { 
            //   name: 'Traditional',
            //   description: ' create a homelike, familiar feeling',
            //   complement: 'Innovative',
            // }, 
            // { 
            //   name: 'Practical',
            //   description: 'convey objectives and instructions',
            //   complement: 'Artistic',
            // }, 
            {
                name: 'Things',
                description: 'establish a grounded, fix-anything image',
                complement: 'Ideas',
            },
            // { 
            //   name: 'Thought-provoking',
            //   description: 'promote progressive ideas',
            //   complement: 'Clear-thinking',
            // }, 
            {
                name: 'Dominant',
                description: 'evoke dominant, forceful actions',
                complement: 'Cooperative',
            },
        ]
    },
    {
        name: 'red-orange',
        isNeutral: false,
        hex: '#ff5722',
        rgb: 'rgb(255,87,34)',
        cymk: '0c 80m 93y 0k',
        attributes: [
            // { 
            //   name: 'Traditional',
            //   description: ' create a homelike, familiar feeling',
            //   complement: 'Innovative',
            // }, 
            // { 
            //   name: 'Practical',
            //   description: 'convey objectives and instructions',
            //   complement: 'Artistic',
            // }, 
            // { 
            //   name: 'Composed',
            //   description: 'convey a reserved point of view',
            //   complement: 'Warm',
            // }, 
            {
                name: 'Cautious',
                description: 'create a threat-sensitive campaign',
                complement: 'Bold',
            },
        ]
    },
    {
        name: 'orange',
        isNeutral: false,
        hex: '#ff9800',
        rgb: 'rgb(255,152,0)',
        cymk: '0c 48m 100y 0k',
        attributes: [
            // { 
            //   name: 'Freethinking',
            //   description: 'attract out-of-box thinking',
            //   complement: 'Conventional',
            // },
            // { 
            //   name: 'Ordered',
            //   description: 'create an efficient, self-disciplined image',
            //   complement: 'Disordered',
            // }, 
            // { 
            //   name: 'Traditional',
            //   description: ' create a homelike, familiar feeling',
            //   complement: 'Innovative',
            // }, 
            {
                name: 'Concrete',
                description: 'perceive strong organizational skills',
                complement: 'Abstract',
            },
            {
                name: 'Ideas',
                description: 'convey spontaneous, original ideas',
                complement: 'Things',
            },
            {
                name: 'Skeptical',
                description: 'create a critical, truthgul awareness',
                complement: 'Trustful',
            },
            // { 
            //   name: 'Thought-provoking',
            //   description: 'promote progressive ideas',
            //   complement: 'Clear-thinking',
            // }, 
            {
                name: 'Bold',
                description: 'promote expressive social involvements',
                complement: 'Cautious',
            },
            // { 
            //   name: 'Extroverted',
            //   description: 'evoke assertive, group-oriented types',
            //   complement: 'Introverted',
            // }, 
            // { 
            //   name: 'Carefree',
            //   description: 'create lively, spontaneous social interactions',
            //   complement: 'Serious',
            // },
            {
                name: 'Mysterious',
                description: 'create a mysterious, discreet ambience',
                complement: 'Open',
            }
        ]
    },
    {
        name: 'gold',
        isNeutral: false,
        hex: '#ffd600',
        rgb: 'rgb(255,214,0)',
        cymk: '1c 13m 100y 0k',
        attributes: [
            {
                name: 'Disordered',
                description: 'evoke an unexacting, bohemian setting',
                complement: 'Ordered',
            },
        ]
    },
    {
        name: 'yellow',
        isNeutral: false,
        hex: '#ffeb3b',
        rgb: 'rgb(255,235,59)',
        cymk: '2c 2m 87y 0k',
        attributes: []
    },
    {
        name: 'black',
        isNeutral: true,
        hex: '#000',
        rgb: 'rgb(0,0,0)',
        cymk: '60c 40m 40y 100k',
        attributes: []
    },
    {
        name: 'brown',
        isNeutral: true,
        hex: '#795548',
        rgb: 'rgb(121,85,72)',
        cymk: '42c 62m 66y 29k',
        attributes: []
    },
    {
        name: 'white',
        isNeutral: true,
        hex: '#fff',
        rgb: 'rgb(255,255,255)',
        cymk: '0c 0m 0y 0k',
        attributes: []
    },
];
var attributes = [
    {
        name: 'Freethinking',
        description: 'attract out-of-box thinking',
        complement: 'Conventional',
        colors: ['lime green', 'indigo', 'purple', 'orange', 'yellow']
    },
    {
        name: 'Conventional',
        description: 'create a responsible image',
        complement: 'Freethinking',
        colors: ['teal', 'magenta', 'brown']
    },
    {
        name: 'Disordered',
        description: 'evoke an unexacting, bohemian setting',
        complement: 'Ordered',
        colors: ['gold', 'black', 'brown']
    },
    {
        name: 'Ordered',
        description: 'create an efficient, self-disciplined image',
        complement: 'Disordered',
        colors: ['blue', 'orange']
    },
    {
        name: 'Traditional',
        description: ' create a homelike, familiar feeling',
        complement: 'Innovative',
        colors: ['blue', 'red', 'red-orange', 'orange']
    },
    {
        name: 'Innovative',
        description: 'introduce new knowledge and products',
        complement: 'Traditional',
        colors: ['lime green', 'purple', 'gold']
    },
    {
        name: 'Concrete',
        description: 'perceive strong organizational skills',
        complement: 'Abstract',
        colors: ['orange', 'black', 'brown']
    },
    {
        name: 'Abstract',
        description: 'evoke insightful, abstract thinking',
        complement: 'Concrete',
        colors: ['green', 'teal', 'blue', 'purple']
    },
    {
        name: 'Practical',
        description: 'convey objectives and instructions',
        complement: 'Artistic',
        colors: ['indigo', 'red', 'red-orange', 'white']
    },
    {
        name: 'Artistic',
        description: 'inspire imaginative experiences',
        complement: 'Practical',
        colors: ['lime green', 'teal', 'purple', 'magenta']
    },
    {
        name: 'Things',
        description: 'establish a grounded, fix-anything image',
        complement: 'Ideas',
        colors: ['red', 'brown', 'white']
    },
    {
        name: 'Ideas',
        description: 'convey spontaneous, original ideas',
        complement: 'Things',
        colors: ['lime green', 'indigo', 'orange', 'black']
    },
    {
        name: 'Composed',
        description: 'convey a reserved point of view',
        complement: 'Warm',
        colors: ['blue', 'red-orange']
    },
    {
        name: 'Warm',
        description: 'encourage an uplifting, comfort-giving image',
        complement: 'Composed',
        colors: ['purple', 'magenta', 'yellow']
    },
    {
        name: 'Trustful',
        description: 'encourage unsuspecting acceptance',
        complement: 'Skeptical',
        colors: ['green', 'teal', 'blue']
    },
    {
        name: 'Skeptical',
        description: 'create a critical, truthgul awareness',
        complement: 'Trustful',
        colors: ['orange', 'black']
    },
    {
        name: 'Clear-thinking',
        description: 'evoke self-assured thoughts',
        complement: 'Thought-provoking',
        colors: ['green', 'yellow', 'black', 'white']
    },
    {
        name: 'Thought-provoking',
        description: 'promote progressive ideas',
        complement: 'Clear-thinking',
        colors: ['lime green', 'magenta', 'red', 'orange']
    },
    {
        name: 'Cautious',
        description: 'create a threat-sensitive campaign',
        complement: 'Bold',
        colors: ['red-orange', 'yellow']
    },
    {
        name: 'Bold',
        description: 'promote expressive social involvements',
        complement: 'Cautious',
        colors: ['orange', 'brown']
    },
    {
        name: 'Extroverted',
        description: 'evoke assertive, group-oriented types',
        complement: 'Introverted',
        colors: ['lime green', 'indigo', 'orange', 'yellow']
    },
    {
        name: 'Introverted',
        description: 'create empathetic, sensitive feelings',
        complement: 'Extroverted',
        colors: ['teal', 'blue', 'gold', 'black', 'white']
    },
    {
        name: 'Serious',
        description: 'portray restrained self-control',
        complement: 'Carefree',
        colors: ['teal', 'blue', 'brown', 'white']
    },
    {
        name: 'Carefree',
        description: 'create lively, spontaneous social interactions',
        complement: 'Serious',
        colors: ['lime green', 'indigo', 'purple', 'orange', 'black']
    },
    {
        name: 'Cooperative',
        description: 'create a cooperative compliance',
        complement: 'Dominant',
        colors: ['teal', 'blue', 'magenta', 'red-orange']
    },
    {
        name: 'Dominant',
        description: 'evoke dominant, forceful actions',
        complement: 'Cooperative',
        colors: ['red', 'black']
    },
    {
        name: 'Impulsive',
        description: 'evoke a reactive, emotional feeling',
        complement: 'Stable',
        colors: ['purple', 'red-orange', 'gold', 'black']
    },
    {
        name: 'Stable',
        description: 'reate a stable, conservative image',
        complement: 'Impulsive',
        colors: ['green', 'blue', 'red']
    },
    {
        name: 'Open',
        description: 'evoke a genuine, forthright, sincere image',
        complement: 'Mysterious',
        colors: ['green', 'teal', 'purple', 'red']
    },
    {
        name: 'Mysterious',
        description: 'create a mysterious, discreet ambience',
        complement: 'Open',
        colors: ['red-orange', 'orange', 'black', 'brown']
    },
    {
        name: 'Relaxed',
        description: 'create a calming, relaxed mood',
        complement: 'High-energy',
        colors: ['green', 'blue', 'yellow', 'white']
    },
    {
        name: 'High-energy',
        description: 'evoke an attention-getting immediacy',
        complement: 'Relaxed',
        colors: ['indigo', 'red', 'gold', 'black']
    }
];
/*
 * creates those color/attribute relationships that weren't generated in
 * the initial color seeding
 */
// var associationsCreate = function () {
//   for (var i = 0; i < attributes.length; i++) {
//     for (var j = 0; j < attributes[i].colors.length; j++) {
//       DB.Color.findAll({
//         where: {
//           name: { $in: attributes[i].colors }
//         }
//       })
//       .then(function(colors) {
//         DB.Attributes.findAll({
//           where: { name: attributes[i].name }
//         })
//         .then(function(attrib, colors) {
//           attrib.setColors(colors)
//         })
//       })
//     }
//   }
// };
var attribCreate = function () {
    return DB.Attribute.bulkCreate(attributes, { include: [{ association: DB.Color.Attribute }] });
};
var colorCreate = function () {
    return DB.Color.bulkCreate(colors, { include: [{ association: DB.Color.Attribute }] });
};
/*
 * Do the actual seeding of the database!
 */
colorCreate()
    .then(attribCreate())
    .then(function () {
    process.exit();
});
//# sourceMappingURL=seed.js.map