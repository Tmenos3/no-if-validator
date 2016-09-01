import InstanceOfCondition from '../../src/InstanceOfCondition';

describe('InstanceOfCondition', () => {
  it('Cannot create with an undefined type', () => {
    var undefinedType;

    expect(() => new InstanceOfCondition('value', undefinedType)).toThrowError(InstanceOfCondition.INVALID_TYPE());
  });

  it('Cannot create with an null type', () => {
    var nullType = null;

    expect(() => new InstanceOfCondition('value', nullType)).toThrowError(InstanceOfCondition.INVALID_TYPE());
  });

  it('isValid returns false if value is undefined', () => {
    var undefinedValue;
    var condition = new InstanceOfCondition(undefinedValue, String);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns false if mail is null', () => {
    var nullValue;
    var condition = new InstanceOfCondition(nullValue, String);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns true if value is instance of type', () => {
    var value = new String('string');
    var type = String;
    var condition = new InstanceOfCondition(value, type);

    expect(condition.isValid()).toBe(true);
  });

  it('isValid returns false if value is not instance of type', () => {
    var value = 'string';
    var type = InstanceOfCondition;
    var condition = new InstanceOfCondition(value, type);

    expect(condition.isValid()).toBe(false);
  });

  it('not() returns false if original conditions returns true', () => {
    var condition = new InstanceOfCondition(new String('string'), String);

    expect(condition.isValid()).toEqual(true);
    expect(condition.not().isValid()).toEqual(false);
  });

  it('not() returns true if original conditions returns false', () => {
    var condition = new InstanceOfCondition(new String('string'), InstanceOfCondition);

    expect(condition.isValid()).toEqual(false);
    expect(condition.not().isValid()).toEqual(true);
  });
});