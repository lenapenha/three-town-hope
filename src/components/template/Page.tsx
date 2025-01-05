import Footer from "./Footer";
import Header from "./Header";

export interface PageProps {
    children: React.ReactNode;
    className?: string;
}

export default function Page(props: PageProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-col boxed relative grow">
                <main className="flex-1">  
                    {props.children}
                </main>
            </div>
            <Footer />
        </div>
    );
}