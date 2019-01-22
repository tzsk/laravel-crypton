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
const key = 'Encryption Key in the Laravel End'; // env('APP_KEY')
// Encrypt request.
const cryptonite = Crypton(key).request().encrypt(axios);

// Encrypt response.
const cryptonite = Crypton(key).response().encrypt(axios);

// Encrypt both.
const cryptonite = Crypton(key).both().encrypt(axios);
// Alias -> You don't need to specify the both method.
const cryptonite = Crypton(key).encrypt(axios);

// Now the api request.
axios.post('http://example.com/api/something', {movie: 'Avengers: Endgame'}).then((response) => {
    console.log(response.data);
});
```

If the `crypton` middleware is applied in the above route then you can see the request or response being encrypted and decrypted in the `Developer Tools -> Network` tab. But if you look at the console you will see that the `response.data` is just a plain javascript object.

**Clear Encryption:**

If at any point in time you have file uploads or anything and you wish to disable the encryption or decryptioin then just call.

```js
cryptonite.clear();
```

Then after the action is done executing, you can again enable encryption the same way.

## Vue JS Plugin

If you are using Vue JS. Then there is already a Plugin Provided with this pakage. Follow the code below to know how to use it.

```js
import { VueCrypton } from 'laravel-crypton';

const key = 'Encryption Key in the Laravel End'; // env('APP_KEY')
Vue.use(VueCrypton(key), {
    // Any Axios Options
});
```

Now inside the vue components you can call.

```js
this.$http.post('http://example.com/api/something', {movie: 'Avengers: Endgame'}).then((response) => {
    console.log(response.data);
});

// Clear the encryption
this.$cryptonite.clear();

// Re-start encryption
this.$crypton();
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