import React, { useState } from "react";

const OrderHistory = ({ orders }) => {
    const [showAll, setShowAll] = useState(false);

    const visibleOrders = showAll ? orders : orders.slice(0, 2);

    return (
        <div style={styles.card}>
            <h3>Order History</h3>

            {visibleOrders.map((order, index) => (
                <div key={index} style={styles.orderItem}>
                    <div>
                        <p><strong>{order.id}</strong></p>
                        <p style={styles.date}>{order.date}</p>
                    </div>

                    <div style={{ textAlign: "right" }}>
                        <p>{order.total}</p>
                        <p style={getStatusStyle(order.status)}>
                            {order.status}
                        </p>
                    </div>
                </div>
            ))}

            {orders.length > 2 && (
                <div style={styles.buttonContainer}>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        style={styles.button}
                    >
                        {showAll ? "Show Less" : "View More"}
                    </button>
                </div>
            )}
        </div>
    );
};

const getStatusStyle = (status) => ({
    fontSize: "13px",
    fontWeight: "500",
    color:
        status === "Delivered"
            ? "green"
            : status === "Shipped"
                ? "#4f46e5"
                : "orange",
});

const styles = {
    card: {
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    },
    orderItem: {
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 0",
        borderBottom: "1px solid #eee",
    },
    date: {
        fontSize: "13px",
        color: "#777",
    },
    button: {
        marginTop: "15px",
        padding: "8px 14px",
        backgroundColor: "#4f46e5",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop: "15px",

    }
};

export default OrderHistory;
