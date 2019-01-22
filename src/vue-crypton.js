import axios from 'axios';
import Crypton from './crypton';

const VueCrypton = (key) => {
    return {
        install(Vue, options) {
            const settings = options ? options : {};
            let instance = axios.create(settings);
            let cryptonite = Crypton(key).encrypt(instance);

            Vue.prototype.$cryptonite = cryptonite;
            Vue.prototype.$http = instance;
            // Vue.prototype.$crypton = function() {
            //     let cryptonite = Crypton(key).encrypt(axios);
            //     Vue.prototype.$cryptonite = cryptonite;
            // }
        }
    }
}

export default VueCrypton;