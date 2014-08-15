(function (root, factory){
  if (typeof define === 'function' && define.amd){
    // AMD. Register as an anonymous module.
    define(['moment'], factory);
  } else if (typeof exports === 'object'){
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('moment'));
  } else {
    // Browser globals (root is window)
    root.parseTime = factory(root.moment);
  }
}(this, function (moment){
  "use strict";

  function fromTimeInput(str){
    str = str.replace(/\./g, ':');

    // Parse just numbers like 200, 2am, 2pm as 2:00
    if (!(/[^\dapm]/i.test(str))) {
      var value = parseInt(str, 10);
      var tstr;
      if (value < 100) {
        tstr = value.toFixed(2).replace('.', ':');
      } else {
        tstr = (value/100).toFixed(2).replace('.', ':');
      }
      if (/a/i.test(str)) {
        str = tstr + 'am';
      } else if (/p/i.test(str)) {
        str = tstr + 'pm';
      } else {
        str = tstr;
      }
    }

    // Parse hours and minutes
    if (/\:/.test(str)){
      if (/[ap]/.test(str)){
        return moment(str, 'h:mma');
      } else {
        return moment(str, 'h:mm');
      }
    } else {
      return;
    }
  }

  moment.fromTimeInput = fromTimeInput;
  return fromTimeInput;
}));
