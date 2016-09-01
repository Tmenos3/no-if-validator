import CompareToCondition from '../../src/CompareToCondition';

describe('CompareToCondition', () => {
  it('Cannot create if compare criteria is undefined', () => {
    var undefinedCompareCriteria;

    expect(() => new CompareToCondition('x', undefinedCompareCriteria, 'y')).toThrowError(CompareToCondition.INVALID_COMPARE_CRITERIA());
  });

  it('Cannot create if compare criteria is null', () => {
    var nullCompareCriteria = null;

    expect(() => new CompareToCondition('x', nullCompareCriteria, 'y')).toThrowError(CompareToCondition.INVALID_COMPARE_CRITERIA());
  });

  it('Cannot create if compare criteria is not in (GR, GRE, LS, LSE, EQ)', () => {
    var invalidCompareCriteria = 'anyValue';

    expect(() => new CompareToCondition('x', invalidCompareCriteria, 'y')).toThrowError(CompareToCondition.INVALID_COMPARE_CRITERIA());
  });

  it('isValid returns false if x is undefined', () => {
    var undefineX;
    var condition = new CompareToCondition(undefineX, 'GR', 'y')

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns false if x is null', () => {
    var nullX;
    var condition = new CompareToCondition(nullX, 'GR', 'y')

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns false if y is undefined', () => {
    var undefineY;
    var condition = new CompareToCondition('x', 'GR', undefineY)

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns false if x is null', () => {
    var nullY;
    var condition = new CompareToCondition('x', 'GR', nullY)

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns false if x != y with EQ', () => {
    var condition = new CompareToCondition(1, 'EQ', 2);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns true if x = y with EQ', () => {
    var condition = new CompareToCondition(1, 'EQ', 1);

    expect(condition.isValid()).toBe(true);
  });

  it('isValid returns false if x < y with GR', () => {
    var condition = new CompareToCondition(1, 'GR', 2);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns false if x = y with GR', () => {
    var condition = new CompareToCondition(1, 'GR', 1);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns true if x > y with GR', () => {
    var condition = new CompareToCondition(2, 'GR', 1);

    expect(condition.isValid()).toBe(true);
  });

  it('isValid returns false if x > y with LS', () => {
    var condition = new CompareToCondition(2, 'LS', 1);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns false if x = y with LS', () => {
    var condition = new CompareToCondition(1, 'LS', 1);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns true if x < y with LS', () => {
    var condition = new CompareToCondition(1, 'LS', 2);

    expect(condition.isValid()).toBe(true);
  });

  it('isValid returns false if x < y with GRE', () => {
    var condition = new CompareToCondition(1, 'GRE', 2);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns true if x = y with GRE', () => {
    var condition = new CompareToCondition(1, 'GRE', 1);

    expect(condition.isValid()).toBe(true);
  });

  it('isValid returns true if x < y with GRE', () => {
    var condition = new CompareToCondition(2, 'GRE', 1);

    expect(condition.isValid()).toBe(true);
  });

  it('isValid returns false if x > y with LSE', () => {
    var condition = new CompareToCondition(2, 'LSE', 1);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns true if x = y with LSE', () => {
    var condition = new CompareToCondition(1, 'LSE', 1);

    expect(condition.isValid()).toBe(true);
  });

  it('isValid returns true if x < y with LSE', () => {
    var condition = new CompareToCondition(1, 'LSE', 2);

    expect(condition.isValid()).toBe(true);
  });

  it('not() returns false if original condition is true', () => {
    var condition = new CompareToCondition(2, 'GR', 1);

    expect(condition.isValid()).toEqual(true);
    expect(condition.not().isValid()).toEqual(false);
  });

  it('not() returns true if original condition is false', () => {
    var condition = new CompareToCondition(1, 'GR', 2);

    expect(condition.isValid()).toEqual(false);
    expect(condition.not().isValid()).toEqual(true);
  });
});