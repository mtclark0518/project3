"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var Palette = models_1.db.models.Palette;
// hard-coded color and attribute data
var colors = [
    {
        name: 'lime green',
        isNeutral: false,
        hex: '#cddc39',
        rgb: 'rgb(205,220,57)',
        cymk: '24c 0m 94y 0k',
        attributes: ['Freethinking', 'Innovative', 'Artistic', 'Ideas', 'Thought-provoking', 'Extroverted', 'Carefree']
    },
    {
        name: 'green',
        isNeutral: false,
        hex: '#4caf50',
        rgb: 'rgb(76,175,80)',
        cymk: '72c 5m 95y 0k',
        attributes: ['Abstract', 'Trustful', 'Clear-thinking', 'Stable', 'Open', 'Relaxed']
    },
    {
        name: 'teal',
        isNeutral: false,
        hex: '#009688',
        rgb: 'rgb(0,150,136)',
        cymk: '83c 19m 53y 2k',
        attributes: ['Conventional', 'Abstract', 'Artistic', 'Trustful', 'Introverted', 'Serious', 'Cooperative', 'Open']
    },
    {
        name: 'blue',
        isNeutral: false,
        hex: '#2196f3',
        rgb: 'rgb(33,150,243)',
        cymk: '71c 34m 0y 0k',
        attributes: ['Ordered', 'Traditional', 'Abstract', 'Composed', 'Trustful', 'Introverted', 'Serious', 'Cooperative', 'Stable', 'Relaxed']
    },
    {
        name: 'indigo',
        isNeutral: false,
        hex: '#3f51b5',
        rgb: 'rgb(63,81,181)',
        cymk: '84c 76m 0y 0k',
        attributes: ['Freethinking', 'Practical', 'Ideas', 'Extroverted', 'Carefree', 'High-energy']
    },
    {
        name: 'purple',
        isNeutral: false,
        hex: '#9c27b0',
        rgb: 'rgb(156,39,176)',
        cymk: '50c 90m 0y 0k',
        attributes: ['Freethinking', 'Innovative', 'Abstract', 'Artistic', 'Warm', 'Carefree', 'Impulsive', 'Open']
    },
    {
        name: 'magenta',
        isNeutral: false,
        hex: '#e91e63',
        rgb: 'rgb(233,30,99)',
        cymk: '2c 98m 42y 0k',
        attributes: ['Conventional', 'Artistic', 'Warm', 'Thought-provoking', 'Cooperative']
    },
    {
        name: 'red',
        isNeutral: false,
        hex: '#f44336',
        rgb: 'rgb(244,67,54)',
        cymk: '0c 89m 84y 0k',
        attributes: ['Traditional', 'Practical', 'Things', 'Dominant', 'Stable', 'Open', 'High-energy']
    },
    {
        name: 'red-orange',
        isNeutral: false,
        hex: '#ff5722',
        rgb: 'rgb(255,87,34)',
        cymk: '0c 80m 93y 0k',
        attributes: ['Traditional', 'Practical', 'Composed', 'Cautious', 'Cooperative', 'Impulsive', 'Mysterious']
    },
    {
        name: 'orange',
        isNeutral: false,
        hex: '#ff9800',
        rgb: 'rgb(255,152,0)',
        cymk: '0c 48m 100y 0k',
        attributes: ['Freethinking', 'Ordered', 'Traditional', 'Concrete', 'Ideas', 'Skeptical', 'Thought-provoking', 'Bold', 'Extroverted', 'Carefree', 'Mysterious']
    },
    {
        name: 'gold',
        isNeutral: false,
        hex: '#ffd600',
        rgb: 'rgb(255,214,0)',
        cymk: '1c 13m 100y 0k',
        attributes: ['Disordered', 'Innovative', 'Introverted', 'Impulsive', 'High-energy']
    },
    {
        name: 'yellow',
        isNeutral: false,
        hex: '#ffeb3b',
        rgb: 'rgb(255,235,59)',
        cymk: '2c 2m 87y 0k',
        attributes: ['Freethinking', 'Disordered', 'Warm', 'Clear-thinking', 'Cautious', 'Extroverted', 'Relaxed']
    },
    {
        name: 'black',
        isNeutral: true,
        hex: '#000',
        rgb: 'rgb(0,0,0)',
        cymk: '60c 40m 40y 100k',
        attributes: ['Disordered', 'Concrete', 'Ideas', 'Skeptical', 'Clear-thinking', 'Introverted', 'Carefree', 'Dominant', 'Impulsive', 'Mysterious', 'High-energy']
    },
    {
        name: 'brown',
        isNeutral: true,
        hex: '#795548',
        rgb: 'rgb(121,85,72)',
        cymk: '42c 62m 66y 29k',
        attributes: ['Conventional', 'Disordered', 'Concrete', 'Things', 'Bold', 'Serious', 'Mysterious', 'Relaxed']
    },
    {
        name: 'white',
        isNeutral: true,
        hex: '#fff',
        rgb: 'rgb(255,255,255)',
        cymk: '0c 0m 0y 0k',
        attributes: ['Practical', 'Things', 'Clear-thinking', 'Introverted', 'Serious', 'Relaxed']
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
function findColor(colorName) {
    for (var i = 0; i < colors.length; i++) {
        if (colors[i].name === colorName) {
            return i;
        }
    }
    return -1;
}
function colorByName(req, res) {
    var where = findColor(req.params.name);
    console.log('colorByName: ' + colors[where].name);
    if (where >= 0) {
        res.json(colors[where]);
    }
    else {
        res.status(404).send('ERROR: color not found');
    }
}
function findAttrib(attribName) {
    for (var i = 0; i < attributes.length; i++) {
        if (attributes[i].name === attribName) {
            return i;
        }
    }
    return -1;
}
function attribByName(req, res) {
    var where = findAttrib(req.params.name);
    console.log('attribByName: ' + attributes[where].name);
    if (where >= 0) {
        res.json(attributes[where]);
    }
    else {
        res.status(404).send('ERROR: attribute not found');
    }
}
// request body format:
// {
//   name: your_palette_name 
//   format: 'color' || 'attrib' // palette is organized by color or attributes
//   notes:  your_notes // optional
//   colors: your_palette_colors[ 'color1', 'color2', 'color3' ] // if format = 'color'
//   attribs: your_palette_attribs[ 'attrib1', 'attrib2' ] // if format = 'attrib'
// }
function paletteNew(req, res) {
    console.log('paletteNew: ' + req.body.name);
    console.log(req);
    Palette.findOrCreate({
        where: {
            name: req.body.name,
            format: req.body.format,
            notes: req.body.notes
        }
    })
        .spread(function (palette, created) {
        console.log(palette.get({
            plain: true
        }));
        console.log('created: ' + created);
        if (created) {
            palette.setUser(req.body.userId); // need to get user record for this
            res.json(palette);
        }
        else {
            res.send('ERROR: palette already exists');
        }
    });
}
function palettesById(req, res) {
    console.log('palettesById: ' + req.params.id);
    Palette.findAll({
        where: {
            userId: req.params.id
        }
    })
        .then(function (palettes) {
        if (!palettes) {
            res.status(404).send('ERROR: id not found');
        }
        else {
            res.json(palettes);
        }
    });
}
function paletteByName(req, res) {
    console.log('paletteByName: ' + req.params);
    Palette.findAll({
        where: {
            name: req.params.name
        }
    })
        .then(function (palettes) {
        if (!palettes) {
            res.status(404).send('ERROR: name not found');
        }
        else {
            res.json(palettes);
        }
    });
}
var apisController = {};
exports.apisController = apisController;
apisController.colorByName = colorByName;
apisController.attribByName = attribByName;
apisController.paletteByName = paletteByName;
apisController.palettesById = palettesById;
apisController.paletteNew = paletteNew;
//# sourceMappingURL=apis.js.map