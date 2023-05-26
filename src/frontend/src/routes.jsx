import { Route, Routes } from "react-router-dom";
import TabsManagerComponent from "./pages/FlowPage/components/tabsManagerComponent";


const Router = () => {
   return(
        <Routes>
            <Route path="/" element={<TabsManagerComponent/>}/>
       </Routes>
   )
}

export default Router;