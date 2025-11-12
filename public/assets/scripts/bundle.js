/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/*! exports provided: questions, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"questions\\\":{\\\"Jaki jest rozpoznawalny polski słodycz\\\":[null,{\\\"ans\\\":\\\"Ptasie Mleczko\\\",\\\"lp\\\":1,\\\"points\\\":33},{\\\"ans\\\":\\\"Prince Polo\\\",\\\"lp\\\":2,\\\"points\\\":22},{\\\"ans\\\":\\\"Delicje\\\",\\\"lp\\\":3,\\\"points\\\":19},{\\\"ans\\\":\\\"Krowki\\\",\\\"lp\\\":4,\\\"points\\\":12},{\\\"ans\\\":\\\"Mieszanka Krakowska\\\",\\\"lp\\\":5,\\\"points\\\":10}],\\\"Z czym kojarzymy święto niepodleglosci?\\\":[null,{\\\"ans\\\":\\\"Niepodleglosc / Wolnosc\\\",\\\"lp\\\":1,\\\"points\\\":26},{\\\"ans\\\":\\\"Flaga / Barwy bialo czerwona\\\",\\\"lp\\\":2,\\\"points\\\":21},{\\\"ans\\\":\\\"Hymn Mazurek Dabrowskiego\\\",\\\"lp\\\":3,\\\"points\\\":18},{\\\"ans\\\":\\\"Godlo Orzel bialy\\\",\\\"lp\\\":4,\\\"points\\\":10}],\\\"Co jest nam potrzebne, żeby dobrze się wyspać\\\":[null,{\\\"ans\\\":\\\"Lozko/Materac\\\",\\\"lp\\\":1,\\\"points\\\":35},{\\\"ans\\\":\\\"Ciemnosc/Noc\\\",\\\"lp\\\":2,\\\"points\\\":23},{\\\"ans\\\":\\\"Cisza\\\",\\\"lp\\\":3,\\\"points\\\":15},{\\\"ans\\\":\\\"Poduszka\\\",\\\"lp\\\":4,\\\"points\\\":12},{\\\"ans\\\":\\\"Koldra\\\",\\\"lp\\\":5,\\\"points\\\":7}],\\\"Popularne dania obiadowe w Brunstad\\\":[null,{\\\"ans\\\":\\\"Ziemniak\\\",\\\"lp\\\":1,\\\"points\\\":38},{\\\"ans\\\":\\\"Lazania\\\",\\\"lp\\\":2,\\\"points\\\":19},{\\\"ans\\\":\\\"Burger z szar. wieprzowina\\\",\\\"lp\\\":3,\\\"points\\\":18},{\\\"ans\\\":\\\"Kurczak curry\\\",\\\"lp\\\":4,\\\"points\\\":11},{\\\"ans\\\":\\\"tikka masala\\\",\\\"lp\\\":5,\\\"points\\\":9}],\\\"Wymien władce na polskim banknocie\\\":[null,{\\\"ans\\\":\\\"Kazimierz Wielki\\\",\\\"lp\\\":1,\\\"points\\\":35},{\\\"ans\\\":\\\"Wladyslaw Jagiello\\\",\\\"lp\\\":2,\\\"points\\\":23},{\\\"ans\\\":\\\"Mieszko I\\\",\\\"lp\\\":3,\\\"points\\\":15},{\\\"ans\\\":\\\"Boleslaw Chrobry\\\",\\\"lp\\\":4,\\\"points\\\":12},{\\\"ans\\\":\\\"Jan III Sobieski\\\",\\\"lp\\\":5,\\\"points\\\":7}]}}\");\n\n//# sourceURL=webpack:///./src/data.json?");

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const answerFieldFill = '... ... ... ... ... ... ... ... ... ... ... ... ...';\n\n/**\n * @param {int} number\n * @param {string} text\n * @param {int} points\n */\nfunction setAnswer(number, text, points) {\n  if (!document.querySelector(`[data-answer-num=\"${number}\"]`)) {\n    throw new Error('The HTML for the answer does not exist, ' + 'make sure the question number you provided is in a 1-6 range');\n  }\n  const textContainer = document.querySelector(`[data-answer-num=\"${number}\"] .text`);\n  const pointsContainer = document.querySelector(`[data-answer-num=\"${number}\"] .points`);\n  textContainer.innerHTML = fillAnswerField(removeDiacritics(text));\n  pointsContainer.innerHTML = points;\n}\n\n/**\n * Add display none to unused rows\n * @param {int} answerLength \n */\nfunction manageAnswerFields(answerLength) {\n  const rowFields = document.querySelectorAll(`[data-answer-num]`);\n  for (let i = 1; i <= 6; i++) {\n    if (i > answerLength && rowFields.item(i - 1) !== null) {\n      rowFields.item(i - 1).style.display = 'none';\n    } else {\n      rowFields.item(i - 1).style.display = 'block';\n    }\n  }\n}\n\n/**\n * @param {string} text\n * @returns {string}\n */\nfunction fillAnswerField(text) {\n  const fillLength = answerFieldFill.length;\n  if (fillLength < text.length) {\n    return text.substring(0, fillLength - 3) + '...';\n  } else {\n    return text + answerFieldFill.substring(text.length);\n  }\n}\n\n/**\n * @param {TEAMS} team\n * @param {int} points\n */\nfunction setPoints(team, points) {\n  const teamPointContainer = document.querySelector(`.${team}-team .team-points`);\n  if (!teamPointContainer) {\n    throw new Error('The HTML for the team you provided does not exist, you probably have a typo in a team name');\n  }\n  const currentPointsString = teamPointContainer.innerHTML;\n  const currentPointsNumb = parseInt(currentPointsString);\n  const sum = currentPointsNumb + points;\n  document.querySelector(`.${team}-team .team-points`).innerHTML = sum.toString();\n}\n\n/**\n * @param {TEAMS} team\n * @param {int} errorCnt\n */\nfunction setErrors(team, errorCnt) {\n  const errorIndicators = document.querySelectorAll(`.${team}-team .fail`);\n  if (!errorIndicators.length) {\n    throw new Error('The HTML for the team you provided does not exist, you probably have a typo in a team name');\n  }\n  for (let i = 0; i < errorIndicators.length; i++) {\n    if (i < errorCnt) {\n      errorIndicators[i].className = 'fail active';\n    } else {\n      errorIndicators[i].className = 'fail';\n    }\n  }\n}\n\n/**\n * @param {string} text\n */\nfunction setQuestion(text) {\n  document.querySelector('.question').innerHTML = removeDiacritics(text);\n}\n\n/**\n * @param {string} input\n * @returns {string}\n */\nfunction removeDiacritics(input) {\n  return input.replace(/\\u0142/g, \"l\").normalize('NFKD').replace(/[^\\w\\s.-_\\/]/g, '');\n}\n\n/**\n * Clear game board\n */\nfunction clearBoard() {\n  const elements = document.querySelectorAll('[data-answer-num]');\n  for (let i = 0; i < elements.length; i++) {\n    elements.item(i).querySelector('span.text').innerHTML = answerFieldFill;\n    elements.item(i).querySelector('span.points').innerHTML = '0';\n  }\n  this.setErrors('blue', 0);\n  this.setErrors('red', 0);\n}\n/**\n * @param {string} teamName \n */\nfunction finishGame(teamName) {\n  const winner = document.querySelector('.winner');\n  // if (teamName === \"blue\"){\n  //     teamName = \"Damy niepodleglosci\";\n  // }\n  // if (teamName === \"red\"){\n  //     teamName = \"Kowalscy\";\n  // }\n  winner.innerHTML = `Wygrala druzyna ${teamName}`;\n  winner.style.display = 'block';\n}\n/**\n * @param {string} status \n */\nfunction recordButton(status) {\n  const button = document.querySelector('#recordButton');\n  status === 'start' ? button.className = 'rec' : button.className = 'notRec';\n}\nmodule.exports = {\n  setAnswer,\n  fillAnswerField,\n  setPoints,\n  setErrors,\n  setQuestion,\n  removeDiacritics,\n  manageAnswerFields,\n  clearBoard,\n  finishGame,\n  recordButton\n};\n\n//# sourceURL=webpack:///./src/scripts/board.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _teams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teams */ \"./src/scripts/teams.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/scripts/board.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_board__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _speech__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./speech */ \"./src/scripts/speech.js\");\n/* harmony import */ var _speech__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_speech__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../data.json */ \"./src/data.json\");\nvar _data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../data.json */ \"./src/data.json\", 1);\n/* harmony import */ var _model_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/game */ \"./src/scripts/model/game.js\");\n/* harmony import */ var _model_team__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/team */ \"./src/scripts/model/team.js\");\n/* harmony import */ var _model_questionStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/questionStore */ \"./src/scripts/model/questionStore.js\");\n\n\n\n\n\n\n\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setAnswer(1, '', 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setAnswer(2, '', 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setAnswer(3, '', 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setAnswer(4, '', 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setAnswer(5, '', 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setAnswer(6, '', 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setPoints(_teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BLUE, 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setPoints(_teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RED, 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setErrors(_teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RED, 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setErrors(_teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BLUE, 0);\nconst game = new _model_game__WEBPACK_IMPORTED_MODULE_4__[\"default\"]([new _model_team__WEBPACK_IMPORTED_MODULE_5__[\"default\"](_teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BLUE), new _model_team__WEBPACK_IMPORTED_MODULE_5__[\"default\"](_teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RED)], new _model_questionStore__WEBPACK_IMPORTED_MODULE_6__[\"default\"](_data_json__WEBPACK_IMPORTED_MODULE_3__[\"questions\"]));\n_speech__WEBPACK_IMPORTED_MODULE_2___default.a.loadGrammar(game.getRound().getQuestion().getAnswersWords());\ndocument.querySelectorAll('.correct_answer').forEach(button => {\n  button.addEventListener('click', function () {\n    const question_result = this.dataset.correctAnswerNum;\n    if (question_result) {\n      let resultTextAnswer;\n      if (question_result === 'next') {\n        game.getRound().finishRound(game);\n      } else if (question_result === 'switch') {\n        game.switchCurrentTeam();\n      } else if (question_result === 'start') {\n        game.startGame();\n      } else if (question_result === 'wrong') {\n        resultTextAnswer = \"aaaaa\";\n      } else if (question_result === 'wrongsound') {\n        const audio = new Audio(\"/public/assets/sounds/bad.mp3\");\n        audio.play();\n      } else {\n        const question_index = parseInt(question_result);\n        const current_question = game.questionsStore.current_round;\n        resultTextAnswer = game.questionsStore.questions[current_question].answers[question_index].ans;\n      }\n      if (resultTextAnswer) {\n        game.handlePlayerAnswer(resultTextAnswer.toLowerCase());\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/model/answer.js":
/*!*************************************!*\
  !*** ./src/scripts/model/answer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Answer; });\nclass Answer {\n  constructor(answer) {\n    this.ans = answer.ans;\n    this.lp = answer.lp;\n    this.points = answer.points;\n  }\n}\n\n//# sourceURL=webpack:///./src/scripts/model/answer.js?");

/***/ }),

