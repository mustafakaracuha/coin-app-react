import React from "react";
import Table from "./Table";

function index({ searchText }) {
  return (
    <div className="w-full overflow-auto">
      <Table searchText={searchText} />
    </div>
  );
}

export default index;
