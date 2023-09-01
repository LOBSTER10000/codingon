const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

// TODO: 라우터 정의
// localhost:PORT / 기본주소

router.get('/', controller.index);
router.get('/players', controller.getPlayers);
router.get('/players/:player_id', controller.getPlayers);
router.post('/players', controller.postPlayers);
router.patch('/players/:player_id/team', controller.updatePlayers);
router.delete('/players/:player_id', controller.deletePlayers);

// 팀관련 router
router.get('/teams', controller.selectTeams);
router.get('/teams/:team_id', controller.selectTeamOne);
router.get('/teams/:team_id/players', controller.selectTeamPlayer);
module.exports = router;
