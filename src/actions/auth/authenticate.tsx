
export default {
    isAuthenticated: localStorage.getItem("token"),
    authenticate(cb: any) {
        localStorage.setItem("token", "mytoken")
    },
    signout(cb: any) {
        localStorage.removeItem("token");
    }
}
