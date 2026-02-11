import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import AddressCard from "./AddressCard";
import OrderHistory from "./OrderHistory";

const Profile = () => {
    const user = {
        name: "Sanjeeb",
        email: "sanjeeb@xyz.com",
        joinedOn: "Feb 2026",
        phone: "00000000",
    };

    const address = {
        street: "Bhubaneswar",
        city: "Bhubaneswar",
        state: "Odisha",
        zip: "755001",
        country: "India",
    };

    const orders = [
        { id: "ORD123", date: "10 Feb 2026", total: "120.00", status: "Delivered" },
        { id: "ORD456", date: "25 Jan 2026", total: "75.50", status: "Shipped" },
        { id: "ORD123", date: "10 Feb 2026", total: "120.00", status: "Delivered" },
        { id: "ORD123", date: "10 Feb 2026", total: "120.00", status: "Delivered" },
        { id: "ORD456", date: "25 Jan 2026", total: "75.50", status: "Shipped" },
        { id: "ORD456", date: "25 Jan 2026", total: "75.50", status: "Shipped" },
        { id: "ORD456", date: "25 Jan 2026", total: "75.50", status: "Shipped" },
        { id: "ORD456", date: "25 Jan 2026", total: "75.50", status: "Shipped" },
        { id: "ORD456", date: "25 Jan 2026", total: "75.50", status: "Shipped" },
    ];

    return (
        <div style={styles.container}>
            <ProfileHeader user={user} />
            <ProfileInfo user={user} />
            <AddressCard address={address} />
            <OrderHistory orders={orders} />
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
    },
};

export default Profile;
