import "./globals.css";

export const metadata = {
   title: "myTOdo App",
   description: "An interactive  todo application",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className="bg-no-repeat bg-gradient-to-br from-black via-gray-900 to-[#1a1a2e] ">
            
            <div className=" md:mx-24 md:my-4  p-8 rounded-3xl shadow-md shadow-black">
               
                  {children}
               
            </div>
         </body>
      </html>
   );
}
