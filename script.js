
'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let rollback = 10;
let service1;
let service2;

const isNumber = function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
};

const asking = function () {
    title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");

    // screenPrice = prompt("Сколько будет стоить данная работа?");

    do {
        screenPrice = +prompt("Сколько будет стоить данная работа?", 12345);
    } while (!isNumber(screenPrice));

    adaptive = confirm("Нужен ли адаптив на сайте?");

};


const getAllServicePrices = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        let total;

        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?", "Метрика");
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?", "Отправка формы");
        }
        total = +prompt("Сколько это будет стоить?", 1234);

        while (!isNumber(total)) {
            total = +prompt("Сколько это будет стоить?", 2345);
        }
        sum += total;
    }
    return sum;

}

const getFullPrice = function () {
    return screenPrice + allServicePrices;
};

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100));
};

const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
};

const showTypeof = function (variable) {
    console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "Даем скидку в 10%";
    } else if (price >= 15000) {
        return "Даем скидку в 5%";
    } else if (price >= 0) {
        return "Скидка не предусмотрена";
    } else {
        return "Что то пошло не так";
    }

};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeof(title);
showTypeof(screenPrice);
showTypeof(adaptive);

console.log("Сумма дополнительных тип услуг: ", allServicePrices);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log("Чистая прибыль после вычета отката: " + servicePercentPrice);
console.log("Стоимость верстки экранов " + screenPrice + " рублей" + "\n" +
    "Стоимость разработки сайта " + fullPrice + " рублей");