// 检验密码正则
export function validatePassword(val) {
    let isApproved = true
    if (!/^(?=.*\d)(?=.*[a-zA-Z]).{6,12}$/.test(val)) {
        isApproved = false
    }
    if (/[\u4e00-\u9fa5]/.test(val)) {
        isApproved = false
    }
    let specialReg = new RegExp("[`~!@#$%^&*()_\\-+=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]")
    if (specialReg.test(val)) {
        isApproved = false
    }
    return isApproved
}