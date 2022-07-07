import React from "react";
import { Table } from 'reactstrap';

function TableBordered() {
    return (
        <Table className="mb-0" bordered>
            <thead>
                <tr>
                    <th>Buổi</th>
                    <th>Tiết</th>
                    <th>Thứ 2</th>
                    <th>Thứ 3</th>
                    <th>Thứ 4</th>
                    <th>Thứ 5</th>
                    <th>Thứ 6</th>
                    <th>Thứ 3</th>
                    <th>Chủ nhật</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Sáng</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">Chiều</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">Tối</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <th scope="row">Tối</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <th scope="row">Tối</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default TableBordered;