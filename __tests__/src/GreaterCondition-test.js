import GreaterCondition from '../../src/GreaterCondition';

describe('GreaterCondition', () => {
  it('isValid returns false if parameter value is undefined', () => {
    var undefinedValue;
    var condition = new GreaterCondition(undefinedValue, 'compareTo');

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns false if parameter value is null', () => {
    var nullValue = null;
    var condition = new GreaterCondition(nullValue, 'compareTo');

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns false if parameter compareTo is undefined', () => {
    var undefinedCompareTo;
    var condition = new GreaterCondition('value', undefinedCompareTo);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns false if parameter compareTo is null', () => {
    var nullCompareTo = null;
    var condition = new GreaterCondition('value', nullCompareTo);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns true if value is greater than compareTo', () => {
    var value = 1;
    var compareTo = value - 1;
    var condition = new GreaterCondition(value, compareTo);

    expect(condition.isValid()).toBe(true);
  });

  it('isValid returns false if value is equal than compareTo', () => {
    var value = 1;
    var compareTo = value;
    var condition = new GreaterCondition(value, compareTo);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns false if value is less than compareTo', () => {
    var value = 2;
    var compareTo = value + 1;
    var condition = new GreaterCondition(value, compareTo);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns false if comparison throws exception', () => {
    var value = 2;
    var compareTo = {};
    var condition = new GreaterCondition(value, compareTo);

    expect(condition.isValid()).toBe(false);
  });

  it('not() returns false if original condition is true', () => {
    var condition = new GreaterCondition(2, 1);

    expect(condition.isValid()).toEqual(true);
    expect(condition.not().isValid()).toEqual(false);
  });

  it('not() returns true if original condition is false', () => {
    var condition = new GreaterCondition(1, 2);

    expect(condition.isValid()).toEqual(false);
    expect(condition.not().isValid()).toEqual(true);
  });
});