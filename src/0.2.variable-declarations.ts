//https://www.tslang.cn/docs/handbook/variable-declarations.html
// npm run 02

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

let matrix : number[][] = [[1,2,3],[4,5,6]];
sumMatrix(matrix);

