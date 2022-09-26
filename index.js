const userinfo = require ('./information');




var cowsay = require("cowsay");

console.log(cowsay.say({
    text : ` Hello, I am ${userinfo.name} and I am studying at ${userinfo.campus}`,
    e : "oO",
    T : "U "
}));
