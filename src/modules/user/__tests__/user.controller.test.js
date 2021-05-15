// import * as UserController from '../user.controller';
// import User from '../user.model';


// beforeEach(() => {
//     jest.resetAllMocks()
//   })


// function buildReq({...overides} = {}){
//     const req = { body: {}, params: {}, ...overides };
//     return req;
//   }
  
//   function buildNext(impl) {
//     return jest.fn(impl).mockName('next')
//   }
  
//   function returnExpectations(response, statusCode){
  
//     expect(response.send).toHaveBeenCalledTimes(1);
//     expect(response.status).toHaveBeenCalledWith(statusCode)
//   }


//   function buildRes(overrides = {}) {
//     const res = {
//       send: jest.fn(() => res).mockName('send'),
//       status: jest.fn(() => res).mockName('status'),
//       ...overrides,
//     }
//     return res
//     }


//     test('user registration', async () => {
//         User.create = jest.fn().mockResolvedValue({
//           email: 'kwame@gmail.com',
//           password: 'password',
//           username: 'kwamekert'
//         }
//     )
//         let req = buildReq({body: {email: 'kwame@gmail.com',  username: 'kwamekert', password: 'password'}});
//         let res = buildRes();
//         let nxtFxn = buildNext();
    
//         await UserController.register(req, res, nxtFxn);
//         expect(res.send).toHaveBeenCalledTimes(1);
//    //     returnExpectations(res, 200);
//       //  expect(1 + 1).toBe(2);
//       });

describe('Initial Test', () => {
    it('should test that 1 + 1 === 2', () => {
      expect(1+1).toBe(2)
    })
  })