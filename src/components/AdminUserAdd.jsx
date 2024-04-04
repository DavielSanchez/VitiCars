import '../../public/style/AddCar.css'

function AdminUserAdd() {

  return (
    <>
<button type="button" className="btnAdd" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
Crear nuevo usuario
</button>

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl p p-3">
     <div className="modal-content">
       <div className="modal-body">
       <div className="container-div">
        </div>
       </div>
       <div className="modal-footer">
         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         <button type="button" className="btn btn-primary">Save changes</button>
       </div>
     </div>
   </div>
 </div>
</>
  )
}

export default AdminUserAdd