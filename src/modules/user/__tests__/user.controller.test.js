import * as UserController from '../user.controller';
import {Users} from '../../../db/models';
import HTTPStatus from 'http-status';
import {buildNext, buildReq, buildRes, createNewUser, returnExpectations} from '../../../utils/test-helpers'


beforeEach(async () => {
    jest.resetAllMocks();
    await Users.destroy({ where: {} });
   
  })

 async function clearUsers (){
  await Users.destroy({ where: {} });
}




 describe('Registration  Test', () => {
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


    describe('Login  Test', () => {
    test('user login should return 200', async () => {
    //  createNewUser();
      let req1 = buildReq({body: {email: 'kwames@gmail.com',  username: 'kwamekert', password: 'password'}});
      let res1 = buildRes();
      let nxtFxn = buildNext();
      await UserController.register(req1, res1, nxtFxn);
      let req = buildReq({body: {username: 'kwamekert', password: 'password'}});
      let res = buildRes();
      await UserController.login(req, res, nxtFxn);
      returnExpectations(res, HTTPStatus.ACCEPTED);
    })

    test('user login should return 404', async () => {
      //  createNewUser();
        let req1 = buildReq({body: {email: 'kwames@gmail.com',  username: 'kwamekert', password: 'password'}});
        let res1 = buildRes();
        let nxtFxn = buildNext();
        await UserController.register(req1, res1, nxtFxn);
        let req = buildReq({body: {username: 'kwameket', password: 'password'}});
        let res = buildRes();
        await UserController.login(req, res, nxtFxn);
        returnExpectations(res, HTTPStatus.NOT_FOUND);
      })
  });



  describe('Fetch All Users', () => {
    test('user login should return 200', async () => {

    })

  })
