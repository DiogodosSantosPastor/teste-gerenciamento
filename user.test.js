const { addUser, getUser, countActiveUsers, resetUsers } = require('./user');

beforeEach(() => {
  resetUsers();
});

test('adiciona um usuário', () => {
  const user = { id: 1, name: 'João', active: true };
  addUser(user);
  expect(getUser(1)).toEqual(user);
});

test('retorna as informações do usuário', () => {
  const user = { id: 2, name: 'Maria', active: false };
  addUser(user);
  const retrievedUser = getUser(2);
  expect(retrievedUser.name).toBe('Maria');
  expect(retrievedUser.active).toBe(false);
});

test('conta o número de usuários ativos', () => {
  addUser({ id: 1, name: 'João', active: true });
  addUser({ id: 2, name: 'Maria', active: false });
  addUser({ id: 3, name: 'Ana', active: true });
  expect(countActiveUsers()).toBe(2);
});
