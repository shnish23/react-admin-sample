import './App.css';

import jsonServerProvider from 'ra-data-json-server';
import React from 'react';
import { Admin, ListGuesser, Resource } from 'react-admin';

import { createTheme } from '@material-ui/core/styles';

// import Dashboard from './dashboard';
const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

// データを取得するクライアントとエンドポイントのベースURLの初期化
const dataProvider = jsonServerProvider('http://localhost:4000');

// Resourceタグによってページが作成される。
// nameプロパティがベースURLの後に続く、取得したいデータのエンドポイントになる。
// この場合は 'http://localhost:4000/api/users' がセットされる
// listプロパティを付与することで取得したデータを形式で表示する
const App: React.FC = () => {
  return (
    <Admin theme={theme} dataProvider={dataProvider} >
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
}

export default App;