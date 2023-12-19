const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str != "string") {
    str = str + "";
  }

  let defObj = {
    repeatTimes: 0,
    separator: "+",
    addition: "",
    additionRepeatTimes: 0,
    additionSeparator: "|",
  };
  let additionStr = "";
  let longStr = "";

  Object.assign(defObj, options);
  


 if (typeof defObj.addition != "string") {
    defObj.addition = defObj.addition + "";
  }

  if (defObj.repeatTimes == 0 && defObj.additionRepeatTimes == 0) {
    longStr = str + defObj.addition;
    return longStr;
  }

  if (defObj.addition.length > 0 && defObj.additionRepeatTimes > 0) {
    additionStr = (defObj.addition + defObj.additionSeparator).repeat(
      defObj.additionRepeatTimes
    );
    additionStr = additionStr.substring(
      0,
      additionStr.length - defObj.additionSeparator.length
    );
  } 

  if (defObj.addition.length > 0 && defObj.additionRepeatTimes == 0) {
    additionStr = defObj.addition;
  }





  if (additionStr.length > 0) {
    longStr = (str + additionStr + defObj.separator).repeat(defObj.repeatTimes);
    longStr = longStr.substring(0, longStr.length - defObj.separator.length);
  } else {
    longStr = (str + defObj.separator).repeat(defObj.repeatTimes);
    longStr = longStr.substring(0, longStr.length - defObj.separator.length);
  }
  return longStr;
}


module.exports = {
  repeater
};
