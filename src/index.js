module.exports = function zeros(expression) {
  // your solution
  var a = expression;
  var nice = a.split('*');
  var list0 = 0;
  var list2 = 0;
  var list5 = 0;

  for (var i = 0; i < nice.length; i++) {
      var numberStr = nice[i].split('');
      var boobs = 1;
      for (var k = numberStr.length - 2; k > -1; k--) {
          var num = numberStr[k] - 0;
          
          if (k == numberStr.length - 2){
              checkFirstNumber(num);
          }else{
              list0 += boobs * 2 * num;
              boobs *= 10;
          }

      }
  }
var answer = list0 + min(list2, list5)
 return answer;


  function min(a, b){
      return a > b ? b : a;
  }

  function checkFirstNumber(number){
      if (num > 4){
          list5++;
      }
      if (num > 1){
          list2++;
      }
      if (num == 0){
          list0++;
      }
  }
}
