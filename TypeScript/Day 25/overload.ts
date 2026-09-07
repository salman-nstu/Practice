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


function process(value: string): string;
function process(value: number): number;

function process(value: string | number): string | number {
    if (typeof value === "string") {
        return value.toUpperCase();
    }

    return value * 2;
}
console.log(process("hello"));
console.log(process(10));