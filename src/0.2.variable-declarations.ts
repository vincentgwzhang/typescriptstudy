//https://www.tslang.cn/docs/handbook/variable-declarations.html
// npm run 02

{
    function sumMatrix(matrix: number[][]) {
        var sum = 0;
        for (var i = 0; i < matrix.length; i++) {
            var currentRow = matrix[i];
            for (var j = 0; j < currentRow.length; j++) {
                sum += currentRow[j];
            }
        }

        return sum;
    }

    let matrix: number[][] = [[1, 2, 3], [4, 5, 6]];
    sumMatrix(matrix);
}

{
    function f() {
        var a = 10;
        return function g() {
            var b = a + 1;
            return b;
        }
    }

    var g = f();
    var xx = g(); // returns 11;
}

{
    let xLoop: number = 0;
    for (var i = 0; i < 10; i++) {
        // capture the current state of 'i'
        // by invoking a function with its current value
        (function (i) {
            // setTimeout(function () { console.log(i); }, 100 * i);
            xLoop++;
        })(i);
    }
    //console.log(xLoop); xLoop = 10
}


// destructure array
{
    let input = [1, 2];
    let [first, second] = input;
    // first = 1;
    // second = 2;
}

{
    let input11: [number, number] = [1, 2];
    function function111([first, second]: [number, number]) {
        console.log(first);
        console.log(second);
    }

    //function111(input11);
}

{
    let [, second, fourth] = [51, 52, 53, 54];
    let [first] = [1, 2, 3, 4];
    //console.log(first); // 1
    //console.log(second);// 52
    //console.log(fourth);// 53
}

// destructure object
{
    let o = {
        a: "foo",
        b: 12,
        c: "bar"
    };
    let { a, c } = o;
    //console.log(a); // foo
    //console.log(c); // bar
}





