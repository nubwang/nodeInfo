

// const fs = require('fs');
// fs.rmdir('./text.txt',(err)=>{
//     console.log('!done')
// })

let test = ()=>{
    new Promise((resolve,reject)=>{
        let Data = new Date();
        console.log('222222',Data)
        resolve('z');
    }).then((res)=>{
        console.log(res,'1111111111')
        return 'x'
    }).then((res)=>{
        console.log(res,'6666666')
        return 'y'
    }).then((res)=>{
        console.log(res,'7777777777')
    }).then((res)=>{
        console.log(res,'00000000')
    })
}

test();
