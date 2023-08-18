import React, { useEffect, useState } from "react";
import { privateRequest } from "../../configs/RequestMethod";
import * as XLSX from "xlsx"; // Import the XLSX library for Excel conversion

function UserDetails() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [stateFilter, setStateFilter] = useState(""); // State filter
  const [districtFilter, setDistrictFilter] = useState(""); // District filter

  const getAllUser = async () => {
    try {
      setIsLoading(true);
      const response = await privateRequest.get("/users/allUsers");
      const filteredData = response?.data?.allUsers.filter(item => {
          if (stateFilter && districtFilter) {
            return item.state === stateFilter && item.district === districtFilter;
          } else if (stateFilter) {
            return item.state === stateFilter;
          } else if (districtFilter) {
            return item.district === districtFilter;
          } else {
            return true;
          }
        });
      setData(filteredData);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllUser();
  }, [stateFilter, districtFilter]);

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "User Data");
    XLSX.writeFile(workbook, "user_data.xlsx");
  };

  return (
    <div className="">
      <>
        {/* Add filter components here (e.g., dropdowns for state and district) */}
        

        <div className="pl-8 pt-4 mt-4 pr-4">
        
          <div className="flex justify-around bg-gray-100 items-center ">
          <div className="flex justify-around bg-gray-100 py-4 space-x-4 px-4">
          <div>
          <label htmlFor="stateFilter">Filter by State:</label>
          <input
            type="text"
            id="stateFilter"
            value={stateFilter}
            onChange={e => setStateFilter(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="districtFilter">Filter by District:</label>
          <input
            type="text"
            id="districtFilter"
            value={districtFilter}
            onChange={e => setDistrictFilter(e.target.value)}
          />
        </div>
          </div>
          <div>
          <button onClick={downloadExcel} className="bg-purple-400 text-white px-4 py-2 rounded">
            Download Excel
          </button>
          </div>
          </div>
          <div className="h-[calc(100vh-120px)] overflow-auto mt-2 ">
            <table className="w-[100%] border-collapse">
              {/* head */}
              <thead className="bg-purple-400 text-white sticky top-0">
                <tr>
                  <th>S.no.</th>
                  <th>User Name</th>
                  <th>Phone No</th>
                  <th>State</th>
                  <th>District</th>
                  <th>Date Of Contact</th>
                </tr>
              </thead>

              {/* body */}
              <tbody>
                {data?.map((item, index) => (
                  <tr
                    className={
                      index % 2 === 1
                        ? "text-center bg-[#D4E6FF]"
                        : "text-center"
                    }
                    key={index}
                  >
                    <td className="py-3 items-center flex justify-center">
                      {index + 1}
                    </td>
                    <td>{item.name}</td>
                    <td>{item.mobileNo}</td>
                    <td>{item.state}</td>
                    <td>{item.district}</td>
                    <td>{item.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    </div>
  );
}

export default UserDetails;
