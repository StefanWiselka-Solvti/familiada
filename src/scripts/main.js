import TEAMS from './teams'
import board from './board';
import speech from './speech';
import { questions } from './../data.json';
import Game from './model/game';
import Team from './model/team';
import QuestionStore from './model/questionStore';

board.setAnswer(1, '', 0);
board.setAnswer(2, '', 0);
board.setAnswer(3, '', 0);
board.setAnswer(4, '', 0);
board.setAnswer(5, '', 0);
board.setAnswer(6, '', 0);

board.setPoints(TEAMS.BLUE, 0);
board.setPoints(TEAMS.RED, 0);

board.setErrors(TEAMS.RED, 0);
board.setErrors(TEAMS.BLUE, 0);

const game = new Game([new Team(TEAMS.BLUE), new Team(TEAMS.RED)], new QuestionStore(questions));

speech.loadGrammar(game.getRound().getQuestion().getAnswersWords());
document.querySelectorAll('.correct_answer').forEach(button => {
    button.addEventListener('click', function() {
    const question_result = this.dataset.correctAnswerNum;
    if (question_result){
        let resultTextAnswer;
        
        if (question_result === 'next'){
            game.getRound().finishRound(game)
        } else if (question_result === 'switch'){
            game.switchCurrentTeam()
        } else if (question_result === 'start'){
            game.startGame()
        } else if (question_result === 'wrong'){
            resultTextAnswer = "aaaaa";
        } else if (question_result === 'wrongsound'){
            const audio = new Audio("/public/assets/sounds/bad.mp3");
            audio.play();
        } else {
            const question_index = parseInt(question_result);
            const current_question = game.questionsStore.current_round;
            resultTextAnswer = game.questionsStore.questions[current_question].answers[question_index].ans;
        }
        if (resultTextAnswer){
            game.handlePlayerAnswer(resultTextAnswer.toLowerCase());
        }
    }
    });
});
