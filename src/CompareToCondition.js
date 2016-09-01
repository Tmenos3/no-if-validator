var Condition = require('./Condition');

class CompareToCondition extends Condition {
    constructor(x, compareCriteria, y) {
        super();

        if (this._isNullOrUndefined(compareCriteria) || (!(['GR', 'GRE', 'LS', 'LSE', 'EQ'].indexOf(compareCriteria) >= 0))) {
            throw new Error(CompareToCondition.INVALID_COMPARE_CRITERIA());
        } else {
            this._x = x;
            this._y = y;
            this._compareCriteria = compareCriteria;
        }
    }

    isValid() {
        if (this._invert) {
            switch (this._compareCriteria) {
                case 'GR':
                    return !(this._x > this._y);
                case 'GRE':
                    return !(this._x >= this._y);
                case 'LS':
                    return !(this._x < this._y);
                case 'LSE':
                    return !(this._x <= this._y);
                case 'EQ':
                    return !(this._x == this._y);
                default:
                    return !false;
            };
        } else {
            switch (this._compareCriteria) {
                case 'GR':
                    return this._x > this._y;
                case 'GRE':
                    return this._x >= this._y;
                case 'LS':
                    return this._x < this._y;
                case 'LSE':
                    return this._x <= this._y;
                case 'EQ':
                    return this._x == this._y;
                default:
                    return false;
            };
        }
    }

    not() {
        //Esto me hace ruido... entiendo que no deberia ser necesario
        //Lo que me está pasando es que si no hago la imple local, no funca...
        var condition = new CompareToCondition(this._x, this._compareCriteria, this._y);
        condition._invert = !this._invert;
        condition._err = this._err;
        return condition;
    }

    static INVALID_COMPARE_CRITERIA() {
        return 'El criterio de comparacion es invalido. Validos: GR, GRE, LS, LSE, EQ';
    }
}

module.exports = CompareToCondition;
