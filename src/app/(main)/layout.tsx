import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center h-screen">
      <div className="flex-1 overflow-y-auto hide-scrollbar ">
          <div className="relative w-full">
            <Header />
          </div>


          {children}
          <div className="relative w-full lg:hidden">
            <Footer />
          </div>
        </div>
      

    </div>
  );
}
