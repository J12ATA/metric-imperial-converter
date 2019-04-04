/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    const matchedInput = input.match(/^[.]?\d+[\/\d. ]*/g);
    const num = matchedInput ? matchedInput.toString() : '1';
    if (input.replace(/[^\/]/g, '').length > 1) return null;
    const numerator = num.match(/^\d*[.]?\d*/g).toString();
    const denominator = num.match(/\d*[.]?\d*\S$/g).toString();
    return num.includes('/') ? parseFloat(numerator/denominator) : Number(num);
  };
  
  this.getUnit = function(input) {
    const validateInput = input.match(/gal|lbs|mi|l|kg|km/ig);
    const extractInput = input.match(/[^=\d\s][a-z]*$/ig).toString().toLowerCase();
    if (validateInput && extractInput === 'l') return 'L';
    return validateInput ? extractInput : null;
  };
  
  this.getReturnUnit = function(initUnit) {
    switch(initUnit) {
      case 'gal': 
        return 'L';
      case 'lbs': 
        return 'kg';
      case 'mi': 
        return 'km';
      case 'L': 
        return 'gal'; 
      case 'kg': 
        return 'lbs';
      case 'km': 
        return 'mi';
      default: 
        return null;
    }
  };

  this.spellOutUnit = function(unit) {
    switch(unit) {
      case 'gal': 
        return 'gallons';
      case 'lbs': 
        return 'pounds';
      case 'mi': 
        return 'miles';
      case 'L': 
        return 'liters';
      case 'kg': 
        return 'kilograms';
      case 'km': 
        return 'kilometers';
      default: 
        return null;
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch(initUnit) {
      case 'gal': 
        return +(initNum*galToL).toFixed(5);
      case 'lbs': 
        return +(initNum*lbsToKg).toFixed(5);
      case 'mi': 
        return +(initNum*miToKm).toFixed(5);
      case 'L': 
        return +(initNum/galToL).toFixed(5);
      case 'kg': 
        return +(initNum/lbsToKg).toFixed(5);
      case 'km': 
        return +(initNum/miToKm).toFixed(5);
      default: 
        return null;
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
