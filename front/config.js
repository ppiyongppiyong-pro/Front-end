export const kakaoMapKey = import.meta.env.VITE_APP_KAKAOMAP_KEY;
export const restApiKey = import.meta.env.VITE_APP_RESTAPI_KEY;
export const redirectUri = import.meta.env.VITE_APP_REDIRECT_URI;
export const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectUri}&response_type=code`;
