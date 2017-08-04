/**
 * Created by wangxiaohui on 17/8/3.
 */
function log( ctx ) {
    console.log( ctx.method, ctx.header.host + ctx.url )
}

module.exports = function () {
    return async function ( ctx, next ) {
        log(ctx);
        await next()
    }
}