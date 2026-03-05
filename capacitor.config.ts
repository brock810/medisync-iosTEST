import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.quantumwebdynamics.medisynclabs.dev',
  appName: 'MediSyncLabs DEV',
  webDir: 'dist',

  server: {
    cleartext: true,
    allowNavigation: [
      '192.168.1.127/manual_entry',
      'http://192.168.1.127:8056/manual_entry',
      '192.168.1.127:8056/manual_entry',
      '*.medisynclabs.ca',
      'medisynclabs.ca',
      'www.medisynclabs.ca',
    ],
  },

  ios: {
    backgroundColor: '#91bfff' // ✅ nicer than bright blue for that logo
  },

  plugins: {
    SplashScreen: {
      backgroundColor: '#80b5ff', // ✅ splash flash color
      launchAutoHide: true,
      showSpinner: false
    }
  }
};

export default config;