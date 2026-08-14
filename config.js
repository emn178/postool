// Public runtime config for the static GitHub Pages build.
// Google OAuth Web Client ID is a public identifier, not a client secret.
// Never put platform app secrets or refresh tokens in this file.
window.POSTOOL_CONFIG = {
  googleClientId: '1072700165068-sldbo6ndrfidpbud39ltkdt0b8g76qkn.apps.googleusercontent.com',
  workerOrigin: 'https://postool.emn178.workers.dev',
  tiktokClientKey: 'sbawpzmdat5fhoir6e',
  // Must match the Worker's VIDEO_SIGN_KEY secret in deployed environments.
  workerVideoSignKey: '',
};
