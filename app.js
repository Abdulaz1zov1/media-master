const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const MongoDBSession = require("connect-mongodb-session")(session);
const configSECURITY = require('./config/secret');
// Bazani ulash
const MongoURI = "mongodb://localhost:27017/media";
mongoose.connect(MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => { console.log(`Mongodb ishlayapti`) })
    .catch((e) => { console.log(e) })

// Sessiyani bazaga yozish
const store = new MongoDBSession({
    uri: MongoURI,
    collection: "MYSession",
});
// Sessiyani ishlatish
app.use(
    session({
        secret: configSECURITY.session_key,
        saveUninitialized: false,
        store: store,
        resave: false,

        cookie: {
            httpOnly: true,
            maxAge: configSECURITY.time,
            sameSite: "strict",
        },
    })
);

app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// Frontend qism uchun
app.use('/vendor', express.static(__dirname + 'public/vendor'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/fonts', express.static(__dirname + 'public/fonts'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/js', express.static(__dirname + 'public/js'))




app.use('/', require('./page/client'))
app.use('/admin', require('./page/admin'))

app.use('/api/homepage', require('./router/homepage'))
app.use('/api/age', require('./router/age'))
app.use('/api/author', require('./router/author'))
app.use('/api/category', require('./router/category'))
app.use('/api/country', require('./router/country'))
app.use('/api/janr', require('./router/janr'))
app.use('/api/language', require('./router/language'))
app.use('/api/tag', require('./router/tag'))
app.use('/api/year', require('./router/year'))
app.use('/api/kino', require('./router/kino'))
app.use('/api/season', require('./router/season'))
app.use('/api/serial', require('./router/serial'))
app.use('/api/comment', require('./router/comment'))
app.use('/api/reply', require('./router/reply'))
app.use('/api/slider', require('./router/slider'))
app.use('/api/filter', require('./router/filter'))
app.use('/api/contact', require('./router/contact'))
app.use('/api/user', require('./router/user'))


console.log("Hello world")



app.listen(3000, () => {
    console.log('Server ishlayapti')
})