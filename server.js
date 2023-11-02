import express from "express";
import {readFile} from "fs/promises"
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const app=express();
const __dirname = dirname(fileURLToPath(import.meta.url));
let data;
 app.use(express.static(__dirname+'/public'));
 try{
     data= await readFile('data.json','utf8');
 }
 catch(error){
    console.log("gettting erron in reaing file")
 }
 app.get('/getData',(req,res)=>
 {
    res.json(data);
 })
 app.get('/',(req,res)=>
 {
    res.send("hi")
 })
app.listen(3001,()=>
{
    console.log("server working")
})