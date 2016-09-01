var CompareToCondition = require('./CompareToCondition');

class GreaterOrEqualCondition extends CompareToCondition {
    constructor(value, compareTo){
        super(value, 'GRE', compareTo);
    }

    isValid(){
        return super.isValid();
    }
}

module.exports = GreaterOrEqualCondition;
