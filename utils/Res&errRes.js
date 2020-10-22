

exports.Res = (res, code, data) => {
    return res.status(code).json({
        success: true,
        data: data
    })
} 
exports.errRes = (res, code, msg) => {
    return res.status(code).json({
        success: `${code}`.startsWith('4' || '5') ? false : true,
        message: msg
    })
}