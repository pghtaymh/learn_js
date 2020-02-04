'use strict'

var money;
var time;
var mandatoryExpenseItem;
var howMuchWillItCost;
var appData, expenses;

money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите доту в формате YYYY-MM-DD");

mandatoryExpenseItem = prompt("Введите обязательную статью расходов в этом месяце: ");
howMuchWillItCost = +prompt("Во сколько обойдется?");
expenses = {
    mandatoryExpenseItem: howMuchWillItCost
};

appData = {
    budget: money,
    timeData: time,
    expenses: "",
    optionalExpenses: "",
    income: "",
    savings: false
};