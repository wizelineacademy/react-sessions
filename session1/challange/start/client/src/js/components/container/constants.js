const toDictionary = (dict, current) => {
  dict[current] = 'Loading...';
  return dict;
}
const FAKE_DATA = '123456789'.split('').reduce(toDictionary, {});

const ENDPOINT = 'http://127.0.0.1:4001';

export {
  FAKE_DATA,
  ENDPOINT,
};
