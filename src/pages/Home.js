import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

function Home() {
  const backgroundImageUrl = "https://v.wpimg.pl/NzljNjdmYRsNCDhZSxZsDk5QbAMNT2JYGUh0SEtcfEJcEmEMDQErCAkaIUQDHzsKDR0-RBQBYRscA2EcVUIqEx8aIgsdQisXDg8qRVIOe01UCXtfSQsvT1lHelJQC2MbXA97R1Bddk1VCXhdAgl6Tk4X"; // Change this to your desired image URL

  return (
    <div style={{ ...styles.container, backgroundImage: `url(${backgroundImageUrl})` }}>
      <style>
        {`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes meteorAnimation {
          0% { transform: translateY(-100vh) translateX(50vw) rotate(45deg); opacity: 1; }
          100% { transform: translateY(100vh) translateX(-50vw) rotate(45deg); opacity: 0; }
        }
        
        .meteor {
          position: absolute;
          width: 3px;
          height: 40px;
          background: #f5e03c;
          opacity: 0.7;
          filter: blur(1px);
          animation: meteorAnimation 2s linear infinite;
        }

        /* ลวดลายไทย */
        .thai-pattern {
          background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Thai_pattern.svg/1280px-Thai_pattern.svg.png');
          background-size: cover;
          background-position: center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.1;
          pointer-events: none;
        }

        /* ฟอนต์ไทย */
        body {
          font-family: 'Sarabun', sans-serif;
        }
        `}
      </style>

      {/* ลวดลายไทยพื้นหลัง */}
      <div className="thai-pattern"></div>

      {[...Array(10)].map((_, i) => (
        <div key={i} className="meteor" style={{
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          animationDelay: `${Math.random() * 2}s`,
        }}></div>
      ))}

      <motion.div
        style={styles.homeBox}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={styles.title}>ยินดีต้อนรับสู่ MyShop</h1>
        <p style={styles.subtitle}>ร้านช้อปปิ้งออนไลน์สไตล์ไทย จัดเต็มทุกความสะดวกสบาย</p>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to="/products" style={styles.button}>🛒 เริ่มช้อปปิ้ง</Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",  // Ensure the background image covers the entire viewport
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  homeBox: {
    position: "relative",
    background: "rgba(255, 255, 255, 0.8)",
    padding: "3rem",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(93, 63, 211, 0.5)",
    maxWidth: "500px",
    width: "90%",
    textAlign: "center",
    backdropFilter: "blur(10px)",
  },
  title: {
    color: "#8B4513", // สีแทนของไทย
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    textShadow: "0px 0px 10px rgba(255, 255, 255, 0.3)",
  },
  subtitle: {
    color: "#2C3E50",  // สีเข้มเป็นธรรมชาติ
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  button: {
    display: "inline-block",
    backgroundColor: "#E74C3C",  // สีแดงที่สะดุดตา
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "10px",
    fontSize: "1rem",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0px 4px 10px rgba(93, 63, 211, 0.5)",
  },
};

export default Home;
