"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("@actions/core"));
const exec_1 = require("@actions/exec");
const github_1 = __importDefault(require("@actions/github"));
async function run() {
    const targetDir = core_1.default.getInput('targetDir');
    console.log(`targetDir -> ${targetDir}!`);
    core_1.default.setOutput('message', 'Hello World!');
    const payload = JSON.stringify(github_1.default.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
    await (0, exec_1.exec)('ls', ['-al', targetDir]);
}
run().catch(err => core_1.default.setFailed(err.message));
