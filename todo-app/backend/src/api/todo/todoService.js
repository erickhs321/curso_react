const Todo = require('./todo')
Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true, runValidators: true}) //no update retornar registro atualizado, rodar validações

//exportando Todo com a api funcionando
module.exports = Todo