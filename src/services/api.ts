import { isToken, isLogin } from "../hooks/useAuth";




export default async function isValidToken(tryLogin: isLogin) {
    const isValidToken_object = await isToken(tryLogin);

    if(isValidToken_object.token !== "Token não fornecido") {
        alert(isValidToken_object.token)
        return true
    }
    alert(isValidToken_object.token)
    return false

    

}


