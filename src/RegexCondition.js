var Condition = require('./Condition');

class RegexCondition extends Condition {
    constructor(value, regex) {
        super();

        if (this._isNullOrUndefined(regex) || (!this._isString(regex))) {
            throw new Error(RegexCondition.INVALID_REGEX());
        } else {
            this._value = value;
            this._regex = regex;
        }
    }

    isValid() {
        var reg = new RegExp(this._regex)
        if (this._invert) {
            return !reg.test(this._value);
        } else {
            return reg.test(this._value);
        }
    }

    not(){
        //Esto me hace ruido... entiendo que no deberia ser necesario
        //Lo que me está pasando es que si no hago la imple local, no funca...
        var condition = new RegexCondition(this._value, this._regex);
        condition._invert = !this._invert;
        condition._err = this._err;
        return condition;
    }

    _isString(s) {
        return typeof (s) === 'string' || s instanceof String;
    }

    static INVALID_REGEX() {
        return 'Debe proporcionar una expresion regular válida.';
    }
}

module.exports = RegexCondition;
