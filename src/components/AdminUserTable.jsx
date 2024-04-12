// import { useEffect, useState } from 'react';
import '../../public/style/AdminUserTable.css'
import {
    TableRow,
    TableHeaderCell,
    TableHeader,
    TableCell,
    TableBody,
    Table
} from 'semantic-ui-react'
import Avatar from '@mui/material/Avatar';

import EditUser from './EditUser';
import { getAuth } from 'firebase-admin/auth';
// import {listAllUsers} from '../../FireBaseConfig/Admin'

function AdminUserTable() {


  const listAllUsers = (nextPageToken) => {
    // List batch of users, 1000 at a time.
    getAuth()
      .listUsers(1000, nextPageToken)
      .then((listUsersResult) => {
        listUsersResult.users.forEach((userRecord) => {
          console.log('user', userRecord.toJSON());
        });
        if (listUsersResult.pageToken) {
          // List next batch of users.
          listAllUsers(listUsersResult.pageToken);
        }
      })
      .catch((error) => {
        console.log('Error listing users:', error);
      });
  };
  // Start listing users from the beginning, 1000 at a time.
  listAllUsers();

    

  return (
    <>
        <Table color='red' singleLine inverted>
    <TableHeader>
      <TableRow>
        <TableHeaderCell><h4>#</h4></TableHeaderCell>
        <TableHeaderCell><h4>Nombre</h4></TableHeaderCell>
        <TableHeaderCell><h4>Email</h4></TableHeaderCell>
        <TableHeaderCell><h4>Proveedor</h4></TableHeaderCell>
        <TableHeaderCell><h4>Fecha de Crea.</h4></TableHeaderCell>
        <TableHeaderCell><h4>Ult. Acceso</h4></TableHeaderCell>
        <TableHeaderCell><h4>Foto de P.</h4></TableHeaderCell>
        <TableHeaderCell><h4>Rol</h4></TableHeaderCell>
        <TableHeaderCell><h4>Acciones</h4></TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow className='text-center'>
        <TableCell>1</TableCell>
        <TableCell>Daviel Sanchez</TableCell>
        <TableCell>jhlilk22@yahoo.com</TableCell>
        <TableCell>Gmail</TableCell>
        <TableCell>10/05/23</TableCell>
        <TableCell>02/26/24</TableCell>
        <TableCell className='d-flex justify-content-center TableCell'>
            <Avatar className="Avatar dropdown" data-bs-toggle="dropdown"
            aria-expanded="false" sx={{ width: 24, height: 24 }} />
        </TableCell>
        <TableCell>Administrador</TableCell>
        <TableCell>
        <EditUser />
        <button className="btn btn-danger" title="Eliminar"  /* onClick={()=> {Borrar(carro.id)}} */ >
<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
        </svg></button>
        
        </TableCell>
      </TableRow>
      <TableRow className='text-center'>
        <TableCell>1</TableCell>
        <TableCell>Daviel Sanchez</TableCell>
        <TableCell>jhlilk22@yahoo.com</TableCell>
        <TableCell>Gmail</TableCell>
        <TableCell>10/05/23</TableCell>
        <TableCell>02/26/24</TableCell>
        <TableCell className='d-flex justify-content-center TableCell'>
            <Avatar className="Avatar dropdown" data-bs-toggle="dropdown"
            aria-expanded="false" sx={{ width: 24, height: 24 }} />
        </TableCell>
        <TableCell>Administrador</TableCell>
        <TableCell>Acciones</TableCell>
      </TableRow>
      <TableRow className='text-center'>
        <TableCell>1</TableCell>
        <TableCell>Daviel Sanchez</TableCell>
        <TableCell>jhlilk22@yahoo.com</TableCell>
        <TableCell>Gmail</TableCell>
        <TableCell>10/05/23</TableCell>
        <TableCell>02/26/24</TableCell>
        <TableCell className='d-flex justify-content-center TableCell'>
            <Avatar className="Avatar dropdown" data-bs-toggle="dropdown"
            aria-expanded="false" sx={{ width: 24, height: 24 }} />
        </TableCell>
        <TableCell>Administrador</TableCell>
        <TableCell>Acciones</TableCell>
      </TableRow>
      <TableRow className='text-center'>
        <TableCell>1</TableCell>
        <TableCell>Daviel Sanchez</TableCell>
        <TableCell>jhlilk22@yahoo.com</TableCell>
        <TableCell>Gmail</TableCell>
        <TableCell>10/05/23</TableCell>
        <TableCell>02/26/24</TableCell>
        <TableCell className='d-flex justify-content-center TableCell'>
            <Avatar className="Avatar dropdown" data-bs-toggle="dropdown"
            aria-expanded="false" sx={{ width: 24, height: 24 }} />
        </TableCell>
        <TableCell>Administrador</TableCell>
        <TableCell>Acciones</TableCell>
      </TableRow>
      <TableRow className='text-center'>
        <TableCell>1</TableCell>
        <TableCell>Daviel Sanchez</TableCell>
        <TableCell>jhlilk22@yahoo.com</TableCell>
        <TableCell>Gmail</TableCell>
        <TableCell>10/05/23</TableCell>
        <TableCell>02/26/24</TableCell>
        <TableCell className='d-flex justify-content-center TableCell'>
            <Avatar className="Avatar dropdown" data-bs-toggle="dropdown"
            aria-expanded="false" sx={{ width: 24, height: 24 }} />
        </TableCell>
        <TableCell>Administrador</TableCell>
        <TableCell>Acciones</TableCell>
      </TableRow>
      <TableRow className='text-center'>
        <TableCell>1</TableCell>
        <TableCell>Daviel Sanchez</TableCell>
        <TableCell>jhlilk22@yahoo.com</TableCell>
        <TableCell>Gmail</TableCell>
        <TableCell>10/05/23</TableCell>
        <TableCell>02/26/24</TableCell>
        <TableCell className='d-flex justify-content-center TableCell'>
            <Avatar className="Avatar dropdown" data-bs-toggle="dropdown"
            aria-expanded="false" sx={{ width: 24, height: 24 }} />
        </TableCell>
        <TableCell>Administrador</TableCell>
        <TableCell>Acciones</TableCell>
      </TableRow>
      <TableRow className='text-center'>
        <TableCell>1</TableCell>
        <TableCell>Daviel Sanchez</TableCell>
        <TableCell>jhlilk22@yahoo.com</TableCell>
        <TableCell>Gmail</TableCell>
        <TableCell>10/05/23</TableCell>
        <TableCell>02/26/24</TableCell>
        <TableCell className='d-flex justify-content-center TableCell'>
            <Avatar className="Avatar dropdown" data-bs-toggle="dropdown"
            aria-expanded="false" sx={{ width: 24, height: 24 }} />
        </TableCell>
        <TableCell>Administrador</TableCell>
        <TableCell>Acciones</TableCell>
      </TableRow>
      <TableRow className='text-center'>
        <TableCell>1</TableCell>
        <TableCell>Daviel Sanchez</TableCell>
        <TableCell>jhlilk22@yahoo.com</TableCell>
        <TableCell>Gmail</TableCell>
        <TableCell>10/05/23</TableCell>
        <TableCell>02/26/24</TableCell>
        <TableCell className='d-flex justify-content-center TableCell'>
            <Avatar className="Avatar dropdown" data-bs-toggle="dropdown"
            aria-expanded="false" sx={{ width: 24, height: 24 }} />
        </TableCell>
        <TableCell>Administrador</TableCell>
        <TableCell>Acciones</TableCell>
      </TableRow>
      <TableRow className='text-center'>
        <TableCell>1</TableCell>
        <TableCell>Daviel Sanchez</TableCell>
        <TableCell>jhlilk22@yahoo.com</TableCell>
        <TableCell>Gmail</TableCell>
        <TableCell>10/05/23</TableCell>
        <TableCell>02/26/24</TableCell>
        <TableCell className='d-flex justify-content-center TableCell'>
            <Avatar className="Avatar dropdown" data-bs-toggle="dropdown"
            aria-expanded="false" sx={{ width: 24, height: 24 }} />
        </TableCell>
        <TableCell>Administrador</TableCell>
        <TableCell>Acciones</TableCell>
      </TableRow>
      <TableRow className='text-center'>
        <TableCell>1</TableCell>
        <TableCell>Daviel Sanchez</TableCell>
        <TableCell>jhlilk22@yahoo.com</TableCell>
        <TableCell>Gmail</TableCell>
        <TableCell>10/05/23</TableCell>
        <TableCell>02/26/24</TableCell>
        <TableCell className='d-flex justify-content-center TableCell'>
            <Avatar className="Avatar dropdown" data-bs-toggle="dropdown"
            aria-expanded="false" sx={{ width: 24, height: 24 }} />
        </TableCell>
        <TableCell>Administrador</TableCell>
        <TableCell>Acciones</TableCell>
      </TableRow>
      <TableRow className='text-center'>
        <TableCell>1</TableCell>
        <TableCell>Daviel Sanchez</TableCell>
        <TableCell>jhlilk22@yahoo.com</TableCell>
        <TableCell>Gmail</TableCell>
        <TableCell>10/05/23</TableCell>
        <TableCell>02/26/24</TableCell>
        <TableCell className='d-flex justify-content-center TableCell'>
            <Avatar className="Avatar dropdown" data-bs-toggle="dropdown"
            aria-expanded="false" sx={{ width: 24, height: 24 }} />
        </TableCell>
        <TableCell>Administrador</TableCell>
        <TableCell>Acciones</TableCell>
      </TableRow>
      <TableRow className='text-center'>
        <TableCell>1</TableCell>
        <TableCell>Daviel Sanchez</TableCell>
        <TableCell>jhlilk22@yahoo.com</TableCell>
        <TableCell>Gmail</TableCell>
        <TableCell>10/05/23</TableCell>
        <TableCell>02/26/24</TableCell>
        <TableCell className='d-flex justify-content-center TableCell'>
            <Avatar className="Avatar dropdown" data-bs-toggle="dropdown"
            aria-expanded="false" sx={{ width: 24, height: 24 }} />
        </TableCell>
        <TableCell>Administrador</TableCell>
        <TableCell>Acciones</TableCell>
      </TableRow>
      <TableRow className='text-center'>
        <TableCell>1</TableCell>
        <TableCell>Daviel Sanchez</TableCell>
        <TableCell>jhlilk22@yahoo.com</TableCell>
        <TableCell>Gmail</TableCell>
        <TableCell>10/05/23</TableCell>
        <TableCell>02/26/24</TableCell>
        <TableCell className='d-flex justify-content-center TableCell'>
            <Avatar className="Avatar dropdown" data-bs-toggle="dropdown"
            aria-expanded="false" sx={{ width: 24, height: 24 }} />
        </TableCell>
        <TableCell>Administrador</TableCell>
        <TableCell>Acciones</TableCell>
      </TableRow>
      
    </TableBody>
  </Table>
  <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-item disabled">
      <a className="page-link"><h4>Previous</h4></a>
    </li>
    <li className="page-item"><a className="page-link" href="#"><h4>1</h4></a></li>
    <li className="page-item"><a className="page-link" href="#"><h4>2</h4></a></li>
    <li className="page-item"><a className="page-link" href="#"><h4>3</h4></a></li>
    <li className="page-item">
      <a className="page-link" href="#"><h4>Next</h4></a>
    </li>
  </ul>
</nav>
    </>
  )
}

export default AdminUserTable