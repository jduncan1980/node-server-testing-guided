const server = require('./server');
const request = require('supertest');

describe('server,js', () => {
	it('should run in a testing environment', () => {
		expect(process.env.DB_ENV).toBe('testing');
	});

	// http status code, format of response, content of responses
	describe('GET /', () => {
		// it('should return 200', () => {
		// 	return request(server)
		// 		.get('/')
		// 		.then((res) => {
		// 			expect(res.status).toBe(200);
		// 		});
		// });

		it('should return 200', async () => {
			const res = await request(server).get('/');
			expect(res.status).toBe(200);
		});

		it('should return json', async () => {
			const res = await request(server).get('/');
			expect(res.type).toBe('application/json');
		});

		it('should return {api: "up"}', async () => {
			const res = await request(server).get('/');
			expect(res.body).toEqual({ api: 'up' });
		});
	});
});
