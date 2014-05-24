cartesian_instance = function(x, y) {
    var xp = x;
    var yp = y;
    this.x = function() {
        return xp;
    }
    this.y = function() {
        return yp;
    }
    this.setPosition = function(x, y) {
        xp = x;
        yp = y;
    }
}

cartesian = function() {
    this.init = function(x, y) {
        return new cartesian_instance(x, y);
    }
    this.fromPolar = function(pol) {
        var r = pol.r();
        var th = pol.th();
        var x = r * Math.cos(th);
        var y = r * Math.sin(th);
        return this.init(x, y);
    }
}


module.exports = new cartesian();
