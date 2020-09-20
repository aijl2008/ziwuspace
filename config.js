let api = {
    "classify": "https://auction-api-inhouse.ziwuspace.com/api/classify/",
    "home": {
        "hot": "https://auction-api-inhouse.ziwuspace.com/api/hot/",
        "home": "https://auction-api-inhouse.ziwuspace.com/api/",
    },
    "specials": {
        "index": "https://auction-api-inhouse.ziwuspace.com/api/specials/",
        "show": "https://auction-api-inhouse.ziwuspace.com/api/specials/",
    },
    "works": {
        "index": "https://auction-api-inhouse.ziwuspace.com/api/works/",
        "show": "https://auction-api-inhouse.ziwuspace.com/api/works/",
    },
    "deposit": {
        "index": "https://auction-api-inhouse.ziwuspace.com/api/deposit/",
        "show": "https://auction-api-inhouse.ziwuspace.com/api/works/",
    },
    "auth": {
        "login": "https://auction-api-inhouse.ziwuspace.com/api/login/",
    },
    "pay": {
        "paing": "https://auction-api-inhouse.ziwuspace.com/api/login/"
    }
};

let wap = {
    order: "https://auction-api-inhouse.ziwuspace.com/wap/order/",
    bid: {
        agreement: "https://auction-api-inhouse.ziwuspace.com/wap/order/",
        notice: "https://auction-api-inhouse.ziwuspace.com/wap/order/",
        deposit: "https://auction-api-inhouse.ziwuspace.com/wap/deposit/note/"
    }
};

module.exports = {
    api,
    wap
};