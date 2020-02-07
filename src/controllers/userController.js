import User from '../models/User';

module.exports = {
  async index(req, res) {
    try {
      const users = await User.find();

      return res.send(users);
    } catch (e) {
      return res.status(400).json({
        errors: ['Problema ao buscar usuários'],
      });
    }
  },

  async store(req, res) {
    try {
      const { username, email, password } = req.body;

      if (!username || !email || !password) {
        return res.status(401).json({
          errors: ['Nenhum campo pode ficar em branco'],
        });
      }

      const findUsername = await User.findOne({ username });
      const findUserEmail = await User.findOne({ email });

      if (findUsername) {
        return res.status(400).json({
          errors: ['Usuário já em uso'],
        });
      }

      if (findUserEmail) {
        return res.status(400).json({
          errors: ['Email já em uso'],
        });
      }

      const user = await User.create({ username, email, password });

      return res.send(user);
    } catch (e) {
      return res.status(400).json({
        errors: ['Erro ao salvar usuário'],
      });
    }
  },

  async update(req, res) {
    try {
      const { username } = req.params;

      if (!username) {
        return res.status(400).json({
          errors: ['É necessário informar um username.'],
        });
      }

      const user = await User.findOne({ username });

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await user.updateOne(req.body);
      const newData = await User.findOne({ username });

      return res.json(newData);
    } catch (e) {
      return res.status(400).json({
        errors: ['Erro ao atualizar dados'],
      });
    }
  },

  async delete(req, res) {
    try {
      const { username } = req.params;

      if (!username) {
        return res.status(400).json({
          errors: ['É necessário informar um username.'],
        });
      }

      const user = await User.findOne({ username });

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await User.deleteOne(user);

      return res.send('Usuário deletado com sucesso');
    } catch (e) {
      return res.status(400).json({
        errors: ['Erro ao apagar dados'],
      });
    }
  },
};