/***/ "./src/scripts/model/game.js":
/*!***********************************!*\
  !*** ./src/scripts/model/game.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round */ \"./src/scripts/model/round.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../board */ \"./src/scripts/board.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_board__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Game {\n  /*\n  * @param teams = []\n  * @param questions QuestionStore\n  */\n  constructor(teams, questionsStore) {\n    this.teams = teams;\n    this.questionsStore = questionsStore;\n    this.roundCount = 1;\n    this.round = new _round__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.questionsStore.getRandomQuestion());\n    this.setRandomTeam();\n  }\n  startNewRound() {\n    this.switchCurrentTeam();\n    this.resetTeamsErrors();\n    this.roundCount++;\n    this.round = new _round__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.questionsStore.getRandomQuestion());\n  }\n  resetTeamsErrors() {\n    for (let team of this.teams) {\n      team.resetErrors();\n    }\n  }\n\n  /**\n   * @param {string} playerAnswer \n   */\n  handlePlayerAnswer(playerAnswer) {\n    const result = this.resolvePlayerAnswer(playerAnswer);\n    const currentTeam = this.getCurrentTeam();\n    switch (result.status) {\n      case true:\n        {\n          this.round.setBoardAnswer(result.answer, this);\n          break;\n        }\n      case false:\n        {\n          this.round.setBoardError(currentTeam, this);\n          break;\n        }\n      default:\n        {\n          throw new Error('Result have only true of false status');\n        }\n    }\n  }\n  /**\n   * @param {string} playerAnswer \n   */\n  resolvePlayerAnswer(playerAnswer) {\n    const answer = this.round.getQuestion().getAnswers().find(answer => {\n      return answer.ans.toLowerCase() === _board__WEBPACK_IMPORTED_MODULE_1___default.a.removeDiacritics(playerAnswer);\n    });\n    return answer !== undefined ? {\n      answer,\n      status: true\n    } : {\n      answer: null,\n      status: false\n    };\n  }\n  startGame() {\n    const audio = new Audio(\"/public/assets/sounds/intro-familiada.mp3\");\n    audio.play();\n  }\n  getQuestionsStore() {\n    return this.questionsStore;\n  }\n  switchCurrentTeam() {\n    this.setCurrentTeam(this.teams.find(team => team.getName() !== this.currentTeam).name);\n  }\n  setRandomTeam() {\n    this.setCurrentTeam(this.teams[Math.round(Math.random())].name);\n  }\n  setCurrentTeam(teamName) {\n    this.currentTeam = teamName;\n    const currTeamContainer = document.querySelector('.current-team');\n    if (currTeamContainer) {\n      if (teamName === \"blue\") teamName = \"Damy niepodleglosci\";\n      if (teamName === \"red\") teamName = \"Kowalscy\";\n      currTeamContainer.innerHTML = teamName;\n    }\n  }\n  getCurrentTeam() {\n    return this.teams.find(team => team.getName() === this.currentTeam);\n  }\n  getRound() {\n    return this.round;\n  }\n  getTeams() {\n    return this.teams;\n  }\n  getRoundCount() {\n    return this.roundCount;\n  }\n}\n\n//# sourceURL=webpack:///./src/scripts/model/game.js?");

