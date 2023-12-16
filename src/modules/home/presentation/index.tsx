import HomeProvider from './context/provider';
import UI from './views';

const HomePage = () => {
  return (
    <HomeProvider>
      <UI />
    </HomeProvider>
  );
};
export default HomePage;
