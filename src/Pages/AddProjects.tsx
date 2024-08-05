import background from "../assets/images/Programmer_In_FrontOfDesktop.webp";

const AddProjects = () => {
    return (
        <div className="text-black relative h-screen w-full flex justify-center items-center">
            <img src={background} alt="programmer" className="absolute w-full object-cover h-full z-0" />
            <div className="absolute z-10 w-full h-full bg-gradient-to-r from-white via-transparent to-white" />

            <div className="relative z-20 m-auto ">
                <div className="border border-black bg-white backdrop-blur-sm bg-opacity-30 rounded-xl p-5">
                    <p className="text-2xl font-Genos text-black cursor-pointer">Add new projects</p>

                    <input
                        type="text"
                        placeholder="projects name*"
                        className="bg-transparent outline-none px-3 py-2 rounded-xl text-black placeholder:text-black mt-5 border border-black w-full " />

                    <button className="bg-primary w-fit mx-auto outline-none px-3 py-2 rounded-xl text-black placeholder:text-black mt-5 border border-black">Add projects</button>
                </div>
            </div>
        </div>
    );
};

export default AddProjects;