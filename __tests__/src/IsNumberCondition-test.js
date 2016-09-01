import IsNumberCondition from '../../src/IsNumberCondition';

describe('IsNumberCondition', () => {

  it('isValid returns false if value is undefined', () => {
    var undefinedValue;
    var condition = new IsNumberCondition(undefinedValue);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns false if mail is null', () => {
    var nullValue;
    var condition = new IsNumberCondition(nullValue);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns true if value is instance of Number', () => {
    var value = 5;
    var condition = new IsNumberCondition(value);

    expect(condition.isValid()).toBe(true);
  });

  it('isValid returns false if value is not instance of Number', () => {
    var value = {};
    var condition = new IsNumberCondition(value);

    expect(condition.isValid()).toBe(false);
  });

  it('not() returns false if original conditions returns true', () => {
    var condition = new IsNumberCondition(1);

    expect(condition.isValid()).toEqual(true);
    expect(condition.not().isValid()).toEqual(false);
  });

  it('not() returns true if original conditions returns false', () => {
    var condition = new IsNumberCondition('1as df');

    expect(condition.isValid()).toEqual(false);
    expect(condition.not().isValid()).toEqual(true);
  });
});