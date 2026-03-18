import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.quantumwebdynamics.medisynclabs.dev',
  appName: 'MediSyncLabs Dev',
  webDir: 'dist',

  server: {
    url: 'http://192.168.1.127:8056',
    cleartext: true,
    allowNavigation: [
      '192.168.1.127',
      '*.medisynclabs.ca',
      'medisynclabs.ca',
      'www.medisynclabs.ca'
    ]
  },

  ios: {
    backgroundColor: '#0d6efd'
  },

  plugins: {
    SplashScreen: {
      backgroundColor: '#0d6efd',
      launchAutoHide: true,
      showSpinner: false
    }
  }
};

export default config;