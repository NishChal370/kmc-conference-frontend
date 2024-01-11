import Header from "@/admin/shared/header/Header";
import AdminDayThemeTableContainer from "./container/AdminDayThemeTableContainer";
import AdminDayThemePaginationContainer from "./container/AdminDayThemePaginationContainer";
import AdminDayThemeDayFilter from "./components/AdminDayThemeDayFilter";

function AdminDayTheme() {
      return (
            <>
                  <Header />

                  <section className="w-full h-full flex flex-col gap-6 items-center justify-center">
                        <AdminDayThemeDayFilter />

                        <AdminDayThemeTableContainer />

                        <AdminDayThemePaginationContainer />
                  </section>
            </>
      );
}

export default AdminDayTheme;
