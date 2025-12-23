employees=[
    {name:'Alice',salary:50000},
    {name:'Charlie',salary:60000},
    {name:'bob',salary:45000}
]

let calcBonuses = function(){
    totalBonus=((this.salary)/100)*10;
    console.log(`${this.name} earns ${this.salary} and got a bonus of ${totalBonus}`);
}

function calBonusSum(toCheck){
    sum=0;
    for(n in toCheck){  // n is index
        sum+=toCheck[n].salary;
    };
    return sum;
}

//Used Object Method Binding fucntion call
//Array methods like filter
function EmpBonusInfo(employees){
    const toCheck=employees.filter(emp => emp.salary>45000);
    const bonusGiven=calBonusSum(toCheck);
    for(let i=0;i<toCheck.length;i++)
    {
        calcBonuses.call(toCheck[i]);
    }
    console.log(`Total Bonus Given: ${bonusGiven}`);
}

EmpBonusInfo(employees);
