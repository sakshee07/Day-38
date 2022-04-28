const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS =8
const WAGE_PER_HOURS = 20
const NUM_OF_WORKING_DAYS = 10
const MAX_HRS_IN_MONTH = 100

function getWorkingHours(empCheck) {
    switch(empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS
        case IS_FULL_TIME:
            return FULL_TIME_HOURS
        default:
            return 0        
    }
}

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOURS
}

let totalEmpHrs = 0
let totalWorkingDays = 0
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++
    let empCheck = Math.floor(Math.random() *10) %3
    let empHrs = getWorkingHours(empCheck)
    totalEmpHrs += empHrs
    empDailyWageArr.push(calcDailyWage(empHrs))

}
let empWage = calcDailyWage(totalEmpHrs)
console.log("total working Days :"+totalWorkingDays+" total Hourss :" + totalEmpHrs + " Employee Wage :"+empWage)

let totEmpWage = 0
function sum(dailyWage) {
    totEmpWage += dailyWage
}

function totalWage(totalWage, dailyWage) {
    return totalWage + dailyWage
}
console.log("Employee wage total reduced :" +empDailyWageArr.reduce(totalWage,0));