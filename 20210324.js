const  http = require('http');
const fs = require('fs');
//const { url } = require('node:inspector');
const querystring=require('querystring')
var i=0;
const server =http.createServer((req,res)=> {
    if(req.url=="/")
    {
        res.statusCode=200;
        res.setHeader('Content-Type','text/html');
        fs.readFile("./form1.html",(err,fsData)=>{
            if(err){
                console.log("read file");
                throw err;
            }
            res.write(fsData);
            res.end();
        })
    }
    else if(req.url=="/favicon.ico")
    {
        res.statusCode=200;
        res.setHeader('Content-Type','text/img');
        fs.readFile("favico.ico",(err,fsData)=>{
            if(err){
                console.log("read file");
                throw err;
            }
            console.log("11");
            res.write(fsData);
            res.end();
        })
    }
    else if(req.url.slice(0,6)=="/input"){
        res.statusCode=200;
        let url1=req.url.split("?")
        //let url1query=url1[1].split("&")
       // let firstquery=url1query[0].split("=")
       // let secondquery=url1query[1].split("=")
        //let queryData=url1.parse(req.url,true).query;
        let obQuery=querystring.parse(url1[1]);

        res.setHeader('Content-Type','text/html');
        //res.write(url1[0]+"<br>");
        //res.write(url1[1]+"<br>");
        res.write(obQuery.submit1+"<br>")
        res.write(obQuery.name+"<br>")
        res.end("submit OK");
    }
    else{
        res.statusCode=200;
        res.setHeader('Content-Type','text/html');
        // res.write(req.url)
        res.write('<h1>cjh,you are the '+i+'th vistor');
        res.end();
    }
    
    i++;

});
server.listen(3000);