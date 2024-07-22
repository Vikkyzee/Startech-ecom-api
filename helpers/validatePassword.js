const validatePassword = (password)=>{
    const pass = /^(?=.*[A-Za-z])(?=.*\d)[A-ZA-z\d]{8,}$/
    return pass.test(password)
}

module.exports = validatePassword