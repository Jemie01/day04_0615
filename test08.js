// 비동기처리: async(에이싱크)
// try{ }catch()finally{}

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const fileOptions = async()=>{
    try{
        const data = await fs.readFile('./datas/lorem.txt', "utf-8")
        console.log("1. readFile: ", data);
        console.log("2. console.log ");
    }catch(err){
        console.log(err);
    }finally{
        // try 코드에서 에러 없이도 반드시 처리
        // catch 구문이 실행되도 반드시 처리
        console.log("finally 반드시 실행");
        // db.close
    }
}

fileOptions();