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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_model_1 = require("./user.model");
const createUserIntoDB = (Data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.create(Data);
    return result;
});
const getAllUserFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.find();
    return result;
});
const getOneUserFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findOne({ userId });
    return result;
});
const updateUserFromDB = (userId, updatedUserData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findOneAndUpdate({ userId }, updatedUserData, {
        new: true,
        runValidators: true,
    });
    return result;
});
const updateUserOrderFromDB = (userId, updatedOrderData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findOneAndUpdate({ userId }, { $addToSet: { orders: updatedOrderData } }, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteOneUserFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.deleteOne({ userId: userId });
    return result;
});
const getOneUserOrderFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findOne({ userId });
    return result;
});
exports.UserService = {
    createUserIntoDB,
    getAllUserFromDB,
    getOneUserFromDB,
    deleteOneUserFromDB,
    updateUserFromDB,
    updateUserOrderFromDB,
    getOneUserOrderFromDB,
};
