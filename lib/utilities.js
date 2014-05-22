//var cartesian = require("./cartesian");
//var polar = require("./polar")

//There is an error somewhere here, which causes polar to become an empty object
// whenever it is required in this file, but polar and cartesian do contain the expected values
// It must be some kind of scope leak, maybe a bug related to Mocha itself?

module.exports = {
    mod2pi: function(th) {
        th %= (2 * Math.PI);
        if (th > Math.PI) {
            th -= 2 * Math.PI;
        } else if (th < -1 * Math.PI) {
            th += 2 * Math.PI
        }
        return th;
    },
    cartesianToPolar: function(cart) {
        var x = cart.x()
        var y = cart.y()
        var r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        var th = Math.atan2(y, x);
        return polar.init(r, th);
    },
    polarToCartesian: function(pol) {
        var r = pol.r();
        var th = pol.th();
        var x = r * Math.cos(th);
        var y = r * Math.sin(th);
        return cartesian.init(x, y);
    }
}
