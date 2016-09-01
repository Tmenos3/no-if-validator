class Condition {
    constructor() {
        this._err = new Error();
        this._invert = false;
    }

    isValid() {
        throw new Error(Condition.MUST_BE_OVERRIDED());
    }

    getError() {
        return this._err;
    }

    not() {
        this._invert = !this._invert;
        return this;
    }

    throw(exception) {
        if (this._isNullOrUndefined(exception)) {
            throw new Error(Condition.INVALID_ERROR());
        } else {
            this._err = exception;
            return this;
        }
    }

    _isNullOrUndefined(element) {
        return (element === undefined || element === null);
    };

    static INVALID_ERROR() {
        return 'Debe proporcionar un error válido.';
    }

    static MUST_BE_OVERRIDED() {
        return 'Esta función debe ser sobreescrita.';
    }
}

module.exports = Condition;