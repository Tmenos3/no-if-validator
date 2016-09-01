import ValidMailCondition from '../../src/ValidMailCondition';

describe('ValidMailCondition', () => {
  it('isValid returns false if mail is undefined', () => {
    var undefinedMail;
    var condition = new ValidMailCondition(undefinedMail);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns false if mail is null', () => {
    var nullMail;
    var condition = new ValidMailCondition(nullMail);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns false if mail is not valid', () => {
    var notValidMail = 'invalidMail';
    var condition = new ValidMailCondition(notValidMail);

    expect(condition.isValid()).toBe(false);
  });

  it('isValid returns true if mail is valid', () => {
    var validMail = 'valid@mail.com';
    var condition = new ValidMailCondition(validMail);

    expect(condition.isValid()).toBe(true);
  });

  it('not() returns false if mail is valid', () => {
    var validMail = 'valid@mail.com';
    var condition = new ValidMailCondition(validMail);

    expect(condition.isValid()).toEqual(true);
    expect(condition.not().isValid()).toEqual(false);
  });

  it('not() returns true if mail is not valid', () => {
    var notValidMail = 'invalidMail';
    var condition = new ValidMailCondition(notValidMail);

    expect(condition.not().isValid()).toEqual(true);
    expect(condition.not().not().isValid()).toEqual(false);
  });
});