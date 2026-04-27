//a program to print * in triangle pattern
function printTriangle(rows: number): void {
    for (let i = 1; i <= rows; i++) {
        let pattern :String= "";
        
        for (let j:number= 1; j <= i; j++) {
            pattern += "*";
        }

        console.log(pattern);
    }
}

// Example usage
let rows: number = 5;
printTriangle(rows);