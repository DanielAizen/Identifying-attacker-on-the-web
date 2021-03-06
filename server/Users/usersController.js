import * as auth from './authinticate.js';
import * as sql from '../mysql_handler.js';

export const getAllUsers = (req, res) =>{
    //res.send(users);
    try{
        let q = `SELECT * FROM ${sql.USER_INFO}`
        console.log(q);
        sql.connection.query(q , (error, rows) =>{
            if (error) throw error;
            const myResponse = {"status": 201, "msg": "all users :", "result": rows}
            res.send(myResponse);
        });
    }catch{
        res.send({"status": 400, "msg": "Users were not found"});
    }
};

export const createNewUser = async (req , res) =>{
    try{
        const hasdPwd = await auth.genarate_hashPassword(req.body.password)
        const user = {name: req.body.first_name + req.body.last_name, password: hasdPwd };
        //let datetime = new Date(req.body.date_joined).toJSON().slice(0,10).replace(/-/g,'/');
        let datetime = new Date().toJSON().slice(0,10);
        console.log(datetime)
        let q = `INSERT INTO ${sql.USER_INFO} (first_name, last_name, email, password, role, date_joined ) VALUES ("${req.body.first_name}", "${req.body.last_name}", "${req.body.email}", "${hasdPwd}", "${req.body.role}", "${datetime}" )`
        console.log(q);
        sql.connection.query(q , (error, rows) =>{
            if (error) throw error;
            const myResponse = {"status": 201, "msg": "created new user", "result": rows}
            res.send(myResponse);
        });
    }catch{
        res.status(400).send();
    }
};

export const login = (req, res) => {
    const [username, password]  = [req.body.username, req.body.password];
    console.log(req.body);
    let q = `SELECT password,email from ${sql.USER_INFO} WHERE first_name='${username}'`;
    sql.connection.query(q, async (error, row) => {
        if (error) throw error;
        const data = row !== undefined ? JSON.parse(JSON.stringify(row)) : null;
        if (data.length > 0){
            const flag = await auth.compare_hasedPassword(``+password, ``+data[0]['password']);
            console.log(flag);
            if (flag) {
                const login_cookie = auth.genarate_token();
                res.json({'status': 200, "msg": "Login successfully", "result": login_cookie});
            } else {
                res.send({"status": 400, "msg": "User wasn't found 1"});
            }
        } else {
            res.send({"status": 400, "msg": "User wasn't found 2"});
        }
    });

};




