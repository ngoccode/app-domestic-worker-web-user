const useGetToken = () => {
  const token = localStorage.getItem('token');
  const setToken = (value: string) => {
    localStorage.setItem('token', value);
  };
  return { token, setToken };
};
export { useGetToken };
