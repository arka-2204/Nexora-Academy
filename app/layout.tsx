import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Nexora Academy | Learn. Build. Grow.',description:'Learn Python, React, web development and AI. Practical courses by Web Express.',icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
