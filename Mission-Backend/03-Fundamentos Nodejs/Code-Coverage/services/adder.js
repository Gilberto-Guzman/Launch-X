function adder() {
    this.add = function (numberA, numberB) {
        return numberA + numberB;
    }
}

module.exports = new adder();