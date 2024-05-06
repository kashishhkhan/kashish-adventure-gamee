#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
// Classes of Player & opponent
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        let fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
// Player Name & Opponent
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Enter your Name!"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your Opponent!",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
// Gather Data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    // Skeleton
    if (opponent.select == "Skeleton") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.blueBright(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent!",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.bgRedBright(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.greenBright(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.redBright.italic("Defeated today, but tomorrow's game is yours to conquer!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.greenBright(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bgMagenta.italic("Victory is yours! Well Played"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.yellowBright(`You Drink Health Portion Your Fuel Is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life...") {
            console.log(chalk.redBright.italic("Defeated today, but tomorrow's game is yours to conquer!"));
            process.exit();
        }
    }
    // Assassin
    if (opponent.select == "Assassin") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.blueBright(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent!",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.bgRedBright(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.greenBright(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.redBright.italic("Defeated today, but tomorrow's game is yours to conquer!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.greenBright(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bgMagenta.italic("Victory is yours! Well Played"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.yellowBright(`You Drink Health Portion Your Fuel Is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life...") {
            console.log(chalk.redBright.italic("Defeated today, but tomorrow's game is yours to conquer!"));
            process.exit();
        }
    }
    // Zombie 
    if (opponent.select == "Zombie") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.blueBright(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent!",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.bgRedBright(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.greenBright(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.redBright.italic("Defeated today, but tomorrow's game is yours to conquer!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.greenBright(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bgMagenta.italic("Victory is yours! Well Played"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.yellowBright(`You Drink Health Portion Your Fuel Is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life...") {
            console.log(chalk.redBright.italic("Defeated today, but tomorrow's game is yours to conquer!"));
            process.exit();
        }
    }
} while (true);
