function spiralOrder(matrix) {
    let rowLength = matrix.length;
    let colLength = matrix[0].length;
    let i, rowIndex = 0, colIndex = 0;
    let output = [];
  
    while (rowIndex < rowLength && colIndex < colLength) {
        for (i = colIndex; i < colLength; ++i) {
            output.push(matrix[rowIndex][i]);
        }
        rowIndex++;
    
        for (i = rowIndex; i < rowLength; ++i) {
            output.push(matrix[i][colLength - 1]);
        }
        colLength--;
    
        if (rowIndex < rowLength) {
            for (i = colLength - 1; i >= colIndex; --i) {
                output.push(matrix[rowLength - 1][i]);
            }
            rowLength--;
        }
    
        if (colIndex < colLength) {
            for (i = rowLength - 1; i >= rowIndex; --i) {
                output.push(matrix[i][colIndex]);
            }
            colIndex++;
        }
    }

    return output;
}

let input1 = [[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8],[13, 12, 11, 10, 9]];
console.log(spiralOrder(input1));

let input2 = [[ 1, 2, 3, 4 ],[ 5, 6, 7, 8 ],[ 9, 10, 11, 12 ],[ 13, 14, 15, 16 ]];
console.log(spiralOrder(input2));

//Time Complexity: O(rowLength * colLength)