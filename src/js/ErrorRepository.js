export default class ErrorRepository {
  constructor() {
    this.errorMap = new Map([
      [404, 'Not Found'],
      [414, 'Request-URI Too Long'],
      [505, 'HTTP Version Not Supported (Experimental)'],
    ]);
  }

  translate(code) {
    return this.errorMap.get(code) || 'Unknown error';
  }
}
