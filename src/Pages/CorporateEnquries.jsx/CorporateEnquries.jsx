import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import {Link} from "react-router-dom"


function Lectures() {
//   const [openDrawer, setOpenDrawer] = useState(false);
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [deleteModal, setDeleteModal] = useState(false);
//   const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   const getAllClients = async () => {
//     try {
//       setIsLoading(true);
//       const response = await privateRequest.get("/client/");
//       console.log(response.data);
//       setData(response?.data?.data);
//       setIsLoading(false);
//     } catch (error) {
//       console.log(error);
//       setIsLoading(false);

//     }
//   };

//   useEffect(() => {
//     getAllClients();
//   }, []);

//   const filteredData = data?.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const deleteClient = async (id) => {
//     try {
//       const response = await privateRequest.delete(`/client/${id}`);
//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await deleteClient(id);
//       getAllClients();
//       setDeleteModal(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const handleCancelDelete = () => {
//     setDeleteModal(false);
//   };

  return (
    <div className="">
      <>
          {/* {deleteModal && (
            <DeleteModal
              deleteModal={deleteModal}
              handleCancelDelete={handleCancelDelete}
              handleDelete={handleDelete}
              selectedEmployeeId={selectedEmployeeId}
            />
          )} */}
          <div className="pl-8 pt-4 mt-4 pr-4">
          

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

          {/* <Drawer
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            direction="right"
            size="700px"
            duration="100"
          >
            <AddClient
              onClose={() => setOpenDrawer(false)}
              getAllClients={getAllClients}
            />
          </Drawer> */}
        </>
    </div>
  );
}

export default Lectures;