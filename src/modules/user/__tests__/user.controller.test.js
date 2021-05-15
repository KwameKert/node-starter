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


    test('user registration', async () => {

        let req = buildReq({body: {email: 'kwames@gmail.com',  username: 'kwamekert', password: 'password'}});
        let res = buildRes();
        let nxtFxn = buildNext();
    
        await UserController.register(req, res, nxtFxn);
       // expect(res.send).toHaveBeenCalledTimes(1);
       returnExpectations(res, HTTPStatus.CREATED);
      //  expect(1 + 1).toBe(2);
      });

// describe('Initial Test', () => {
//     it('should test that 1 + 1 === 2', () => {
//       expect(1+1).toBe(2)
//     })
//   })