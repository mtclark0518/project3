"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var by_attribute_service_1 = require("../_services/by-attribute.service");
var dichotomies = [
    {
        descriptor1: {
            attribute: 'Freethinking',
            description: 'Attract out-of-the-box thinkers'
        },
        descriptor2: {
            attribute: 'Conventional',
            description: 'Create a responsible image'
        },
        selected: 'Freethinking',
        dismissed: false,
        order: 0
    },
    {
        descriptor1: {
            attribute: 'Spontaneous',
            description: 'Embody a go-with-the-flow attitude'
        },
        descriptor2: {
            attribute: 'Ordered',
            description: 'Create an efficient, self-disciplined image'
        },
        selected: 'Spontaneous',
        dismissed: false,
        order: 1
    },
    {
        descriptor1: {
            attribute: 'Traditional',
            description: 'Create a homelike, familiar feeling'
        },
        descriptor2: {
            attribute: 'Innovative',
            description: 'Introduce new knowledge and products'
        },
        selected: 'Traditional',
        dismissed: false,
        order: 2
    },
    {
        descriptor1: {
            attribute: 'Concrete',
            description: 'Perceive strong organizational skills'
        },
        descriptor2: {
            attribute: 'Abstract',
            description: 'Evoke insightful, abstract thinking'
        },
        selected: 'Concrete',
        dismissed: false,
        order: 3
    },
    {
        descriptor1: {
            attribute: 'Practical',
            description: 'Convey objectives and instructions'
        },
        descriptor2: {
            attribute: 'Artistic',
            description: 'Inspire imaginative experiences'
        },
        selected: 'Practical',
        dismissed: false,
        order: 4
    },
    {
        descriptor1: {
            attribute: 'Things',
            description: 'Establish a grounded, fix-anything image'
        },
        descriptor2: {
            attribute: 'Ideas',
            description: 'Convey spontaneous, original ideas'
        },
        selected: 'Things',
        dismissed: false,
        order: 5
    },
    {
        descriptor1: {
            attribute: 'Composed',
            description: 'Convey a reserved point of view'
        },
        descriptor2: {
            attribute: 'Warm',
            description: 'Encourage an uplifting, comfort-giving image'
        },
        selected: 'Composed',
        dismissed: false,
        order: 6
    },
    {
        descriptor1: {
            attribute: 'Trustful',
            description: 'Encourage unsuspecting acceptance'
        },
        descriptor2: {
            attribute: 'Skeptical',
            description: 'Encourage forward-thinking challenges to the norm'
        },
        selected: 'Trustful',
        dismissed: false,
        order: 7
    },
    {
        descriptor1: {
            attribute: 'Clear-thinking',
            description: 'Evoke self-assured thoughts'
        },
        descriptor2: {
            attribute: 'Thought-provoking',
            description: 'Promote progressive ideas'
        },
        selected: 'Clear-thinking',
        dismissed: false,
        order: 8
    },
    {
        descriptor1: {
            attribute: 'Deliberate',
            description: 'Create a threat-sensitive campaign'
        },
        descriptor2: {
            attribute: 'Bold',
            description: 'Promote expressive social involvements'
        },
        selected: 'Deliberate',
        dismissed: false,
        order: 9
    },
    {
        descriptor1: {
            attribute: 'Extroverted',
            description: 'Evoke assertive, group-oriented types'
        },
        descriptor2: {
            attribute: 'Introverted',
            description: 'Create empathetic, sensitive interactions'
        },
        selected: 'Extroverted',
        dismissed: false,
        order: 10
    },
    {
        descriptor1: {
            attribute: 'Serious',
            description: 'Portray restrained self-control'
        },
        descriptor2: {
            attribute: 'Carefree',
            description: 'Create lively, spontaneous interactions'
        },
        selected: 'Serious',
        dismissed: false,
        order: 11
    },
    {
        descriptor1: {
            attribute: 'Cooperative',
            description: 'Create a cooperative compliance'
        },
        descriptor2: {
            attribute: 'Dominant',
            description: 'Evoke dominant, forceful actions'
        },
        selected: 'Cooperative',
        dismissed: false,
        order: 12
    },
    {
        descriptor1: {
            attribute: 'Instictive',
            description: 'Encourage the gut feeling or impulse'
        },
        descriptor2: {
            attribute: 'Stable',
            description: 'Create an established, conservative image'
        },
        selected: 'Instinctive',
        dismissed: false,
        order: 13
    },
    {
        descriptor1: {
            attribute: 'Open',
            description: 'Evoke a genuine, forthright, sincere image'
        },
        descriptor2: {
            attribute: 'Mysterious',
            description: 'Create a mysterious, discreet ambience'
        },
        selected: 'Open',
        dismissed: false,
        order: 14
    },
    {
        descriptor1: {
            attribute: 'Relaxed',
            description: 'Create a calming, relaxed mood'
        },
        descriptor2: {
            attribute: 'High-energy',
            description: 'Evoke an attention-getting immediacy'
        },
        selected: 'Relaxed',
        dismissed: false,
        order: 15
    }
];
var CreateByAttributeDismissComponent = (function () {
    function CreateByAttributeDismissComponent(byAttributeService) {
        this.byAttributeService = byAttributeService;
        this.pairs = dichotomies;
        this.userPairs = this.pairs.slice(0);
        this.resultsArray = [];
        this.pairClass = 'dismissable_button_group'; //set initial display class to dismissable in the CSS
    }
    CreateByAttributeDismissComponent.prototype.removePair = function (id) {
        this.userPairs[id].dismissed = true;
        console.log(this.userPairs[id]);
    };
    CreateByAttributeDismissComponent.prototype.undoRemovePair = function (id) {
        this.userPairs[id].dismissed = false;
        console.log(this.userPairs[id]);
    };
    //(Jankily) target specific pairs and grey them out when user dismisses them
    CreateByAttributeDismissComponent.prototype.toggleDismiss = function (id) {
        for (var i = 0; i < this.pairs.length; i++) {
            if (i === id) {
                var targetedEl = document.getElementById("which" + id);
                var buttonValue = document.querySelector("#which" + id + " .x_button .x");
                if (targetedEl.classList.contains('dismiss')) {
                    targetedEl.classList.remove('dismiss');
                    buttonValue.innerHTML = 'X';
                    this.undoRemovePair(id);
                }
                else {
                    targetedEl.classList.add('dismiss');
                    buttonValue.innerHTML = 'Undo';
                    this.removePair(id);
                }
            }
        }
    };
    //Save All Un-dismissed pairs to the by-attribute service
    CreateByAttributeDismissComponent.prototype.getUserArray = function () {
        console.log(this.userPairs);
        for (var i = 0; i < this.userPairs.length; i++) {
            var singleResult = this.userPairs[i];
            if (!this.userPairs[i].dismissed) {
                this.resultsArray.push(singleResult);
            }
        }
        console.log('Results Array: ' + JSON.stringify(this.resultsArray));
        this.byAttributeService.resultsFromDismiss = this.resultsArray;
    };
    CreateByAttributeDismissComponent.prototype.ngOnInit = function () {
    };
    return CreateByAttributeDismissComponent;
}());
CreateByAttributeDismissComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-create-by-attribute-dismiss',
                templateUrl: './create-by-attribute-dismiss.component.html',
                styleUrls: ['./create-by-attribute-dismiss.component.scss']
            },] },
];
/** @nocollapse */
CreateByAttributeDismissComponent.ctorParameters = function () { return [
    { type: by_attribute_service_1.ByAttributeService, },
]; };
exports.CreateByAttributeDismissComponent = CreateByAttributeDismissComponent;
//# sourceMappingURL=create-by-attribute-dismiss.component.js.map