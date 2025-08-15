import React from "react";
import AdminMenu from "../../Components/Layout/AdminMenu";
import Layout from "./../../Components/Layout/Layout";

const Users = () => {
  return (
    <Layout title={"Dashboard - All Users"}>
        <div className="row">
            <div className="col-md-3">
                <AdminMenu/>
            </div>
            <div className="col-md-9">
                <h1>ALL USERS</h1>
            </div>
        </div>
    </Layout>
  );
};

export default Users;
