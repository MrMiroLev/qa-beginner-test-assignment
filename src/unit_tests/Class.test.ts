import { Class } from '../requests/Class';
import MockAdapter from 'axios-mock-adapter';

describe('Class unit test', () => {
  let testClass: Class;
  let mock: MockAdapter;
  const mockBaseUrl = 'https://example.com';
  const mockTimeout = 5;

  beforeEach(() => {
    testClass = new Class(mockBaseUrl, mockTimeout);
    mock = new MockAdapter(testClass['axiosClient']);
  });

  afterEach(() => {
    mock.restore();
  });

  describe('getPosts1', () => {
    it('should fetch post data successfully', async () => {
      const mockPagesResponse = {
        data: {
          userId: 1,
          id: 1,
          title:
            'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        },
      };

      mock.onGet('/posts/1').reply(200, mockPagesResponse);

      const data = await testClass.getPosts1();
      expect(data).toEqual(mockPagesResponse);
    });

    it('should throw an error if the getPages request fails', async () => {
      mock.onGet('/api/pages').reply(500);

      await expect(testClass.getPosts1()).rejects.toThrow();
    });
  });

  describe('getPosts2', () => {
    it('should fetch post data successfully', async () => {
      const mockPagesResponse = {
        data: {
          userId: 1,
          id: 2,
          title: 'qui est esse',
          body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
        },
      };

      mock.onGet('/posts/2').reply(200, mockPagesResponse);

      const data = await testClass.getPosts2();
      expect(data).toEqual(mockPagesResponse);
    });

    it('should throw an error if the getPosts2 request fails', async () => {
      mock.onGet('/api/pages').reply(500);

      await expect(testClass.getPosts2()).rejects.toThrow();
    });
  });
});
