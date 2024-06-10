import ErrorRepository from '../ErrorRepository';

const errorsArray = new ErrorRepository();

test('Ошибка 404 - success', () => {
  expect(errorsArray.translate(404)).toBe('Not Found');
});

test('Ошибка 414 - success', () => {
  expect(errorsArray.translate(414)).toBe('Request-URI Too Long');
});

test('Ошибка 505 - success', () => {
  expect(errorsArray.translate(505)).toBe('HTTP Version Not Supported (Experimental)');
});

test('Ошибка 412 - false', () => {
  expect(errorsArray.translate(412)).toBe('Unknown error');
});
