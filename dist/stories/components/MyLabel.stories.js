"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackGroundColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = __importDefault(require("../../components/MyLabel"));
exports.default = {
    title: 'UI/MyLabel',
    component: MyLabel_1.default,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: { type: 'color' } },
        backgroundColor: { control: { type: 'color' } }
    },
    tags: ['autodocs'],
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.default, __assign({}, args)); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    label: 'Basic Label',
    size: 'normal',
    allCaps: false,
    color: 'primary'
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    label: 'All Caps Label',
    size: 'normal',
    allCaps: true
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: 'Secondary Label',
    size: 'h2',
    color: 'secondary'
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    label: 'Secondary Label',
    size: 'h2',
    color: 'tertiary'
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    label: 'Custom Font Color',
    size: 'h1',
    fontColor: '#d7d7d7'
};
exports.BackGroundColor = Template.bind({});
exports.BackGroundColor.args = {
    label: 'Background Color',
    size: 'h1',
    backgroundColor: '#d7d7d7'
};
