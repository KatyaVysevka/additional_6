module.exports = function zeros(expression) {
    var nice = expression.split('*');//['15!', '23!']
    var list2 = 0;
    var list5 = 0;
    var array = [];

    for (var index = 0; index < nice.length; index++) {
        var elem = nice[index];//'23!'
        var a = elem.indexOf('!');
        var num = elem.substr(0, a) - 0;

        if (elem.indexOf('!!') == -1 || num % 2 == 0){
            for (var f = 2; f <= num; f += 2) {
                list2 += countOfDelitel(f, 2);
            }
        }

        var step = elem.indexOf('!!') == -1
            ? 5 
            : 10;
        var start = elem.indexOf('!!') == -1 || num % 2 == 1 
            ? 5 
            : 10;
        for (var f = start; f <= num; f += step) {
            list5 += countOfDelitel(f, 5);
        }
    }

    var answer = min(list2, list5);
    return answer;

    function countOfDelitel(number, delitel) {
        var count = 0;
        while (number != 0 && number % delitel == 0) {
            count++;
            number = number / delitel;
        }

        return count;
    }

    function min(a, b) {
        return a > b ? b : a;
    }
}
