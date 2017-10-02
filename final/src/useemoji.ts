import { findEmojis } from './searchemoji';
const foundEmojis: string[] = findEmojis(`Hello 🐵! What's up? ✌️`);
 
console.log(foundEmojis);