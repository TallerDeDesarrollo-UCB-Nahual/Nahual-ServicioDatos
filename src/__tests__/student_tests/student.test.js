const request = require("supertest");
const application = require("../../Application");
const students = [
    {
        'fullName': 'Student test',
        'statusName': 'Egresade',
        'birthDate': '1998-03-21',
        'mail': 'test@test.com',
        'cellphone': 777777,
        'nodeName': 'Test node',
        'graduationYear': 2010,
        'quarter': 2,
        'englishLevel': 'Basico',
        'firstJobName': 'Test job',
        'linkedin': 'linkedin.com/test',
        'isEmployed': true,
        'module': 'module test'
    },
    {
        'fullName': 'Student test2',
        'statusName': 'Egresade',
        'birthDate': '1998-03-21',
        'mail': 'test@test.com',
        'cellphone': 777777,
        'nodeName': 'Test node',
        'graduationYear': 2010,
        'quarter': 2,
        'englishLevel': 'Basico',
        'firstJobName': 'Test job',
        'linkedin': 'linkedin.com/test',
        'isEmployed': true,
        'module': 'module test'
    }
]
let testId;

describe('Test student resource', () => {
  test('It should response the POST a student', done => {
    request(application)
      .post('/api/students')
      .set('Content-Type', 'application/json')
      .send(students[0])
      .then(response => {
        testId = response.body.result.id;
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe('Test student resource', () => {
    test('It should response to UPDATE a student', done => {
        request(application)
            .put('/api/students/' + testId)
            .set('Content-Type', 'application/json')
            .send({fullName: 'Student test updated'})
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});

describe('Test student resource', () => {
    test('It should response to DELETE a student', done => {
        request(application)
            .del('/api/students/' + testId)
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});

describe('Test student resource', () => {
    test('It should response the POST a list of students', async (done) => {
      request(application)
        .post('/api/graduates')
        .set('Content-Type', 'application/json')
        .send(students)
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });
