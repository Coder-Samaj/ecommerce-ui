import React from "react";

const ProfileInfo = ({ user }) => {
    return (
        <div style={styles.card}>
            <h3>Account Information</h3>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
        </div>
    );
};

const styles = {
    card: {
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        marginBottom: "20px",
    },
};

export default ProfileInfo;
