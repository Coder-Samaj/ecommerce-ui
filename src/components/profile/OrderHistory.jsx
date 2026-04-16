import React, { useState } from "react";
import { Box, Typography, Button, Divider, Chip } from "@mui/material";

const OrderHistory = ({ orders }) => {
    const [showAll, setShowAll] = useState(false);

    const visibleOrders = showAll ? orders : orders.slice(0, 2);

    return (
        <Box>
            <Typography
                sx={{
                    fontWeight: 700,
                    fontSize: 18,
                    color: "#111827",
                    mb: 2,
                }}
            >
                Order History
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {visibleOrders.map((order, index) => (
                    <Box
                        key={index}
                        sx={{
                            p: 2,
                            borderRadius: "12px",
                            border: "1px solid #E5E7EB",
                            backgroundColor: "#F9FAFB",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            transition: "0.3s",
                            "&:hover": {
                                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                                transform: "translateY(-2px)",
                            },
                        }}
                    >
                        <Box>
                            <Typography fontWeight={600}>
                                {order.id}
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: 13,
                                    color: "#6B7280",
                                    mt: 0.5,
                                }}
                            >
                                {order.date}
                            </Typography>
                        </Box>

                        <Box sx={{ textAlign: "right" }}>
                            <Typography fontWeight={600}>
                                ₹{order.total}
                            </Typography>

                            <Chip
                                label={order.status}
                                size="small"
                                sx={{
                                    mt: 1,
                                    fontWeight: 500,
                                    backgroundColor: getStatusBg(order.status),
                                    color: getStatusColor(order.status),
                                }}
                            />
                        </Box>
                    </Box>
                ))}
            </Box>

            {orders.length > 2 && (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                    <Button
                        onClick={() => setShowAll(!showAll)}
                        sx={{
                            px: 3,
                            borderRadius: "25px",
                            textTransform: "none",
                            fontWeight: 600,
                            background:
                                "linear-gradient(135deg,#6366F1,#06B6D4)",
                            color: "#fff",
                            "&:hover": {
                                boxShadow: "0 6px 20px rgba(99,102,241,0.4)",
                            },
                        }}
                    >
                        {showAll ? "Show Less" : "View More"}
                    </Button>
                </Box>
            )}
        </Box>
    );
};

const getStatusBg = (status) => {
    if (status === "Delivered") return "#DCFCE7";
    if (status === "Shipped") return "#DBEAFE";
    return "#FEF3C7";
};

const getStatusColor = (status) => {
    if (status === "Delivered") return "#16A34A";
    if (status === "Shipped") return "#2563EB";
    return "#D97706";
};

export default OrderHistory;
