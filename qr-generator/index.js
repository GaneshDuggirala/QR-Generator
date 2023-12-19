import inquirer from "inquirer";
import  qr from "qr-image";
import fs from "fs";
inquirer
    .prompt([
        {
            message : "Type the URL : ",
            name : "URL"
        }
    ])
    .then((answer)=>{
        const url=answer.URL;
        var qrimg=qr.image(url);
        qrimg.pipe(fs.createWriteStream("qr_img.png"));


        fs.writeFile("URL.txt",url,(err)=>{
            if (err) throw err;
            console.log("The file has been Saved");
        });



    })
    .catch((error)=>{
        if(error.isTtyError){

        }
        else{

        }
    });