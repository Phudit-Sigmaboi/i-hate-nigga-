import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                login(data.token);
                navigate("/");
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError("❌ Login failed. Try again.");
        }
    };

    return (
        <div style={styles.container}>
            {/* ✅ CSS Animation */}
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
                    background: white;
                    opacity: 0.7;
                    filter: blur(1px);
                    animation: meteorAnimation 2s linear infinite;
                }
                `}
            </style>

            {/* ✅ ดาวตก */}
            {[...Array(10)].map((_, i) => (
                <div key={i} className="meteor" style={{
                    top: `${Math.random() * 100}vh`,
                    left: `${Math.random() * 100}vw`,
                    animationDelay: `${Math.random() * 2}s`,
                }}></div>
            ))}

            <motion.div 
                style={styles.loginBox}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 style={styles.title}>Sign In</h2>
                {error && <p style={styles.error}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <div style={styles.inputContainer}>
                        <input 
                            type="email" 
                            placeholder="Email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.inputContainer}>
                        <input 
                            type="password" 
                            placeholder="Password"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required
                            style={styles.input}
                        />
                    </div>
                    <motion.button 
                        type="submit"
                        style={styles.button}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95, backgroundColor: "#6c48d3" }}
                    >
                        Sign In
                    </motion.button>
                </form>
                <p style={styles.signupText}>
                    New here? <a href="/register" style={styles.link}>Sign up now</a>
                </p>
            </motion.div>
        </div>
    );
};

const styles = {
    container: {
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "linear-gradient(-45deg,rgb(0, 0, 0),rgb(27, 16, 70),rgb(72, 46, 125),rgb(34, 23, 49),rgb(37, 17, 78))",
        backgroundSize: "400% 400%",
        animation: "gradientAnimation 10s ease infinite",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    loginBox: {
        position: "relative",
        background: "rgba(25, 25, 35, 0.8)", // ✅ กล่องเข้มขึ้นให้ดูชัด
        padding: "3rem",
        borderRadius: "12px",
        boxShadow: "0 0 20px rgba(95, 158, 255, 0.3)", // ✅ Glow Effect
        maxWidth: "400px",
        width: "90%",
        textAlign: "center",
        backdropFilter: "blur(10px)",
    },
    title: {
        color: "#ffffff",
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "1.5rem",
        textShadow: "0px 0px 10px rgba(255, 255, 255, 0.3)", // ✅ ให้ตัวอักษรชัดขึ้น
    },
    inputContainer: {
        marginBottom: "1rem",
    },
    input: {
        width: "100%",
        padding: "14px",
        borderRadius: "10px",
        border: "none",
        backgroundColor: "#3b3b55",
        color: "#fff",
        fontSize: "1rem",
        outline: "none",
        transition: "all 0.3s",
    },
    button: {
        width: "100%",
        padding: "14px",
        borderRadius: "10px",
        border: "none",
        backgroundColor: "#5D3FD3",
        color: "#fff",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        boxShadow: "0px 4px 10px rgba(93, 63, 211, 0.5)", // ✅ ปุ่มมีเงา
    },
    signupText: {
        color: "#ccccff",
        marginTop: "1rem",
        fontSize: "0.9rem",
    },
    link: {
        color: "#A3A7FC",
        textDecoration: "none",
        fontWeight: "bold",
        transition: "color 0.3s",
    },
};

export default Login;
