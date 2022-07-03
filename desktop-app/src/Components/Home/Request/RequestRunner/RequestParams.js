import './requestparam.css'
const RequestParams = ({ params, onChange, onAdd, onDelete }) => {
  const addMoreParams = () => {
    onAdd();
  }

  const deleteParam = (index) => {
    onDelete(index);
  }

  return (
    <div style={{ height: "90%", width: "100%" }}>
      <p id='requestparam-title'>Query params</p>
      <div style={{}}>
        <div className='request-param-label-box'>
          <button className='add-param-box-btn' onClick={addMoreParams} >+</button>
          <p className='request-param-label'>KEY</p>
          <p className='request-param-label'>VALUE</p>
          <p className='request-param-label'>DESCRIPTION</p>
        </div>
        {
          params.map((param, index) =>
            <div className='params-box'>
              {
                params.length > 1 &&
                <button className='delete-param-box-btn' onClick={() => deleteParam(index)} >x</button>
              }
              <div className='request-key-value-input-wrapper'>
                <input className="request-key-value-input" value={param.key} onChange={(e) => onChange("key", e.target.value, index)} placeholder="Key" />
              </div>
              <div className='request-key-value-input-wrapper'>
                <input className="request-key-value-input" value={param.value} onChange={(e) => onChange("value", e.target.value, index)} placeholder="Value" />
              </div>
              <div className='request-key-value-input-wrapper'>
                <input className="request-key-value-input" value={param.description} onChange={(e) => onChange("description", e.target.value, index)} placeholder="Description" />
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}
export default RequestParams;