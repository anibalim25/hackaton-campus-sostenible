function Home() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow">
                    <div className="pt-20 flex items-center justify-center flex-col">
                        <h1 className="text-6xl font-bold text-grisaceo-next">ECO-ETSISI</h1>
                        <hr className={`border-green-500 w-[80%] border-2 mt-2 mb-6`}></hr>
                    </div>
                    <div className="flex justify-center mt-8">
                        <button 
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-2xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Ver Contenedores
                        </button>
                    </div>
                </main>    
            </div>
        </>
    )
}

export default Home