
export default {
    isAuthenticated() {
        if(localStorage.getItem("token")){
            return true;
        }
        return false;
    } ,
    authenticate(cb: any, history: any) {
        localStorage.setItem("token", "mytoken")
        history.push('/home');
    },
    signout(cb: any, history: any) {
        localStorage.removeItem("token");
        history.push('/home');
    }
}
