import axios from 'axios';
import Crypton from './crypton';

const VueCrypton = (key) => {
    return {
        install(Vue, options) {
            const settings = options ? options : {};
            function crypton() {
                let instance = axios.create(settings);
                let cryptonite = Crypton(key).encrypt(instance);

                Vue.prototype.$cryptonite = cryptonite;
                Vue.prototype.$http = instance;
            }
            crypton();
            
            Vue.prototype.$crypton = crypton;
        }
    }
}

export default VueCrypton;