"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var searchemoji_1 = require("./searchemoji");
var foundEmojis = searchemoji_1.findEmojis("Hello \uD83D\uDC35! What's up? \u270C\uFE0F");
console.log(foundEmojis);
