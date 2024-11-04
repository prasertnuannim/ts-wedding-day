import React from 'react';
import { RiLoaderLine } from "react-icons/ri";

function Loading() {
  return (
    <div className="flex h-screen justify-center items-center relative">
      <p className="text-3xl relative animate-spin text-sky-500" aria-label="Loading spinner">
        <RiLoaderLine />
      </p>
    </div>
  );
}

export default Loading;
