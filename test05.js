const fs = require('fs');
const path = require('path');

const writePath = path.join(__dirname, "datas", "writeLorem.txt");g
// 쓰기할 때는 폴더가 부정확하면 error 발생 
fs.watchFile(writePath, "data 쓰기", err=>{
    console.log(err);
    console.log("1. write");
});

// 읽어와서 쓰기
// bash 쓰기 -> git과 연결할 수 있음~
// setting에서 terminal window를 null을 bash로 바꿔야 가능합니당