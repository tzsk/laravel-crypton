import axios from 'axios';
import Crypton from './crypton';

const VueCrypton = (key) => {
    return {
        install(Vue, options) {
            Crypton(key).encrypt(axios);
            const settings = options ? options : {};

            Vue.prototype.$http = axios(settings);
        }
    }
}

export default VueCrypton;