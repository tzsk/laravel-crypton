import axios from 'axios';
import Crypton from './crypton';

const VueCrypton = (key) => {
    return {
        install(Vue, options) {
            let cryptonite = Crypton(key).encrypt(axios);
            const settings = options ? options : {};

            Vue.prototype.$cryptonite = cryptonite;
            Vue.prototype.$http = axios(settings);
            Vue.prototype.$crypton = function() {
                let cryptonite = Crypton(key).encrypt(axios);
                Vue.prototype.$cryptonite = cryptonite;
            }
        }
    }
}

export default VueCrypton;