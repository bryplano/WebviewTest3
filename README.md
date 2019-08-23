## Reproducing The Issue

1. Run `npm install`
2. Run `ionic cordova platform add android`
3. Run `ionic cordova run android` (device attached)
4. When the app loads, open the Chrome DevTools on your desktop and inspect the running Ionic application
5. Click on the "Network" tab and clear any existing requests (easier to read)
6. Tap the "MAKE API CALL" button (this just makes an HTTP request to some url)
7. Inspect the request headers for the HTTP request under the "Network" tab
8. Notice that the custom `hostname` is not being set on Android

**Tested with a Google Pixel (physical device) running Android 9.0**
