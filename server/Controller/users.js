import db from '../../config/db';
import ResponseObject from '.././Helpers/ResponseObject';
import Message from '.././Helpers/Message';
const env = require('../../env/development.js');

class Users {

    /**
     * Login verfification of user
     * @params string {email_id} required
     * @params string {password} required
     * @return Promise
     */
  
  
    static getDetails(req, res, next) {

        db.knex.select().from('users').then((data) =>{
            res.status(200).json(new ResponseObject(200,"",data));
        }).catch(e => next(e));
    }
}

export default Users;