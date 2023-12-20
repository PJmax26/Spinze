import React from 'react';
import './ComingSoon.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';

const ComingSoon = ({ showSidebar, active, closeSidebar }) => {
  return (
    <div className="coming-soon-container">
      <Sidebar active={active} closeSidebar={closeSidebar} />
      <Navbar showSidebar={showSidebar} />
      <h1>Coming Soon</h1>
      <p>We're working hard to bring you something amazing. Stay tuned!</p>
      <P>Get ready for a groundbreaking addition to our platform! 📈 Our upcoming Forex trading service brings you the opportunity to let us handle the trading for you, with profits delivered within 24 hours.</P>
        <P>  Deposit: Start with a minimum investment of R200.
    Sit Back: Let our automated trading system work its magic.
    Profit: Enjoy your earnings delivered straight to your account within 24 hours.</P>
      <div className="loading-spinner"></div>
    </div>
  );
};

export default ComingSoon;
