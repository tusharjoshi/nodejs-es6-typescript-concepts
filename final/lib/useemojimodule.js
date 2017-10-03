"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emojimodule_1 = require("./emojimodule");
var foundEmojis = emojimodule_1.findEmojis("Hello \uD83D\uDC35! What's up? \u270C\uFE0F");
console.log(foundEmojis);
console.log(emojimodule_1.getImage(":v:"));
