const useGetUser = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const setUser = (value: any) => {
    localStorage.setItem('user', JSON.stringify(value));
  };

  const removeUser = () => {
    localStorage.removeItem('user');
  };
  return { user, setUser, removeUser };
};
export { useGetUser };
