import Cookies from "js-cookie";


export const setAuthCookie = (userId: string) => {
    const encoderUser = btoa(userId);

    Cookies.set('laundry', encoderUser, {
        expires: 15,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/'
    });
}

export const getAuthCookie = () => {
    const cookie = Cookies.get('laundry');
    if (cookie) {
        const decoderUser = atob(cookie);
        return {
            userId: decoderUser,
            isValid: true
        };
    }
    return null;
}