const RequestBar = ({url,onChange,run}) => {
  return (
    <div id='request-container-header'>
      <div id='request-url-container'>
        <select id='request-method-select'>
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>PATCH</option>
          <option>DELETE</option>
        </select>
        <input id='request-url-input' placeholder="http://example.com"
          value={url} onChange={onChange} />
      </div>
      <button onClick={run} id='request-run-btn'>Run</button>
    </div>
  );
}
export default RequestBar;