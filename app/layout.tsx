import { SessionProvider } from "@/components/SessionProvider"
import SideBar from "../components/SideBar"
import { getServerSession } from "next-auth"
import "./globals.css"
import Login from "../components/Login"
import { authOptions } from "./api/auth/[...nextauth]"
import ClientProvider from "@/components/ClientProvider"
import React from "react";


export default async function RootLayout({
                                           children,
                                         }: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);


  return (
      <html>
      <body>


      <SessionProvider session={session}>
        {!session ? (
            <Login />
        ) : (
      
        
            <div className="flex">
              {/* Sidebar */}
              <div className="bg-gradient-to-t from-black to-[#4d4e57] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <SideBar />
              </div>

              {/* ClientProvider - Notification */}
              <ClientProvider />

              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
            
          )}



      </SessionProvider>
      </body>
      </html>
  )
}
