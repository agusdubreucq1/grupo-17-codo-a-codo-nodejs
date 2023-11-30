const mainController = {
    home: (req, res)=> res.send("home"),
    contact: (req, res)=> res.send("contact"),
    about: (req, res)=>res.send("about"),
    faqs: (req, res)=>res.send("faqs")
}

module.exports = mainController