import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";
import style from "../styles/components/pdf.module.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type props = {
    numPages: number
}

const Pdf: NextPage = () => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({numPages}:props) {
    setNumPages(numPages);
    // setPageNumber(numPages)
  }

  function changepage(numPages: number) {
      setPageNumber((pre) => pre+numPages)
      setNumPages((pre) => pre+numPages)

  }

  function changeBack() {
      changepage(-1)
  }

  function changeFor(){
      changepage(+1)
  }

  return (
    <div className={style.pdf}>
        <p className={style.text}>{pageNumber} of {numPages}</p>
      <Document
        externalLinkTarget="_blank"
        file={{url: "/files/pdf995.pdf"}}
        onLoadSuccess={onDocumentLoadSuccess}
        
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <button onClick={changeFor}>+</button>
      <button onClick={changeBack}>-</button>
      
      <Link href="/files/pdf995.pdf">ClickMe</Link>
    </div>
  );
};

export default Pdf;
