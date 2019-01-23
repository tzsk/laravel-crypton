import axios from 'axios';
import Crypton from './crypton';

const VueCrypton = (key) => {
    return {
        install(Vue, options) {
            const settings = options ? options : {};
            Vue.prototype.$http = axios.create(settings);

            let instance = axios.create(settings);
            Vue.prototype.$cryptonite = Crypton(key).encrypt(instance);
            Vue.prototype.$https = instance;
        }
    }
}

export default VueCrypton;