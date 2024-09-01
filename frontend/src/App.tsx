import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import PostPage from './pages/Post/PostPage';
import AdminPage from './pages/Admin/AdminPage';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => (
  <ThemeProvider>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/post/:id" component={PostPage} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
