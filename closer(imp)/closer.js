//challenge of closer
function interQues(job) {
    return function (name) {// this function will return and but store in memory old fuction pop
        if (job == 'tech') {
            console.log(name + ' how you can handle tech');

        } else if (job == 'engg') {
            console.log(name + ' tech can manage any');

        } else if (job == 'raw') {
            console.log(name + 'happy birthday raw');

        } else {
            console.log(name + 'default');

        }

    }
}
var intertech = interQues('tech');
intertech('saif');
//orS
var intertech = interQues('engg')('ravi')
// bas closer 
function retirment(retirAge) {
    var a = ' year you will reteried ';
    return function (yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirAge - age) + a);

    }
}
var retirIND = retirment(65);
console.log(retirIND(1995));