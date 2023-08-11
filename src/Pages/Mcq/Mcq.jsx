import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import {Link} from "react-router-dom"


function Mcq() {

  return (
    <div className="bg-white">
      <>
          <Navbar title={"MCQ"} />
          <Sidebar />
          <div className="pl-24 pr-4">
          <div className="flex justify-between items-center m-4">
            <div className="text-end my-2">
              <input
                type="text"
                placeholder="Search by Name"
                className="input-bordered input-sm py-2 px-6 border border-black rounded"
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Link to='/add-mcq'>
            <button
              className="bg-purple-400 py-1 px-3 rounded font-semibold text-white"
            >
              Add MCQ
            </button></Link>
          </div>

          <div className="h-[calc(100vh-120px)] overflow-auto mt-2 ">
            <table className="w-[100%] border-collapse">
              {/* head */}
              <thead className="bg-purple-400 text-white sticky top-0">
                <tr>
                  <th>S.no.</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Date Of Contact</th>
                  <th>Action</th>
                </tr>
              </thead>

              {/* body */}
              <tbody>
                {/* {filteredData?.map((item, index) => (
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
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.dateCreated}</td>
                    <td className="flex items-center justify-center">
                      <Link to={`/view-client/${item._id}`}>
                        {" "}
                        <AiFillEye
                          color="#1C5FBA"
                          size="20"
                          className="cursor-pointer"
                        />
                      </Link>
                      <Link to={`/edit-client/${item._id}`}>
                        <HiPencil
                          color="#50B412"
                          className="mx-2 cursor-pointer"
                          size="20"
                        />
                      </Link>
                      <AiFillDelete
                        color="#FF0000"
                        size="20"
                        className="cursor-pointer"
                        // onClick={() => {
                        //   setDeleteModal(true);
                        //   setSelectedEmployeeId(item._id);
                        // }}
                      />
                    </td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
          </div>

        </>
    </div>
  );
}

export default Mcq;