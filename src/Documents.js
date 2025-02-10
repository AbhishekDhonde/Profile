import React from 'react';

function Documents() {
  return (
    <div className="documents-page">
      <h1>Documents</h1>
      <iframe src="/path/to/your/document1.pdf" title="Document 1" className="document-frame"></iframe>
      <iframe src="/path/to/your/document2.pdf" title="Document 2" className="document-frame"></iframe>
      {/* Add more iframes as needed */}
    </div>
  );
}

export default Documents;