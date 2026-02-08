import React from "react";

const Profile = () => {
    const user = {
        name: "User Name",
        joinedOn: "Feb 2026",
        focus: ["Skill_1", "Skill_2", "Skill_3", "Skill_4"],
    };

    return (
        <div
            style={{
                padding: "24px",
                maxWidth: "1100px",
                margin: "0 auto",
                fontFamily: "Arial, sans-serif"
            }}
        >
            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    padding: "20px",
                    borderRadius: "12px",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
                }}
            >
                {/* Avatar (Curently taking the first letter of the name.) */}
                <div
                    style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        backgroundColor: "#4f46e5",
                        color: "#fff",
                        fontSize: "36px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    {user.name.charAt(0)}
                </div>

                {/* Details of the user */}
                <div>
                    <h2 style={{ margin: 0 }}>{user.name}</h2>

                    <p style={{ fontSize: "14px", color: "#777" }}>
                        Joined: {user.joinedOn}
                    </p>

                    {/* Focus Areas */}
                    <div style={{ marginTop: "10px" }}>
                        {user.focus.map((item) => (
                            <span
                                key={item}
                                style={{
                                    display: "inline-block",
                                    marginRight: "8px",
                                    marginTop: "6px",
                                    padding: "4px 10px",
                                    fontSize: "13px",
                                    backgroundColor: "#eef2ff",
                                    color: "#3730a3",
                                    borderRadius: "16px"
                                }}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
