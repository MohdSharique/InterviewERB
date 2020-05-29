const Utils = {
    parseRequestURL : () => {
        console.log(location.hash);
        let url = location.hash.slice(1).toLowerCase() || '/';
        
        let r = url.split('/')
        let request = {
            resource : null,
            id : null,
            verb : null
        }
        console.log(r[1]);
        console.log(r[2]);
        console.log(r[3]);

        request.resource = r[1]
        request.id = r[2]
        request.verb = r[3]

        return request;
    },

    sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export default Utils;