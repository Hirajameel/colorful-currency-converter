#! /usr/bin/env node
 
import inquirer from "inquirer";
import chalk from "chalk"

console.log(chalk.yellowBright.bold("\n \t Welcome To Code With Hira - Currency Converter\n"));
let exchange_rate: any = {
    "USD": 1, //base currency
    "EUR":0.9, //european currency (EURO)
    "JYP":113, //japanese currency (YAN)
    "CAD":1.3, //canadian dollar
    "AUD":1.65, //australlian dollar
    "PKR":277.70, // pakistani rupees
}
//prompt user to select currencies  to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]       
    },
    {
        name:"to_currency",
        type:"list",
        message:"select the currency to convert into:",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]

    },
    {
        name:"amount",
        type:"input",
        message:"Enter the Amount to convert:"
    }

]);

//perfom currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount*to_amount

///display the converted amount
console.log(`Converted Amount = ${chalk.greenBright(converted_amount.toFixed(2))}`);
