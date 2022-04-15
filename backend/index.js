const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config()
const db = require('./database');
const json2xls = require('json2xls');
const isJSON = require('is-json');
const fs = require('fs');

try {
    db.query("create table if not exists Students(StudentName varchar(20), RollNo varchar(20), PhoneNumber varchar(13), Department varchar(20), Interests varchar(100), constraint pk_sname_rollno primary key(StudentName, RollNo))");
} catch (err) {
    console.log(err);
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(json2xls.middleware);

//display
app.get("/", async (req, res, next) => {
    try {
        const result = await db.query("select * from students");
        res.send(200, result.rows);
    } catch (err) {
        res.send(500, err);
    }
});

//insert
app.post("/post", async (req, res, next) => {
    try {
        const result1 = await db.query(`select StudentName from Students where StudentName='${req.body.StudentName}' and RollNo='${req.body.RollNo}';`);
        if (result1.rowCount) {
            res.send(200, { error: "Student already present" });
        } else {
            await db.query(`insert into Students values('${req.body.StudentName}','${req.body.RollNo}', '${req.body.PhoneNumber}', '${req.body.Department}', '${req.body.Interests}')`);
            res.send(200, { success: "true" });
        }
    } catch (err) {
        res.send(500, err);
    }
});

//export excel
app.get("/export", async (req, res, next) => {
    try {
        const result = await db.query("select * from Students;");
        var excelOutput = Date.now() + "output.xlsx";
        if (isJSON(JSON.stringify(result.rows))) {
            var xls = json2xls(result.rows);
            fs.writeFileSync(excelOutput, xls, 'binary');
            res.download(excelOutput, (err) => {
                if (err) {
                    fs.unlinkSync(excelOutput);
                    res.send(200, { error: "Couldn't download" });
                }
                fs.unlinkSync(excelOutput);
            });
        } else {
            res.send(200, { error: 'No Reccord' });
        }
    } catch (err) {
        res.send(500, err);
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));