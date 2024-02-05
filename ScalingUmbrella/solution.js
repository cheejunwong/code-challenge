function arrange(array) {
    let result = [];
    let startRow = 0;
    let endRow = array.length - 1;
    let startCol = 0;
    let endCol = array[0].length - 1;

    
    while (startRow <= endRow && startCol <= endCol) {
        // traverse top row
        for (let i = startCol; i <= endCol; i++) {
            result.push(array[startRow][i]);
        }
        startRow++;

        // traverse right column
        for (let i = startRow; i <= endRow; i++) {
            result.push(array[i][endCol]);
        }
        endCol--;

        // traverse bottom row
        if (startRow <= endRow) {
            for (let i = endCol; i >= startCol; i--) {
                result.push(array[endRow][i]);
            }
            endRow--;
        }

        // traverse left column
        if (startCol <= endCol) {
            for (let i = endRow; i >= startRow; i--) {
                result.push(array[i][startCol]);
            }
            startCol++;
        }
    }

    return result;
}

// Test cases
let array1 = [[1,2,3],[4,5,6],[7,8,9]];
let array2 = [[1,2,3],[8,9,4],[7,6,5]];

console.log(arrange(array1)); // [1,2,3,6,9,8,7,4,5]
console.log(arrange(array2)); // [1,2,3,4,5,6,7,8,9]
