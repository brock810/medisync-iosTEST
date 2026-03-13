import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.quantumwebdynamics.medisynclabs',
  appName: 'MediSyncLabs',
  webDir: 'dist',

  server: {
    cleartext: false,
    allowNavigation: [
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