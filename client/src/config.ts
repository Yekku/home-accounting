export class Config {

    public static getApiUrl() {
        const environment = window.location.host;
        let endPoint: string;

        switch (environment) {
          case 'localhost:4200':
            endPoint = 'http://localhost:5001/';
            break;
          default:
            endPoint = '/';
            break;
        }
        return endPoint;
    }
}
