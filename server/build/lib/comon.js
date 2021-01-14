"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = void 0;
function response(ctx, data, msg = "success", code = 200) {
    ctx.body = {
        data,
        code,
        msg
    };
}
exports.response = response;
