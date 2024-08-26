import { checkURL } from "../formHandler";

describe('checkURL', () => {
    test('should return true for valid URLs', () => {
      expect(checkURL('https://example.com')).toBe(true);
      expect(checkURL('http://example.com')).toBe(true);
      expect(checkURL('https://sub.example.com')).toBe(true);
      expect(checkURL('https://example.com/path?query=param')).toBe(true);
    });
  
    test('should return false for invalid URLs', () => {
      expect(checkURL('invalid-url')).toBe(false);
      expect(checkURL('ftp://example.com')).toBe(false);
      expect(checkURL('http://')).toBe(false);
      expect(checkURL('http://example')).toBe(false);
    });
  
    test('should return false for empty strings', () => {
      expect(checkURL('')).toBe(false);
    });
});
