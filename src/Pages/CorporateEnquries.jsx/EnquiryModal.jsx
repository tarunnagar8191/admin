import React from "react";
import classes from "./CorporateEnquiries.module.css";
const EnquiryModal = (props) => {
  const data = props?.data;
  const modal = props?.modal;
  const setModal = props?.setModal;
  if (!modal) return null;
  return (
    <div className={classes.modal}>
      <div className="bg-white rounded px-4 py-2 w-[1200px] mt-5">
        <div>
          <p className="text-2xl font-bold text-gray-900 py-2">Enquiry Data</p>
          <div>
            <div className="grid grid-cols-[1fr_1fr] gap-4">
              <div className={classes.enquiryData}>
                <p className="text-lg font-semibold text-gray-900">Name: </p>
                <input
                  type="text"
                  readOnly
                  value={data?.name}
                  className={classes.inputField}
                />
              </div>
              <div className={classes.enquiryData}>
                <p className="text-lg font-semibold text-gray-900">Email :</p>
                <input
                  type="text"
                  readOnly
                  value={data?.email}
                  className={classes.inputField}
                />
              </div>
            </div>
            <div className="grid grid-cols-[1fr_1fr] gap-4">
              <div className={classes.enquiryData}>
                <p className="text-lg font-semibold text-gray-900">Date: </p>
                <input
                  type="text"
                  readOnly
                  value={data?.updatedAt?.slice(0, 10)}
                  className={classes.inputField}
                />
              </div>
              <div className={classes.enquiryData}>
                <p className="text-lg font-semibold text-gray-900 ">Phone no</p>
                <input
                  type="text"
                  readOnly
                  value={data?.phone}
                  className={`${classes.inputField}  capitalize`}
                />
              </div>
            </div>
            <div className="grid grid-cols-[1fr_1fr] gap-4">
              <div className={classes.enquiryData}>
                <p className="text-lg font-semibold text-gray-900">
                  Organiztion:{" "}
                </p>
                <input
                  type="text"
                  readOnly
                  value={data?.organization}
                  className={classes.inputField}
                />
              </div>
              <div className={classes.enquiryData}>
                <p className="text-lg font-semibold text-gray-900 ">
                  Company Size
                </p>
                <input
                  type="text"
                  readOnly
                  value={data?.companySize}
                  className={`${classes.inputField}  capitalize`}
                />
              </div>
            </div>
            <div className="grid grid-cols-[1fr_1fr] gap-4">
              <div className={classes.enquiryData}>
                <p className="text-lg font-semibold text-gray-900 ">Courses</p>
                <input
                  type="text"
                  readOnly
                  value={data?.course}
                  className={`${classes.inputField}  capitalize h-[40px]`}
                />
              </div>
              <div className={classes.enquiryData}>
                <p className="text-lg font-semibold text-gray-900 ">Message:</p>
                <textarea
                  type="text"
                  readOnly
                  value={data?.message}
                  className={`${classes.inputField} resize-none capitalize h-[150px]`}
                />
              </div>
            </div>
          </div>
          <div className="flex py-2 justify-end">
            <button
              onClick={() => setModal(false)}
              className="bg-gray-200 text-gray-900 px-5 py-1 rounded w-fit text-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
