// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: loopback4-example-hello-world
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {HelloWorldApp} from './src/application';

(async function main() {
  const app = new HelloWorldApp();
  await app.start().catch(err => {
    console.error('Cannot start the application! ', err);
    process.exit(1);
  });
})();
