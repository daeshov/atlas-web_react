import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
  it('should return the correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });
});

describe('getFooterCopy', () => {
  it('should return "Holberton School" when the argument is true', () => {
    const result = getFooterCopy(true);
    expect(result).toEqual('Holberton School');
  });

  it('should return "Holberton School main dashboard" when the argument is false', () => {
    const result = getFooterCopy(false);
    expect(result).toEqual('Holberton School main dashboard');
  });
});

describe('getLatestNotification', () => {
  it('should return the correct string', () => {
    const result = getLatestNotification();
    expect(result).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
