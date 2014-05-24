var position = require("./position");

var frame_instance = function(origin) {
    var originP = origin;
    this.o = {
        x: function() {
            return originP.x();
        },
        y: function() {
            return originP.y();
        },
        r: function() {
            return originP.r();
        },
        th: function() {
            return originP.th();
        },
    }
    this.setFromCartesian = function(x, y) {
        return originP.setFromCartesian(x, y);
    }
    this.setFromPolar = function(r, th) {
        return originP.setFromPolar(r, th);
    }
}

frame = function() {
    this.init = function(x, y) {
        var o;
        if (x != undefined && y != undefined) {
            o = position.init("cartesian", x, y);
        } else {
            o = position.init("cartesian", 0, 0);
        }
        return new frame_instance(o);
    }
}

module.exports = new frame();
