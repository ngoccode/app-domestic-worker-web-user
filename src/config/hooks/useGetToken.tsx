const useGetToken = () => {
  const token = localStorage.getItem('token');
  const setToken = (value: string) => {
    localStorage.setItem('token', value);
  };
  const removeToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
  };
  return { token, setToken, removeToken };
};
export { useGetToken };
