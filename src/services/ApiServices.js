class ApiServices {
    constructor() {
        this.API = 'https://api.github.com/search/users?q=a'
    }

    request(method,url) {
        return new Promise((resolve, reject) => {
            const httpRequest = new XMLHttpRequest();
            httpRequest.open(method, url);
            httpRequest.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(httpRequest.response);
                } else {
                    reject({
                        status: this.status,
                        statusText: httpRequest.statusText
                    });
                }
            };
            httpRequest.onerror = function () {
                reject({
                    status: this.status,
                    statusText: httpRequest.statusText
                });
            }
            httpRequest.send();
        })
    }
}

export default new ApiServices();