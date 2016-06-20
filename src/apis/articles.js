import pregnancy from './pregnancy.json';

export default {
    get: (key) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                switch (key) {
                    case 'pregnancy' :
                        resolve(pregnancy);
                        break;

                    default:
                        reject({error: `file not found: ${key}`});
                }
            }, 800);
        });
    }
};
