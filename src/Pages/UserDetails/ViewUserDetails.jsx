import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { privateRequest } from "../../configs/RequestMethod";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const ViewUserDetails = () => {
  let { id } = useParams();
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  console.log(id)

  const getLeadDetails = async () => {
    try {
      setIsLoading(true);
      const response = await privateRequest.get(`/users/singleUser/${id}`);
      console.log(response.data)
      setUserData(response?.data?.user);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);

    }
  };

  useEffect(() => {
    getLeadDetails();
  }, [id]);

  return (
    <>
      {isLoading === true ? (
        "Loadin..."
      ) : (
        <div>
          <Navbar title={"User Details"}/>
          <Sidebar />
          <div className="ml-20 mt-4">
            <h1 className="bg-purple-400 py-4 px-6 text-xl text-white font-semibold">
              Personal Details
            </h1>
            <div className="grid grid-cols-5 gap-4 items-start p-6 bg-white pb-5 space-y-6 ">
              <div>
                <p className="font-semibold text-lg">User Name</p>
                <p>{userData.name}</p>
              </div>
              <div>
                <p className="font-semibold text-lg">State</p>
                <p>{userData.state}</p>
              </div>
              <div>
                <p className="font-semibold text-lg">District</p>
                <p>{userData.district}</p>
              </div>
              <div>
                <p className="font-semibold text-lg">
                  Mobile Number
                </p>
                <p>{userData.mobileNo}</p>
              </div>
              <div>
                <p className="font-semibold text-lg">
                  Status
                </p>
                <p>{userData.active}</p>
              </div>
              <div className="flex">
                {userData.reference.map((ref , index) => {
                    return(
                        <div key={index}>
                <h1 className="font-semibold text-lg">
                  Refernce {index + 1}
                </h1>
                <div className="flex">
                    <p>
                    Refernce Name
                    </p>
                <p>{userData.active}</p>
                </div>
                <div className="flex">
                    <p>
                    Refernce Mobile No
                    </p>
                <p>{userData.active}</p>
                </div>
              </div>
                    )
                })}
              </div>
              
              
            </div>
            <div className='my-4'>
            <h1 className="bg-purple-400 py-4 px-6 text-xl text-white font-semibold">
             Video Test Details
            </h1>
            <div className="h-[calc(60vh-120px)] overflow-auto mt-2 ">
            <table className="w-[100%] border-collapse">
              {/* head */}
              <thead className="bg-purple-400 text-white sticky top-0">
                <tr>
                  <th>S.no.</th>
                  <th>Subject Name</th>
                  <th>Test Name</th>
                  <th>Test ID</th>
                  <th>Topic Name</th>
                  <th>Action</th>
                </tr>
              </thead>

              {/* body */}
              <tbody>
                {/* {data?.map((item, index) => (
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
                    <td>{moment(item.createdAt).format("MMMM D, YYYY")}</td>
                    <td className="text-center text-2xl text-blue-500  flex justify-center">
                      <Link to={`/view-userDetails/${item._id}`}>
                      <AiFillEye/>
                        </Link></td>

                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
            </div>
            <div className='my-4'>
            <h1 className="bg-purple-400 py-4 px-6 text-xl text-white font-semibold">
             Subject Test Details
            </h1>
            <div className="h-[calc(60vh-120px)] overflow-auto mt-2 ">
            <table className="w-[100%] border-collapse">
              {/* head */}
              <thead className="bg-purple-400 text-white sticky top-0">
                <tr>
                  <th>S.no.</th>
                  <th>Subject Name</th>
                  <th>Test Name</th>
                  <th>Test ID</th>
                  <th>Topic Name</th>
                  <th>Action</th>
                </tr>
              </thead>

              {/* body */}
              <tbody>
                {/* {data?.map((item, index) => (
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
                    <td>{moment(item.createdAt).format("MMMM D, YYYY")}</td>
                    <td className="text-center text-2xl text-blue-500  flex justify-center">
                      <Link to={`/view-userDetails/${item._id}`}>
                      <AiFillEye/>
                        </Link></td>

                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
            </div>
          </div>

          
        </div>
      )}
    </>
  );
};

export default ViewUserDetails;