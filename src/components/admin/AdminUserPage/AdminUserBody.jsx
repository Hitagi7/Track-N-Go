import React from 'react'
import './AdminUserBody.css'

function AdminUserBody() {
    return (
        <div className="a-user-body">
            <div class="a-text-field">
                <form action="#">
                    <img src="src/assets/icons/icon-search.svg" alt="" class="a-search-icon" />
                    <input type="text" placeholder="Search users" class="a-search-field" />
                </form>
                <button class="a-search-button">
                    <p class="a-search-label">Search</p>
                </button>
            </div>
            <div className="a-user-table">
                <table class="a-user-table-content">
                    <tr class="a-user-table-header">
                        <th> </th>
                        <th>ID</th>
                        <th>USERNAME</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>EMAIL ADDRESS</th>
                        <th>PASSWORD</th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>9999</td>
                        <td>k2xg</td>
                        <td>Kiannah Mikhaela</td>
                        <td>Gil</td>
                        <td>22102740@usc.edu.ph</td>
                        <td>dsdsb23456re</td>
                        <td><img src="src/assets/icons/icon-trash.svg" alt="" class="a-icon-trash"/></td>                        
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default AdminUserBody;
