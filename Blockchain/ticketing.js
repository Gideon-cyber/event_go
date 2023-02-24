"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getCreatedEvent = exports.getMyEvents = exports.getAllEvents = exports.getEvent = exports.purchaseTicket = exports.createEvent = void 0;
var contractAddress = "0x025683D044687Aa8E22f11C17acf65794306D89e";
var contractABI = [
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string"
            },
            {
                internalType: "string",
                name: "_description",
                type: "string"
            },
            {
                internalType: "uint256",
                name: "_price",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_totalTickets",
                type: "uint256"
            },
        ],
        name: "createEvent",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "_eventId",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "string",
                name: "_name",
                type: "string"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_price",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_totalTickets",
                type: "uint256"
            },
        ],
        name: "eventCreated",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_eventId",
                type: "uint256"
            },
        ],
        name: "purchaseTicket",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "_eventId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "_buyer",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_price",
                type: "uint256"
            },
        ],
        name: "ticketPurchased",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "_eventId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address"
            },
        ],
        name: "ticketTransferred",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_eventId",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "_to",
                type: "address"
            },
        ],
        name: "transferTicket",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_eventId",
                type: "uint256"
            },
            {
                internalType: "string",
                name: "_name",
                type: "string"
            },
        ],
        name: "updateEventName",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_eventId",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_price",
                type: "uint256"
            },
        ],
        name: "updateEventPrice",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_eventId",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_totalTickets",
                type: "uint256"
            },
        ],
        name: "updateEventTotalTickets",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_eventId",
                type: "uint256"
            },
        ],
        name: "withdrawEarning",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        name: "allEvents",
        outputs: [
            {
                internalType: "string",
                name: "name",
                type: "string"
            },
            {
                internalType: "string",
                name: "description",
                type: "string"
            },
            {
                internalType: "uint256",
                name: "price",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "availableTickets",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalTickets",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "eventId",
                type: "uint256"
            },
            {
                internalType: "address payable",
                name: "eventOwner",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amountPaid",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        name: "eventIds",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        name: "eventsMap",
        outputs: [
            {
                internalType: "string",
                name: "name",
                type: "string"
            },
            {
                internalType: "string",
                name: "description",
                type: "string"
            },
            {
                internalType: "uint256",
                name: "price",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "availableTickets",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalTickets",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "eventId",
                type: "uint256"
            },
            {
                internalType: "address payable",
                name: "eventOwner",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amountPaid",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getAllEvents",
        outputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "name",
                        type: "string"
                    },
                    {
                        internalType: "string",
                        name: "description",
                        type: "string"
                    },
                    {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "availableTickets",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "totalTickets",
                        type: "uint256"
                    },
                    {
                        internalType: "address[]",
                        name: "attendees",
                        type: "address[]"
                    },
                    {
                        internalType: "uint256",
                        name: "eventId",
                        type: "uint256"
                    },
                    {
                        internalType: "address payable",
                        name: "eventOwner",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "amountPaid",
                        type: "uint256"
                    },
                ],
                internalType: "struct Ticketing.Event[]",
                name: "",
                type: "tuple[]"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_eventId",
                type: "uint256"
            },
        ],
        name: "getAttendees",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address"
            },
        ],
        name: "getCreatedEvent",
        outputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "name",
                        type: "string"
                    },
                    {
                        internalType: "string",
                        name: "description",
                        type: "string"
                    },
                    {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "availableTickets",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "totalTickets",
                        type: "uint256"
                    },
                    {
                        internalType: "address[]",
                        name: "attendees",
                        type: "address[]"
                    },
                    {
                        internalType: "uint256",
                        name: "eventId",
                        type: "uint256"
                    },
                    {
                        internalType: "address payable",
                        name: "eventOwner",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "amountPaid",
                        type: "uint256"
                    },
                ],
                internalType: "struct Ticketing.Event[]",
                name: "",
                type: "tuple[]"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_eventId",
                type: "uint256"
            },
        ],
        name: "getEvent",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            },
            {
                internalType: "string",
                name: "",
                type: "string"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "address[]",
                name: "",
                type: "address[]"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address"
            },
        ],
        name: "getMyEvents",
        outputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "name",
                        type: "string"
                    },
                    {
                        internalType: "string",
                        name: "description",
                        type: "string"
                    },
                    {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "availableTickets",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "totalTickets",
                        type: "uint256"
                    },
                    {
                        internalType: "address[]",
                        name: "attendees",
                        type: "address[]"
                    },
                    {
                        internalType: "uint256",
                        name: "eventId",
                        type: "uint256"
                    },
                    {
                        internalType: "address payable",
                        name: "eventOwner",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "amountPaid",
                        type: "uint256"
                    },
                ],
                internalType: "struct Ticketing.Event[]",
                name: "",
                type: "tuple[]"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_eventId",
                type: "uint256"
            },
        ],
        name: "getNumAttendees",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getNumEvents",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address"
            },
        ],
        name: "getNumTicketsOwned",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            },
        ],
        name: "getTicketOwned",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        name: "ticketsOwned",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_eventId",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "_owner",
                type: "address"
            },
        ],
        name: "verifyTicket",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
];
var Web3 = require("web3");
// Set up Web3 provider
var web3 = new Web3("https://celo-alfajores.infura.io/v3/e3f8553f110f4c34bef36bf2153e8d88");
var contract = new web3.eth.Contract(contractABI, contractAddress);
var createEvent = function (name, description, price, totalTickets) { return __awaiter(void 0, void 0, void 0, function () {
    var priceInWei, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                priceInWei = web3.utils.toWei(price.toString(), "ether");
                return [4 /*yield*/, contract.methods
                        .createEvent(name, description, priceInWei, totalTickets)
                        .send()];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.createEvent = createEvent;
var purchaseTicket = function (eventId, price) { return __awaiter(void 0, void 0, void 0, function () {
    var priceInWei, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                priceInWei = web3.utils.toWei(price.toString(), "ether");
                return [4 /*yield*/, contract.methods.purchaseTicket(eventId).send({
                        value: priceInWei
                    })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.purchaseTicket = purchaseTicket;
var getEvent = function (eventId) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.getEvent(eventId).call()];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.getEvent = getEvent;
var getAllEvents = function () { return __awaiter(void 0, void 0, void 0, function () {
    var totalEvent, events, index, event_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.getNumEvents().call()];
            case 1:
                totalEvent = _a.sent();
                events = [];
                index = 0;
                _a.label = 2;
            case 2:
                if (!(index < totalEvent)) return [3 /*break*/, 5];
                return [4 /*yield*/, contract.methods.allEvents(index).call()];
            case 3:
                event_1 = _a.sent();
                events.push(event_1);
                _a.label = 4;
            case 4:
                index++;
                return [3 /*break*/, 2];
            case 5: return [2 /*return*/, events];
        }
    });
}); };
exports.getAllEvents = getAllEvents;
(0, exports.getAllEvents)().then(function (result) { return console.log(result); });
var getMyEvents = function (account) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.getMyEvents(account).call()];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.getMyEvents = getMyEvents;
var getCreatedEvent = function (account) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.getCreatedEvent(account).call()];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.getCreatedEvent = getCreatedEvent;
