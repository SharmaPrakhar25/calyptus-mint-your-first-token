"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userKeypair = void 0;
var fs_1 = require("fs");
var os_1 = require("os");
var web3_js_1 = require("@solana/web3.js");
var USER_KEYPAIR_PATH = (0, os_1.homedir)() + "/.config/solana/id.json";
exports.userKeypair = web3_js_1.Keypair.fromSecretKey(Buffer.from(JSON.parse((0, fs_1.readFileSync)(USER_KEYPAIR_PATH, "utf-8"))));
