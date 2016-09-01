var CompareToCondition = require('./CompareToCondition');

class GreaterCondition extends CompareToCondition {
    constructor(value, compareTo){
        super(value, 'GR', compareTo);
    }

    isValid(){
        return super.isValid();
    }
}

module.exports = GreaterCondition;
