import { Outlet } from "react-router";

export default function HomePage() {
    return (
        <div>
            <div className="bg-blue-500 text-white p-4 text-center font-bold"> Header </div>
            <Outlet />
        </div>
    )
}