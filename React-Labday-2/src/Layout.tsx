import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const layout = ()=>{
    return(
        <div>
            <div>
                <Toaster/>
            </div>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default layout