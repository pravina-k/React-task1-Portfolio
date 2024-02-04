import React from 'react';

const Home = () => {
  return (
    <>
      <div className='home'>
        <h1>Hello, I'm Pravina</h1>
        <p>  Welcome to my portfolio! I am a Computer Science Engineering student with a passion for web development and a keen interest in data structures.</p>
       
        <p>On this platform, you will find a showcase of my web development projects, demonstrating my skills in HTML, CSS, JavaScript, and various web frameworks. Additionally, explore my projects related to data structures, showcasing my analytical and algorithmic abilities.</p>
        
        <p>Feel free to navigate through my portfolio, explore my work, and learn more about my journey in the world of technology. Let's connect and explore the possibilities together!</p>
        <p>Let's build something amazing together!</p>

        {/* Footer Section */}
        <footer className="footer">
          <p>Email: <a href="mailto:pravina@example.com">pravina@example.com</a></p>
          <p>Phone: +123 456 7890</p>
          <p>Github: <a href="https://github.com/yourgithubusername" target="_blank" rel="noopener noreferrer">github.com/yourgithubusername</a></p>
        </footer>
      </div>
      {/* Add any additional content or sections as needed */}
    </>
  );
};

export default Home;
