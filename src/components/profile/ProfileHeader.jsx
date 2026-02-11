import React from "react";

const ProfileHeader = ({ user }) => {
    return (
        <div style={styles.card}>
            <div style={styles.avatar}>
                {user.name.charAt(0)}
            </div>

            <div>
                <h2 style={{ margin: 0 }}>{user.name}</h2>
                <p style={{ color: "#777", margin: "4px 0" }}>{user.email}</p>
                <p style={{ fontSize: "13px", color: "#999" }}>
                    Joined: {user.joinedOn}
                </p>
            </div>

            <button style={styles.button}>Edit Profile</button>
        </div>
    );
};

const styles = {
    card: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        marginBottom: "20px",
    },
    avatar: {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundColor: "#4f46e5",
        color: "#fff",
        fontSize: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        padding: "8px 14px",
        backgroundColor: "#4f46e5",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
    },
};

export default ProfileHeader;
