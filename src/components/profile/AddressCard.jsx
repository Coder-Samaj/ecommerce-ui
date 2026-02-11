import React from "react";

const AddressCard = ({ address }) => {
    return (
        <div style={styles.card}>
            <h3>Shipping Address</h3>
            <p>{address.street}</p>
            <p>
                {address.city}, {address.state} {address.zip}
            </p>
            <p>{address.country}</p>
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

export default AddressCard;
