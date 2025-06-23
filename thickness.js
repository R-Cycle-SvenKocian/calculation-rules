// remote-module.js

// A named export
export function greet(name) {
    return `Hello, ${name}!`;
}

// Another named export
export const version = '1.0.0';

// A default export (optional)
export default function sayHello() {
    console.log('Hello from remote module!');
}