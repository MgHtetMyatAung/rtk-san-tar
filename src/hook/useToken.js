export const useToken = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
        window.location.reload();
    }
    return token;
};