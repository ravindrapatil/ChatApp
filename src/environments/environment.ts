// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD2qEhT5KjWjx4Dti40rPm9Frdy0BkaatI',
    authDomain: 'chat-demo-95dcf.firebaseapp.com',
    databaseURL: 'https://chat-demo-95dcf.firebaseio.com',
    projectId: 'chat-demo-95dcf',
    storageBucket: '',
    messagingSenderId: '1083018553526'
  }
};
