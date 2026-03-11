import Header from "../components/Header"


export default function HomePage() {
    return (
        <>
            <Header />
            <main>

                <div className="bg-white aspect-9/12 max-w-2xl flex justify-center items-center mx-auto m-4">I am a page!</div>
                <div className="bg-accent border-y border-secondary min-h-10" />

                <p className="bg-white m-4 max-w-2xl mx-auto p-4">Blah blah blah comic stuff</p>
            </main>



        </>
    );
}