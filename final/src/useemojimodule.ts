import { findEmojis, getImage } from './emojimodule';
const foundEmojis: string[] = findEmojis(`Hello 🐵! What's up? ✌️`);
 
console.log(foundEmojis);

console.log(getImage(":v:"));