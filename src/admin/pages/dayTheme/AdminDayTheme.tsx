import Header from "@/admin/shared/header/Header";
import AdminDayThemeTableContainer from "./container/AdminDayThemeTableContainer";
import AdminDayThemePaginationContainer from "./container/AdminDayThemePaginationContainer";

function AdminDayTheme() {
      return (
            <>
                  <Header />

                  <section className="w-full h-full flex flex-col gap-6 items-center justify-center">
                        <AdminDayThemeTableContainer />

                        <AdminDayThemePaginationContainer />
                  </section>
            </>
      );
}

export default AdminDayTheme;