/***/ }),

/***/ "./src/scripts/model/question.js":
/*!***************************************!*\
  !*** ./src/scripts/model/question.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Question; });\nclass Question {\n  constructor(name, answers) {\n    this.name = name;\n    this.answers = answers.filter(answer => answer);\n  }\n  getName() {\n    return this.name;\n  }\n  getAnswers() {\n    return this.answers;\n  }\n  getAnswersWords() {\n    return this.answers.map(answer => answer.ans);\n  }\n}\n\n//# sourceURL=webpack:///./src/scripts/model/question.js?");

/***/ }),

/***/ "./src/scripts/model/questionStore.js":
/*!********************************************!*\
  !*** ./src/scripts/model/questionStore.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QuestionStore; });\n/* harmony import */ var _model_answer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/answer */ \"./src/scripts/model/answer.js\");\n/* harmony import */ var _model_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/question */ \"./src/scripts/model/question.js\");\n\n\nclass QuestionStore {\n  constructor(questions) {\n    this.questions = this.parseQuestions(questions);\n    this.current_round = 0;\n  }\n  parseQuestions(questions) {\n    const titles = Object.keys(questions);\n    const answers = Object.values(questions);\n    const parsedQuestions = [];\n    for (let i = 0; i < answers.length; i++) {\n      const parsedAnswers = answers[i].filter(answer => answer).map(answer => new _model_answer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](answer));\n      parsedQuestions.push(new _model_question__WEBPACK_IMPORTED_MODULE_1__[\"default\"](titles[i], parsedAnswers));\n    }\n    return parsedQuestions;\n  }\n  getRandomQuestion() {\n    return this.questions[this.current_round];\n  }\n  getRandomQuestionId() {\n    return Math.floor(Math.random() * (this.questions.length - 1 + 1) + 1) - 1;\n  }\n}\n\n//# sourceURL=webpack:///./src/scripts/model/questionStore.js?");

