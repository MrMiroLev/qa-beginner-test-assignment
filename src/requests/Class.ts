import axios, { AxiosInstance } from 'axios';
import https from 'https';

export class Class {
    private readonly axiosClient: AxiosInstance;

    /**
     * Constructs an instance of Class.
     * @param {string} BASE_URL The base URL of the Class API.
     * @param {number} TIMEOUT (sec) The base timeout for Class API requests.
     */
    constructor(BASE_URL: string, TIMEOUT: number) {
        const agent = new https.Agent();
        this.axiosClient = axios.create({ baseURL: BASE_URL, timeout: TIMEOUT * 1000, httpsAgent: agent });
    }

    /**
     * Fetches the /posts/1 data from the Class API.
     * @returns A promise that resolves to the request.
     * @throws {Error} Will throw an error if the request fails.
     */
    async getPosts1() {
        try {
            const response = await this.axiosClient.get(`/posts/1`);
            return response.data;
        } catch (error) {
            console.error('[class][getPosts1] Error:', error.message);
            throw new Error(error.message);
        }
    }
}
