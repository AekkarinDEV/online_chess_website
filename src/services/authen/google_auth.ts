export const googleAuthAttemp = async () => {
  const clent_id = import.meta.env.VITE_GCP_CLIENT

  const state = [...Array(16)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')
  localStorage.setItem('latestCSRFToken', state)

  const link =
    `https://accounts.google.com/o/oauth2/auth?` +
    `scope=openid%20email%20profile` +
    `&response_type=code` +
    `&access_type=offline` +
    `&state=${state}` +
    `&redirect_uri=${window.location.origin}/integrations/google/oauth2/callback` +
    `&client_id=${clent_id}` +
    `&prompt=consent`
  window.location.assign(link)
}
