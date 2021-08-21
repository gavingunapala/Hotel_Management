import React from "react"
import {useHistory} from "react-router-dom";
import '../CSS/Admin/SideNav.css';

const AdminSideNav = () => {

    const history = useHistory();

    const Logout = () => {
        localStorage.clear();
        history.push('/login');
    };

    return (
        <div>
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Admin Panel</h3>
                </div>
                <ul className="list-unstyled components">
                    <li>
                        <a href="/foodManagement">Foods</a>
                        <a href="/ManageAdmins">Rooms</a>
                        <a href="/AdminPanelCustomers">Customers</a>
                        <a href="/EmployeeView">Employee</a>
                        <a href="/ManageUsers">Payments</a>
                        <a href="/#">Room Bookings</a>
                        <a href="/AddRooms">Add Rooms</a>
                        <a href="/ManageRoomsDashboard">Rooms Dashboard</a>


                    </li>
                    <li>
                        <a>
                            <button onClick={Logout}>Logout</button>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default AdminSideNav;
