const request = require('supertest');
const app = require('./server').app;
const expect = require('expect');

describe('Server', () => {
    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    });
                })
                .end(done);
        });
    });
    describe('GET /users', () => {
        /**
         * Supertest only asserts === but if you pass a function to expect
         * you can then use expect library to make your custom assertions
         */
        it('should return you in a list of users', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude(
                        {
                            name: 'Fred',
                            age: 30
                        }
                    );
                })
                .end(done);
        });
    });
});

