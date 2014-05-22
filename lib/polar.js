var utilities = require("./utilities")
var errors = require("./config").errors

polar_instance = function(r, th) {
    if (r < 0) {
        throw errors.polarNegativeRadius;
    }
    var rp = r;
    var thp = utilities.mod2pi(th);
    this.r = function() {
        return rp;
    }
    this.th = function() {
        return thp;
    }
    this.setPosition = function(r, th) {
        rp = r;
        thp = utilities.mod2pi(th);
    }
}

polar = (function() {
    xpo = {
        init: function(x, y) {
            return new polar_instance(x, y)
        },
    }
    return xpo;
})();

module.exports = polar
