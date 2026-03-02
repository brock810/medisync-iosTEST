import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.quantumwebdynamics.medisynclabs.dev',
  appName: 'MediSyncLabs DEV',
  webDir: 'dist',
  server: {
    cleartext: true,
    allowNavigation: [
      '192.168.1.127',
      'http://192.168.1.127:8056',
      '192.168.1.127:8056',
      '*.medisynclabs.ca',
      'medisynclabs.ca',
      'www.medisynclabs.ca',
    ],
  },
};

export default config;