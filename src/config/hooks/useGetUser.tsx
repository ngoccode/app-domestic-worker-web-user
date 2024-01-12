const useGetUser = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const setUser = (value: any) => {
    localStorage.setItem('user', JSON.stringify(value));
  };
  return { user, setUser };
};
export { useGetUser };
