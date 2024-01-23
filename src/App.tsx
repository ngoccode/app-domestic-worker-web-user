import { ConfigProvider, App as AppConfig } from 'antd';
import './App.css';
import './assets/scss/index.scss';
import RouterComponent from 'routers/router';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF5B22',
        },
      }}
    >
      <AppConfig>
        <RouterComponent />
      </AppConfig>
    </ConfigProvider>
  );
}

export default App;
