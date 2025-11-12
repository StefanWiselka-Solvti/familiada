import board from '../board';
import Answer from './answer';
import Team from './team';
import Game from './game';
import ROUND_STATUS from '../roundStatus';
/**
 * Manage current question and board
 */
export default class Round {

    constructor(question) {
        this.right = 0;
        this.status = ROUND_STATUS.DEFAULT;
        this.points = 0;
        this.question = question;
        board.setQuestion(this.question.getName());
        board.manageAnswerFields(this.getQuestion().getAnswers().length);
    }

    /**
     * @param {Answer} answer 
     * @param {Game} game
     */
    setBoardAnswer(answer, game) {
        const audio = new Audio("/public/assets/sounds/good.mp3");
        audio.play();
        setTimeout(() => {
            board.setAnswer(answer.lp, answer.ans, answer.points);
            this.right++;
            this.points += answer.points;
        }, 200);        
    }
    /**
     * @param {Team} team 
     * @param {Game} game
     */
    setBoardError(team, game) {
        const audio = new Audio("/public/assets/sounds/bad.mp3");
        audio.play();
        setTimeout(() => {
            team.addError()
            board.setErrors(team.getName(), team.getErrors());
            
            if (this.status === ROUND_STATUS.STOLEN) {
                game.switchCurrentTeam();
                game.getCurrentTeam().addPoints(this.points);
                // this.startNewRound(game);
            }

            if (team.getErrors() === 3) {
                game.switchCurrentTeam();
                this.status = ROUND_STATUS.STOLEN;
            } 
        }, 300);  
    }

    
    checkFinish() {
        return this.question.getAnswers().length === this.right;
    }

    /**
     * @param {Team} team 
     * @param {Game} game 
     */
    finishRound(game) {
        const audio = new Audio("/public/assets/sounds/next-round.mp3");
        audio.play();
        if(game.getRoundCount() === 5) this.points *= 2;
        game.getCurrentTeam().addPoints(this.points);
        board.setPoints(game.getCurrentTeam().getName(), this.points);
        
        // if (game.getCurrentTeam().getPoints() >= 400) {
        //     this.finishGame(game.getCurrentTeam().getName());
        //     return;
        // }
        const current_round = game.questionsStore.current_round;
        if (current_round >= 4){
            let maxPoints = -Infinity;
            let topTeamName = "";
            const teams = document.querySelectorAll(".team");
            teams.forEach(team => {
                const pointsEl = team.querySelector(".team-points");
                const nameEl = team.querySelector(".name");

                if (pointsEl && nameEl) {
                    const points = parseInt(pointsEl.textContent.trim(), 10);
                    if (points > maxPoints) {
                        maxPoints = points;
                        topTeamName = nameEl.textContent.trim();
                    }
                }
            });
            this.finishGame(topTeamName);
            return
        }
        this.goToNextRound(game, current_round);
        this.startNewRound(game);
    }

    goToNextRound(game, current_round) {
        
        game.questionsStore.current_round = current_round + 1;
        const currRoundContainer = document.querySelector('.round-nr');
        if (currRoundContainer){
            currRoundContainer.innerHTML = `${1 + current_round + 1}`;
        }
    }

    /**
     * @param {Game} game 
     */
    startNewRound(game) {
        board.clearBoard();
        game.startNewRound();
    }
    /**
     * @param {string} teamName 
     */
    finishGame(teamName) {
        board.finishGame(teamName);
    }

    getQuestion() {
        return this.question;
    }

    getPoints () {
        return this.points;
    }

    getStatus() {
        return this.status;
    }

    getRight() {
        return this.right;
    }
}
