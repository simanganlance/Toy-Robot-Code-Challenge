const { isValidCommand, isPlaceCommand } = require('../modules/ValidateInput');

describe('Validate Input', () => {
  describe('processInputStream', () => {
    it('should return true for valid command', () => {
      expect(isValidCommand('MOVE')).toBe(true);
    });

    it('should return false for invalid command', () => {
      expect(isValidCommand('INVALID')).toBe(false);
    });
  });

  describe('isPlaceCommand', () => {
    it('should return parameters array for valid PLACE command', () => {
      const parameters = isPlaceCommand('PLACE 1,2,NORTH');
      expect(parameters).toEqual([1, 2, 'NORTH']);
    });

    it('should return parameters array for valid PLACE command even with unecessary whitespace', () => {
      const parameters = isPlaceCommand('PLACE   1,2,NORTH   ');
      expect(parameters).toEqual([1, 2, 'NORTH']);
    });

    it('should return null for invalid PLACE Orientation', () => {
      const parameters = isPlaceCommand('PLACE 1,2,INVALID');
      expect(parameters).toBeNull();
    });

    it('should return null for decimal coordinate', () => {
      const parameters = isPlaceCommand('PLACE 1.3,2,EAST');
      expect(parameters).toBeNull();
    });

    it('should return null for negative coordinate', () => {
      const parameters = isPlaceCommand('PLACE 4,-2,EAST');
      expect(parameters).toBeNull();
    });

    it('should return null for out of bound coordinate', () => {
      const parameters = isPlaceCommand('PLACE 4,5,EAST');
      expect(parameters).toBeNull();
    });

    it('should return null for Invalid Place format', () => {
      const parameters = isPlaceCommand('PLACE4,2,EAST');
      expect(parameters).toBeNull();
    });

    it('should return null for incorrect parameter size', () => {
      const parameters = isPlaceCommand('PLACE 4,5,EAST,FAKE');
      expect(parameters).toBeNull();
    });


  });
});