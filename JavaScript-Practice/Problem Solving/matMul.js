function multMat(A, B) {
    let rowA = A.length;
    let colA = A[0].length;

    let rowB = B.length;
    let colB = B[0].length;

    if (colA != rowB) {
    return ("Multiplication is not possible !!!")
    }
    let result = [];

    for (let i = 0; i < rowA; i++) {
        result[i] = [];

        for (let j = 0; j < colB; j++) {
            result[i][j] = 0;

            for (let k = 0; k < colA; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }

    }
    return result;
}

let M = [[2,4,5], [3,6,9]];

let N = [[3,5], [3,2], [2,8]];

console.log(multMat(M,N));