/***/ }),

/***/ "./src/scripts/model/round.js":
/*!************************************!*\
  !*** ./src/scripts/model/round.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Round; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../board */ \"./src/scripts/board.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_board__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _answer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./answer */ \"./src/scripts/model/answer.js\");\n/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team */ \"./src/scripts/model/team.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ \"./src/scripts/model/game.js\");\n/* harmony import */ var _roundStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../roundStatus */ \"./src/scripts/roundStatus.js\");\n\n\n\n\n\n/**\n * Manage current question and board\n */\nclass Round {\n  constructor(question) {\n    this.right = 0;\n    this.status = _roundStatus__WEBPACK_IMPORTED_MODULE_4__[\"default\"].DEFAULT;\n    this.points = 0;\n    this.question = question;\n    _board__WEBPACK_IMPORTED_MODULE_0___default.a.setQuestion(this.question.getName());\n    _board__WEBPACK_IMPORTED_MODULE_0___default.a.manageAnswerFields(this.getQuestion().getAnswers().length);\n  }\n\n  /**\n   * @param {Answer} answer \n   * @param {Game} game\n   */\n  setBoardAnswer(answer, game) {\n    const audio = new Audio(\"/public/assets/sounds/good.mp3\");\n    audio.play();\n    setTimeout(() => {\n      _board__WEBPACK_IMPORTED_MODULE_0___default.a.setAnswer(answer.lp, answer.ans, answer.points);\n      this.right++;\n      this.points += answer.points;\n    }, 200);\n  }\n  /**\n   * @param {Team} team \n   * @param {Game} game\n   */\n  setBoardError(team, game) {\n    const audio = new Audio(\"/public/assets/sounds/bad.mp3\");\n    audio.play();\n    setTimeout(() => {\n      team.addError();\n      _board__WEBPACK_IMPORTED_MODULE_0___default.a.setErrors(team.getName(), team.getErrors());\n      if (this.status === _roundStatus__WEBPACK_IMPORTED_MODULE_4__[\"default\"].STOLEN) {\n        game.switchCurrentTeam();\n        game.getCurrentTeam().addPoints(this.points);\n        // this.startNewRound(game);\n      }\n      if (team.getErrors() === 3) {\n        game.switchCurrentTeam();\n        this.status = _roundStatus__WEBPACK_IMPORTED_MODULE_4__[\"default\"].STOLEN;\n      }\n    }, 300);\n  }\n  checkFinish() {\n    return this.question.getAnswers().length === this.right;\n  }\n\n  /**\n   * @param {Team} team \n   * @param {Game} game \n   */\n  finishRound(game) {\n    const audio = new Audio(\"/public/assets/sounds/next-round.mp3\");\n    audio.play();\n    if (game.getRoundCount() === 5) this.points *= 2;\n    game.getCurrentTeam().addPoints(this.points);\n    _board__WEBPACK_IMPORTED_MODULE_0___default.a.setPoints(game.getCurrentTeam().getName(), this.points);\n\n    // if (game.getCurrentTeam().getPoints() >= 400) {\n    //     this.finishGame(game.getCurrentTeam().getName());\n    //     return;\n    // }\n    const current_round = game.questionsStore.current_round;\n    if (current_round >= 4) {\n      let maxPoints = -Infinity;\n      let topTeamName = \"\";\n      const teams = document.querySelectorAll(\".team\");\n      teams.forEach(team => {\n        const pointsEl = team.querySelector(\".team-points\");\n        const nameEl = team.querySelector(\".name\");\n        if (pointsEl && nameEl) {\n          const points = parseInt(pointsEl.textContent.trim(), 10);\n          if (points > maxPoints) {\n            maxPoints = points;\n            topTeamName = nameEl.textContent.trim();\n          }\n        }\n      });\n      this.finishGame(topTeamName);\n      return;\n    }\n    this.goToNextRound(game, current_round);\n    this.startNewRound(game);\n  }\n  goToNextRound(game, current_round) {\n    game.questionsStore.current_round = current_round + 1;\n    const currRoundContainer = document.querySelector('.round-nr');\n    if (currRoundContainer) {\n      currRoundContainer.innerHTML = `${1 + current_round + 1}`;\n    }\n  }\n\n  /**\n   * @param {Game} game \n   */\n  startNewRound(game) {\n    _board__WEBPACK_IMPORTED_MODULE_0___default.a.clearBoard();\n    game.startNewRound();\n  }\n  /**\n   * @param {string} teamName \n   */\n  finishGame(teamName) {\n    _board__WEBPACK_IMPORTED_MODULE_0___default.a.finishGame(teamName);\n  }\n  getQuestion() {\n    return this.question;\n  }\n  getPoints() {\n    return this.points;\n  }\n  getStatus() {\n    return this.status;\n  }\n  getRight() {\n    return this.right;\n  }\n}\n\n//# sourceURL=webpack:///./src/scripts/model/round.js?");

