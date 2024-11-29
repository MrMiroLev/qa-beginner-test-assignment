import { Class } from '../requests/Class';
import fs from 'fs';
import path from 'path';

const getEnvValueForKey = (key: string) => {
  const filePath = path.join(__dirname, '../../env.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const parsedContent = JSON.parse(fileContent);
  return parsedContent[key];
};

describe('Class test', () => {
  let testClass: Class;
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const timeoutSec = 1;

  beforeEach(() => {
    testClass = new Class(baseUrl, timeoutSec);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Tests', () => {
    it('[TEST_1] should fetch post data successfully', async () => {
      const response = await testClass.getPosts1();

      expect(response.id).toEqual(getEnvValueForKey('EXPECTED_ID_TEST_1'));
    });

    it('[TEST_2] should fetch post data successfully', async () => {
      const response = await testClass.getPosts2();

      expect(response.id).toEqual(getEnvValueForKey('EXPECTED_ID_TEST_2'));
    });
  });
});
