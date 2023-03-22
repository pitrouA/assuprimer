const assert = require('assert');

assert.strictEqual(capitalizeFirstLetters('les pommes c bon'), 'Les Pommes C Bon');
assert.strictEqual(capitalizeFirstLetters('a'), 'A');
assert.strictEqual(capitalizeFirstLetters(''), '');

function capitalizeFirstLetters(s_input) {

  s_strRet = ""
  b_blankFound = true;

  for(var i=0;i<s_input.length;i++){
    //uppercase if blank previously
    if(b_blankFound){
      s_strRet = s_strRet + s_input.charAt(i).toUpperCase();
    }else{
      s_strRet = s_strRet + s_input.charAt(i);
    }
    //next uppercase if blank
    if(s_input.charAt(i) == ' '){
      b_blankFound = true;
    }else{
      b_blankFound = false;
    }
  }

  return s_strRet;
}
