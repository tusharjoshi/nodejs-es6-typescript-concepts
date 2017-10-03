"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emojione_1 = require("emojione");
var EMOJI_SHORTCODES = /:[a-zA-Z1-9_]+:/g;
function findEmojis(str) {
    return emojione_1.toShort(str).match(EMOJI_SHORTCODES) || [];
}
exports.findEmojis = findEmojis;
function getImage(str) {
    return emojione_1.shortnameToImage(str);
}
exports.getImage = getImage;
