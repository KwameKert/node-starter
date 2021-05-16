import * as UserController from '../user.controller';
import {Users} from '../../../db/models';
import HTTPStatus from 'http-status';


beforeEach(() => {
    jest.resetAllMocks()
  })

afterEach(async ()=>{
  await Users.destroy({ where: {} });
})
function buildReq({...overides} = {}){
    const req = { body: {}, params: {}, ...overides };
    return req;
  }
  
  function buildNext(impl) {
    return jest.fn(impl).mockName('next')
  }
  
  function returnExpectations(response, statusCode){
  
    expect(response.send).toHaveBeenCalledTimes(1);
    expect(response.status).toHaveBeenCalledWith(statusCode)
  }


  function buildRes(overrides = {}) {
    const res = {
      send: jest.fn(() => res).mockName('send'),
      status: jest.fn(() => res).mockName('status'),
      ...overrides,
    }
    return res
    }

 describe('Initial Test', () => {
    test('user registration should return 200', async () => {

        let req = buildReq({body: {email: 'kwames@gmail.com',  username: 'kwamekert', password: 'password'}});
        let res = buildRes();
        let nxtFxn = buildNext();
    
        await UserController.register(req, res, nxtFxn);
       returnExpectations(res, HTTPStatus.CREATED);
      });


      test('user registration should return 400', async () => {

        let req = buildReq({body: {email: 'kwames@gmail.com',  username: 'kwamekert', password: 'password'}});
        let res1 = buildRes();
        let res2 = buildRes();
        let nxtFxn = buildNext();
    
        await UserController.register(req, res1, nxtFxn);
        await UserController.register(req, res2, nxtFxn);
      
       returnExpectations(res2, HTTPStatus.BAD_REQUEST);
      });
    });
