# Laravel Crypton

It is a js helper for the `tzsk/crypton`. This encrypts the request JSON payload and also Decrypts the Laravel encrypted string to normal javascript object.

This is built, so you don't have to worry about the encryption and decryption while sending data and matching the same encryption procedure as Laravel has, and you just focus on your own logic.

**Recommendation:** It is best to use it in the production because the encrypted request response will be hard to debug.

**NOTE: IT DOES NOT SUPPORT FILE UPLOAD/STREAM REQUEST OR DOWNLOAD/STREAM RESPONSE**


## Installation

If you are using any javascript framework the you should use the `npm` package.

```bash
$ npm install --save laravel-crypton
```

Or if you are not using any javascript framework then use the following link in your script `src`:

```html
<script src="https://unpkg.com/laravel-crypton@latest/dist/crypton.min.js"></script>
```

## Usage

If you are using any javascript framework then import it.

```js
import axios from 'axios';
import { Crypton } from 'laravel-crypton';
```

Otherwise just use it as explained below

```js
var key = 'Encryption Key in the Laravel End'; // env('CRYPTON_KEY')

// Now create 2 different axios instance.
var Http = axios.create(...);

var Https = axios.create(...);
Crypton(key).encrypt(Https);

// Encrypt request.
Crypton(key).request().encrypt(axiosInstance);

// Encrypt response.
Crypton(key).response().encrypt(axiosInstance);

// Encrypt both.
Crypton(key).both().encrypt(axiosInstance);
// Alias -> You don't need to specify the both method.
Crypton(key).encrypt(axiosInstance);

// Encrypted XHR call.
Https.post('http://example.com/api/something', {movie: 'Avengers: Endgame'}).then((response) => {
    console.log(response.data);
});

// Plain XHR call.
Http.post('http://example.com/api/something', {movie: 'Avengers: Endgame'}).then((response) => {
    console.log(response.data);
});
```

If the `crypton` middleware is applied in the above route then you can see the request or response being encrypted and decrypted in the `Developer Tools -> Network` tab. But if you look at the console you will see that the `response.data` is just a plain javascript object.

## Standalone

You can also use the encrypter only to encrypt or decrypt. After importing the script tag.

```js
let crypt = new Encrypter(key); // Key is the crypton key 'base64:...'

// Then you have the basic methods
crypt.encrypt(param); // Param: any

crypt.decrypt(param); // Param: string
```

## Vue JS Plugin

If you are using Vue JS. Then there is already a Plugin Provided with this pakage. Follow the code below to know how to use it.

```js
import { VueCrypton } from 'laravel-crypton';

const key = 'Encryption Key in the Laravel End'; // env('CRYPTON_KEY')
Vue.use(VueCrypton(key), {
    // Any Axios Options
});
```

Now inside the vue components you can call.

```js
// Encrypted XHR call.
this.$https.post('http://example.com/api/something', {movie: 'Avengers: Endgame'}).then((response) => {
    console.log(response.data);
});

// Plain XHR call.
this.$http.post('http://example.com/api/something', {movie: 'Avengers: Endgame'}).then((response) => {
    console.log(response.data);
});
```

## Change log

Please see [CHANGELOG](changelog.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](contributing.md) for details.

## Security

If you discover any security related issues, please email mailtokmahmed@gmail.com instead of using the issue tracker.

## Credits

- [Kazi Mainuddin Ahmed][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](license.md) for more information.

[link-author]: https://github.com/tzsk
[link-contributors]: ../../contributors