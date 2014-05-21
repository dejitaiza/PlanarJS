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

cartesian = (function() {
    xpo = {
        init: function(x, y) {
            return new cartesian_instance(x, y)
        },
    }
    return xpo;
})();

module.exports = cartesian
