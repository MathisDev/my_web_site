var express =require('express')(),
    mailer = require("express-mailer");
    app = express();

app.use(express.logger());
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname,public)));
app.engin('html',swing.renderFile);
app.set('views',__dirname,'/views');
app.set('view enjine','html');

app.get('/',function(req, res) {
    res.render('index');
});

app.poste('/contact',function(req,res,next){
    mailer.extend(app, {
        from: req.body.email,
        host: smp.free.fr,
        secureConnection: false,
        port: 25,
        transportMetod: 'SMTP'
    });

    app.mailer.send('email', {
        to: 'mathis.mottet76@gmail.com',
        subject: req.body.subject,
        message: req.body.message
    }),function(err) {
        if (err) {
            console.log('On a une erreur');return;
        }
        res.send('Email Envoyer')
    }
});               


app.listen(3000);
console.log('App is running');


function compil() {
    let i = 0;
    let i1 = document.getElementById("input").value;
    let i2 = document.getElementById("input1").value;
    let i3 = document.getElementById("input2").value;
    let i4 = document.getElementById("input3").value;
    let i5 = document.getElementById("input4").value;

    let text1 = document.getElementById('text-input1');
    let text12 = document.getElementById('p-text1');

    let text2 = document.getElementById('text-input2');
    let text22 = document.getElementById('p-text2');

    let text3 = document.getElementById('text-input3');
    let text32 = document.getElementById('p-text3');


    let a = i1 + ' / '+ i2 + ' / ' +i3 + ' / '+ i4 + '/' + i5;
    i1 = 'm' + i1;
    i2 = 'm' + i2;
    i3 = 'm' + i3;
    i4 = 'm' + i4;
    i5 = 'm' + i5;


    if (i != 3) {
        /* --- */
        if (i1 === 'm') {
            text1.style.color = "red";
            text12.style.color = "red";
        }
        else {
            text1.style.color = "black";
            text12.style.color = "grey";
            i = i + 1;
        }
        /* --- */
        if (i2 === 'm') {
            text2.style.color = "red";
            text22.style.color = "red";
        }
        else {
            text2.style.color = "black";
            text22.style.color = "grey";
            i = i + 1;
        }
        /* --- */
        if (i3 === 'm') {
            text3.style.color = "red";
            text32.style.color = "red";
        }
        else {
            text3.style.color = "black";
            text32.style.color = "grey";
            i = i + 1;
        }
    }
    else {
       alert("Mail Envoyer");
    }
}
