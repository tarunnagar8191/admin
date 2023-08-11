import { Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Lecture from "./Pages/Lectures/Lectures"
import DashBoard from "./Pages/DashBoard/DashBoard";
import AddLecture from "./Pages/Lectures/AddLecture";
import Mcq from "./Pages/Mcq/Mcq";
import AddMcq from "./Pages/Mcq/AddMcq";
import { QueryClientProvider, QueryClient  } from "react-query";
// import {ReactQueryDevTools} from "react-query/devtools"



function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
        <Routes>
        <Route path="/" element={<DashBoard />} />
          <Route path="/lecture" element={<Lecture />} />
          <Route path="/add-lecture" element={<AddLecture />} />
          <Route path="/mcq" element={<Mcq />} />
          <Route path="/add-mcq" element={<AddMcq />} />

        </Routes>
       {/* <ReactQueryDevTools initialIsOpen={false} postion="bottom-right"/> */}
    </QueryClientProvider>
  );
}

export default App;