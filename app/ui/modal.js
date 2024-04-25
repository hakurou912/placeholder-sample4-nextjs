import CloseBtn from '@/app/ui/closeButton'

export default function Modal({ user }) {
  return (
    <div className="modal fade" role="dialog" id="userModal" tabIndex="-1" aria-labelledby="userLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title h5" id="userLabel">{user.username}</h2>
          <CloseBtn style={'btn-close'}/>
        </div>
        <div className="modal-body">
          <div>userId:{user.id}</div>
          <div>email:{user.email}</div>
          <div>address:{user.email}</div>
        </div>
        <div className="modal-footer">
          <CloseBtn style={'btn btn-secondary btn-sm'}/>
        </div>
      </div>
    </div>
  </div>
  )
}