// TODO: 컨트롤러
const { Player, Profile, Team } = require('../models');

exports.index = (req, res) => {
  res.render('index');
};

exports.getPlayers = async (req, res) => {
  try {
    const result = await Player.findOne({
      where: { player_id: req.params.player_id },
    });
    console.log(result);
    res.send(result);
  } catch (err) {
    console.error(err);
  }
};

exports.postPlayers = async (req, res) => {
  const { name, age, team_id } = req.body;
  try {
    const result = await Player.create({
      name: name,
      age: age,
      team_id: team_id,
    });
    console.log(result);
    res.send(result);
  } catch (err) {
    console.error(err);
  }
};

exports.updatePlayers = async (req, res) => {
  const player_id = req.params.player_id;
  const team_id = req.body.team_id;
  try {
    const result = await Player.update(
      {
        team_id: team_id,
      },
      {
        where: { player_id: player_id },
      }
    );

    console.log(result);
    res.send(result);
  } catch (err) {
    console.error(err);
  }
};

exports.deletePlayers = async (req, res) => {
  const { player_id } = req.params;
  try {
    const result = await Player.destroy({
      where: { player_id: player_id },
    });
    console.log(result);
    if (result === 1) {
      return res.send(true);
    } else {
      return res.send(false);
    }
  } catch (error) {
    console.error(error);
  }
};

//

exports.selectTeams = async (req, res) => {
  // 쿼리스트링 꺼내오기
  // sort키 꺼내면 name기준 오름차순 정렬
  // sort키 없ㅇ으면 findAll()
  const { sort, search } = req.query;
  const { Op } = require('sequelize');
  console.log(sort);
  try {
    if (sort === 'name_asc') {
      const result = await Team.findAll(
        {
          attributes: ['team_id', 'name'],
          order: [['name', 'ASC']],
        },
        {
          where: { sort: sort },
        }
      );
      console.log('있음');
      res.send(result);
    } else if (search) {
      // search key에 대한 값이 있다면
      const teams = await Team.findAll({
        attributes: ['team_id', 'name'],
        where: {
          name: { [Op.like]: `%${search}%` },
        },
      });
      res.send(teams);
      // select * from teams where name = '%KT%';
    } else {
      const result = await Team.findAll({
        attributes: ['team_id', 'name'],
      });
      console.log('없음');
      res.send(result);
    }
  } catch (error) {
    console.error(error);
  }
};

exports.selectTeamOne = async (req, res) => {
  const { team_id } = req.params;
  try {
    const result = await Team.findOne(
      {
        attributes: ['team_id', 'name'],
      },
      {
        where: { team_id: team_id },
      }
    );
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error(error);
  }
};

exports.selectTeamPlayer = async (req, res) => {
  const { team_id } = req.params;
  try {
    const result = await Team.findOne({
      where: { team_id: team_id },
      // include : 조인 역할
      // model Player모델정보를 같이 조인해준다.
      include: [{ model: Player }],
    });
    res.send(result);
  } catch (err) {
    console.error(err);
  }
};