/***/ }),

/***/ "./src/scripts/model/team.js":
/*!***********************************!*\
  !*** ./src/scripts/model/team.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Team; });\nclass Team {\n  constructor(name) {\n    this.name = name;\n    this.points = 0;\n    this.errors = 0;\n  }\n  addPoints(points) {\n    this.points += points;\n  }\n  addError() {\n    this.errors += 1;\n  }\n  resetErrors() {\n    this.errors = 0;\n  }\n  getName() {\n    return this.name;\n  }\n  getErrors() {\n    return this.errors;\n  }\n  getPoints() {\n    return this.points;\n  }\n}\n\n//# sourceURL=webpack:///./src/scripts/model/team.js?");

/***/ }),

/***/ "./src/scripts/roundStatus.js":
/*!************************************!*\
  !*** ./src/scripts/roundStatus.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * @enum {GAME_STATUS}\n */\nconst GAME_STATUS = {\n  DEFAULT: 'default',\n  STOLEN: 'stolen'\n};\nObject.freeze(GAME_STATUS);\n/* harmony default export */ __webpack_exports__[\"default\"] = (GAME_STATUS);\n\n//# sourceURL=webpack:///./src/scripts/roundStatus.js?");

/***/ }),

/***/ "./src/scripts/speech.js":
/*!*******************************!*\
  !*** ./src/scripts/speech.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;\nlet SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;\nlet SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;\nlet recognition = new SpeechRecognition();\nlet speechRecognitionList = new SpeechGrammarList();\nfunction loadGrammar(words) {\n  let grammar = `#JSGF V1.0; grammar colors; public <color> = ${words.join(' | ')} ;`;\n  speechRecognitionList.addFromString(grammar, 1);\n  recognition.grammars = speechRecognitionList;\n  recognition.lang = 'pl-PL';\n  recognition.interimResults = false;\n  recognition.maxAlternatives = 10;\n}\nfunction start() {\n  return new Promise((resolve, reject) => {\n    recognition.onspeechend = () => {\n      recognition.stop();\n    };\n    recognition.onnomatch = () => {\n      reject('No match');\n    };\n    recognition.onerror = event => {\n      reject('Error occurred in recognition: ' + event.error);\n    };\n    recognition.onresult = event => {\n      resolve(event.results);\n    };\n    recognition.start();\n  });\n}\nmodule.exports = {\n  loadGrammar,\n  start\n};\n\n//# sourceURL=webpack:///./src/scripts/speech.js?");

/***/ }),

/***/ "./src/scripts/teams.js":
/*!******************************!*\
  !*** ./src/scripts/teams.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * @enum {TEAMS}\n */\nconst TEAMS = {\n  BLUE: 'blue',\n  RED: 'red'\n};\nObject.freeze(TEAMS);\n/* harmony default export */ __webpack_exports__[\"default\"] = (TEAMS);\n\n//# sourceURL=webpack:///./src/scripts/teams.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./src/scripts/main.js ./src/styles/main.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/scripts/main.js */\"./src/scripts/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/styles/main.scss */\"./src/styles/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/main.js_./src/styles/main.scss?");

/***/ })

/******/ });