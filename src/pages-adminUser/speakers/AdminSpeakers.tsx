import Header from "@/shared-adminUser/header/Header";
import AdminSpeakerTable from "./components/AdminSpeakerTable";

function AdminSpeakers() {
      return (
            <>
                  <Header />

                  <section className="w-full h-full flex flex-col items-center justify-center">
                        <AdminSpeakerTable />
                        {/* <AdminSpeakersDetail /> */}
                  </section>
            </>
      );
}

export default AdminSpeakers;
