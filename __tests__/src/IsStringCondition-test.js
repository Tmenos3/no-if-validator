import IsStringCondition from '../../src/IsStringCondition';

describe('IsStringCondition', () => {

  it('isValid returns false if value is undefined', () => {
    var undefinedValue;
    var condition = new IsStringCondition(undefinedValue);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns false if mail is null', () => {
    var nullValue;
    var condition = new IsStringCondition(nullValue);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns true if value is instance of String', () => {
    var value = 'anyString';
    var condition = new IsStringCondition(value);

    expect(condition.isValid()).toBe(true);
  });

  it('isValid returns false if value is not instance of String', () => {
    var value = 5;
    var condition = new IsStringCondition(value);

    expect(condition.isValid()).toBe(false);
  });

  it('not() returns false if original conditions returns true', () => {
    var condition = new IsStringCondition('anyString');

    expect(condition.isValid()).toEqual(true);
    expect(condition.not().isValid()).toEqual(false);
  });

  it('not() returns true if original conditions returns false', () => {
    var condition = new IsStringCondition({ property: 1 });

    expect(condition.isValid()).toEqual(false);
    expect(condition.not().isValid()).toEqual(true);
  });
});