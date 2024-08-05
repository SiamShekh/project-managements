import { useState } from "react";
import background from "../assets/images/Programmer_In_FrontOfDesktop.webp";

const ProjectRequirements = () => {
    const [addNewModal, setNewModal] = useState(false);

    return (
        <div className="text-black relative h-screen w-full ">
            <img src={background} alt="programmer" className="absolute w-full object-cover h-full z-0" />
            <div className="absolute z-10 w-full h-full bg-gradient-to-r from-white via-transparent to-white" />

            <div className="relative z-20 m-auto py-5">
                <p className="text-2xl font-Genos text-black cursor-pointer capitalize">project: ami ar tomi</p>

                <div className="flex justify-between items-center my-5">
                    <p className="text-xl font-thin text-black capitalize">total task: 14</p>
                    <button onClick={() => setNewModal(true)} className="px-7 font-Teko text-2xl py-1 bg-white bg-opacity-40 backdrop-blur-xl rounded-full border border-black hover:bg-primary cursor-pointer">Add New</button>
                </div>

                <div className="overflow-x-auto bg-white bg-opacity-40 backdrop-blur-xl border border-black rounded-2xl">
                    <table className="table">
                        <thead>
                            <tr className="text-black font-Genos text-xl">
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody className="text-black">
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            {
                addNewModal &&
                <dialog id="my_modal_5" open className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box border border-black bg-white backdrop-blur-sm bg-opacity-30 rounded-xl p-5">
                        <p className="text-2xl font-Genos text-black cursor-pointer">Add projects requirements</p>
                        <input
                            type="text"
                            placeholder="projects name*"
                            className="bg-transparent outline-none px-3 py-2 rounded-xl text-black placeholder:text-black mt-5 border border-black w-full " />

                        <button className="bg-primary w-fit mx-auto outline-none px-3 py-2 rounded-xl text-black placeholder:text-black mt-5 border border-black">Add projects</button>

                        <div className="modal-action">
                            <form method="dialog">
                                <button className="bg-primary w-fit mx-auto outline-none px-3 py-2 rounded-xl text-black placeholder:text-black mt-5 border border-black" onClick={() => setNewModal(false)}>Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            }

        </div>
    );
};

export default ProjectRequirements;