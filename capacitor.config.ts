import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myNewApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
