import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import Header from "../../components/Layout/Header";

const Users = () => {
  return (
    <Layout title={"Dashboard - All Users"}>
      <div className='cont'>
        <Header />
      </div>
      <div className='cont'>
        <div className='container-fluid m-3 p-3'>
          <div className='row'>
            <div className='col-md-3'>
              <AdminMenu />
            </div>
            <div className='col-md-9'>
              <h1>All Users</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
