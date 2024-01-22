const useGetUser = () => {
  const userStorage = localStorage.getItem('user');
  let user: any;
  if (!userStorage) user = null;
  else user = JSON.parse(userStorage);

  const setUser = (value: any) => {
    localStorage.setItem('user', JSON.stringify(value));
  };

  const removeUser = () => {
    localStorage.removeItem('user');
  };
  return { user, setUser, removeUser };
};
export { useGetUser };
