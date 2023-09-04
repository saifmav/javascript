(function () {
    function Question(question, answer, corrrect) {
        this.question = question,
            this.answer = answer,
            this.corrrect = corrrect

    }
    Question.prototype.displayeQues = function () {
        console.log(this.question);
        for (i = 0; i < this.answer.length; i++) {
            console.log(i + ':' + this.answer[i]);
        }

    }
    Question.prototype.checkAns = function (ans, callback) {
        var sc; 
        if (ans === this.corrrect) {
            console.log('you are answer is correct!!');
            sc = callback(true);
        } else {
            console.log('oops wrong answer!!');
            sc = callback(false);
        }
        this.displayeScore(sc);
    }
    Question.prototype.displayeScore = function (score) {
        console.log("your current score:" + score);
        console.log('----------------------------------'); 

    }


    var q1 = new Question('which class is better?', ['concept', 'others'], 0);
    var q2 = new Question('which languages do you likes', ['java', 'python', 'JS', 'Rect'], 2);
    var q3 = new Question('who is president of india', ['modi', 'ramnath'], 1);

   
    //closure
    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var Keep = score();

    

    //store question in array
    var questions = [q1, q2, q3];

    //recursion
    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        //console.log(questions[n]);//questions with arry
        questions[n].displayeQues();
        var answers = (prompt('please select correct answer'));
        if (answers !== 'exit') {
            questions[n].checkAns(parseInt(answers),Keep);
            nextQuestion();
        }
    }
    nextQuestion();

})()
//IIFE is used because our code should used in other code so variable wiil not match wiyh other code so it will be
//privat 
