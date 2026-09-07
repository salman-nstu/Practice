function formatValue(value: string): string;
function formatValue(value: number): string;

function formatValue(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }

    return value.toString();
}
console.log(formatValue(22));
console.log(formatValue("Hello"));

let digit: number | string[];

// digit = [2 ]; 
