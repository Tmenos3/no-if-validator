# no-if-validator
no-if-validator is a small framework designed to ease the way we make and understand validations with general porpose.

# Usage

Common way:
```javascript
if (param === null && param === undefined){
    throw new Error('some error');
}else if (otherParam === null && otherParam === undefined) {
    throw new Error('some other error');
}else{
    //do your staff if information is correct...
}
```

Fashion way:
```javascript
let validator = new Validator();
validator.addCondition(new NotNullOrUndefinedCondition(param).throw(new Error('some error')));
validator.addCondition(new NotNullOrUndefinedCondition(otherParam).throw(new Error('some other error')));

validator.execute(() => {
    //do your staff if information is correct...
}, (err) => { throw err; });
```

Sometimes, we face more complex situations with multiple validations like this:
```javascript
if (param === null && param === undefined){
    throw new Error('invalid');
}else if (param.includes(' ')) {
    throw new Error('invalid');
}else if (param.length < 5) {
    throw new Error('invalid');
}else if (!(param instanceOf SomeClass)) {
    throw new Error('invalid');
}else{
    //do your staff if information is correct...
}
```

Now we have code cleaner and more understeable than the last one:
```javascript
var validator = new Validator();
validator.addCondition(new NotNullOrUndefinedCondition(param).throw(new Error('invalid')));
validator.addCondition(new HasNotBlankSpacesCondition(param).throw(new Error('invalid')));
validator.addCondition(new CustomCondition(() => { return param.length >= 5 }).throw(new Error('invalid')));
validator.addCondition(new InstanceOfCondition(param, SomeClass).throw(new Error('invalid')));
validator.execute(() => {
    //do your staff if information is correct...
}, (err) => { throw err; });
```

Sometimes, we want to invert the condition:
```javascript
if (param !== null && param !== undefined){
    throw new Error('some error');
}else if (otherParam !== null && otherParam !== undefined) {
    throw new Error('some other error');
}else{
    //do your staff if information is correct...
}
```

We can negate conditions in order to do that using not() function:
```javascript
let validator = new Validator();
validator.addCondition(new NotNullOrUndefinedCondition(param).not().throw(new Error('some error')));
validator.addCondition(new NotNullOrUndefinedCondition(otherParam).not().throw(new Error('some other error')));

validator.execute(() => {
    //do your staff if information is correct...
}, (err) => { throw err; });
```

# Creating your own conditions
You can create your customs conditions extending from Condition class.

```javascript
import { Condition } from 'no-if-validator';

class SuperCondition extends Condition {
    constructor(yourValues) {
        super();
        this._value = yourValues;
    }

    isValid() {
        if (this._invert) {
            //Your not magic here
        } else {
            //Your magic here
        }
    }

    not() {
        //Invert your condition
        var condition = new SuperCondition(this._value);
        condition._invert = !this._invert;
        condition._err = this._err;
        return condition;
    }
}
```

# All conditions supported
- Condition
- CompareToCondition
- CustomCondition
- EqualCondition
- GreaterOrEqualCondition
- GreaterCondition
- HasNotBlankSpacesCondition
- InstanceOfCondition
- IsNumberCondition
- IsStringCondition
- LessOrEqualCondition
- LessCondition
- NotNullOrUndefinedCondition
- RegexCondition
- ValidMailCondition

# Installation

    $ npm install no-if-validator
