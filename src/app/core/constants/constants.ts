
const apiUrl = 'https://ssbrinet-api.onrender.com/api/v1';

export const APIEndPoint={
    AUTH:{
        Register:`${apiUrl}/users/register`,
        Login:`${apiUrl}/users/login`,
        GetCurrentUser:`${apiUrl}/users/current-user`,
        UpdateAccount:`${apiUrl}/users/update-account`,
        ChangePassword:`${apiUrl}/users/change-password`,
        ResetPassword:`${apiUrl}/users/reset-password`,
        RefreshToken:`${apiUrl}/users/refresh-token`,
        Logout:`${apiUrl}/users/logout`,
    },
    Dashboard:{
        profileAPI:`${apiUrl}/profile-api`
    },
    Support:{
        help:`${apiUrl}/help-api`
    }
};
