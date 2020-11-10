export const setHeader = (token=null, number=1) => {
    let config
    if (token !== null) {
        return config = {
            headers: {
                "x-auth-token": `${token}`
            }
        }
    } else if (token !== null && number === 2) {
        return config = {
            headers: {
                "Content-Type": `application/json`,
                "x-auth-token": `${token}`
            }
        }
        } else {
            return config = {
                headers: {
                    "Content-Type": `application/json`,
                }
            }
        }
    
}