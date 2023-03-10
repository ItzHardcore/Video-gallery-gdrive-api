import React, { useState } from "react";
import { Document, Page } from "react-pdf";

function Viewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file='./video-gallery/Curriculo_Margarida_Mimo.pdf' onLoadSuccess={onDocumentLoadSuccess}></Document>
    </div>
  );
}
