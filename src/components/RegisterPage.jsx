import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import VIDEO from "../assets/Mars_Rotation_Web_HB_d96299f9de.mp4";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <style>
        {`
          .input {
            width: 100%;
            height: 45px;
            border-radius: 40px;
            border: 1px solid rgba(255,255,255,0.3);
            background: transparent;
            color: white;
            padding: 0 45px 0 20px;
            outline: none;
            font-size: 14px;
          }

          .input::placeholder {
            color: white;
            opacity: 1;
          }
        `}
      </style>

      <div style={styles.page}>
        
        <div style={styles.left}>
          <div style={styles.card}>
            <form style={styles.form}>
              <h2 style={styles.title}>Registration</h2>

              <div style={styles.inputWrapper}>
                <input type="text" placeholder="Username" required className="input" />
                <FaUser style={styles.icon} />
              </div>

              <div style={styles.inputWrapper}>
                <input type="email" placeholder="Email" required className="input" />
                <FaEnvelope style={styles.icon} />
              </div>

              <div style={styles.inputWrapper}>
                <input type="password" placeholder="Password" required className="input" />
                <FaLock style={styles.icon} />
              </div>

              <div style={styles.inputWrapper}>
                <input type="password" placeholder="Confirm Password" required className="input" />
                <FaLock style={styles.icon} />
              </div>

              <div style={styles.row}>
                <label style={styles.checkboxLabel}>
                  <input type="checkbox" required />
                  I agree to the terms & conditions
                </label>
              </div>

              <button type="submit" style={styles.button}>
                Register
              </button>

              <p style={styles.registerText}>
                Already have an account?{" "}
                <Link to="/login" style={styles.linkBold}>Login</Link>
              </p>
            </form>
          </div>
        </div>

        
        <div style={styles.right}>
          <video autoPlay muted loop playsInline style={styles.video}>
            <source src={VIDEO} type="video/mp4" />
          </video>

          <div style={styles.glowOverlay} />
        </div>
      </div>
    </>
  );
};

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    fontFamily: "Poppins, sans-serif",
    backgroundColor: "black",
  },

  left: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: 420,
    height: 520,
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05))",
    borderRadius: 16,
    color: "white",
    padding: "0 40px",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.25)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
  },

  right: {
    width: "50%",
    position: "relative",
    overflow: "hidden",
  },

  video: {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "right center", 
  transform: "scale(1.05)",
  filter: "brightness(1.15) contrast(1.1)",
},

  glowOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at center, rgba(255,120,60,0.25), transparent 60%)",
    pointerEvents: "none",
  },

  form: { width: "100%" },

  title: {
    textAlign: "center",
    marginBottom: 24,
  },

  inputWrapper: {
    position: "relative",
    marginBottom: 18,
  },

  icon: {
    position: "absolute",
    right: 18,
    top: "50%",
    transform: "translateY(-50%)",
    color: "white",
  },

  row: {
    marginBottom: 20,
    fontSize: 14,
  },

  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: 6,
  },

  button: {
    width: "100%",
    height: 45,
    borderRadius: 40,
    border: "none",
    backgroundColor: "white",
    color: "black",
    fontWeight: 700,
    cursor: "pointer",
  },

  registerText: {
    textAlign: "center",
    marginTop: 16,
    fontSize: 15,
  },

  linkBold: {
    color: "white",
    fontWeight: 600,
    textDecoration: "none",
  },
};

export default RegisterPage;
