import { Outlet } from "react-router";
import SettingHeader from "~/widgets/SettingHeader";
import { Header } from "~/widgets/Header";
import { Footer } from "~/widgets/Footer";

export default function HomePage() {
    return (
        <div>
            <SettingHeader />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}