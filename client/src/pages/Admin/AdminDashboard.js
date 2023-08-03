import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import "./AdminDashboardStyles.css";
import Header from "../../components/Layout/Header";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className='cont'>
        <Header />
      </div>
      <div className='cont'>
        <div className='admin-dashboard-container'>
          <div className='row'>
            <div className='col-md-3'>
              <AdminMenu />
            </div>
            <div className='col-md-9'>
              <div className='card admin-info-card'>
                <h3 className='admin-info-title'>Admin Information</h3>
                <div className='admin-info'>
                  <p className='admin-info-item'>
                    <span className='admin-info-label'>Name:</span>{" "}
                    {auth?.user?.name}
                  </p>
                  <p className='admin-info-item'>
                    <span className='admin-info-label'>Email:</span>{" "}
                    {auth?.user?.email}
                  </p>
                  <p className='admin-info-item'>
                    <span className='admin-info-label'>Contact:</span>{" "}
                    {auth?.user?.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
