import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/main.scss';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Chào mừng bạn đến với dự án của chúng tôi!</h2>
      </main>
      <Footer />
    </div>
  );
};

export default App;
