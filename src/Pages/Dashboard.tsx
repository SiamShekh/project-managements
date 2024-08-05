import { BiDownArrow } from "react-icons/bi";
import { GrDashboard } from "react-icons/gr";

const Dashboard = () => {

   

    return (
        <div className="mt-5 mx-auto">
            <div className="flex justify-between items-center">
                <p className="text-black font-Teko text-2xl">Overview</p>
                <select className="select w-fit bg-white border border-black outline-none">
                    <option disabled selected>Last 30 day</option>
                    <option>Last 13 day</option>
                    <option>Last 7 day</option>
                    <option>Last 3 day</option>
                    <option>Last 24 hour</option>
                </select>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 mt-5">
                <div className="border border-black w-full h-40 rounded-xl p-5">
                    <div className=" size-10 bg-blue-700 rounded-full flex justify-center items-center text-white text-2xl">
                        <GrDashboard />
                    </div>
                    <p className="text-black opacity-90 font-Genos mt-5">Total Project</p>
                    <p className="text-black opacity-90 font-Teko text-5xl">50</p>
                </div>
                <div className="border border-black w-full h-40 rounded-xl p-5">
                    <div className=" size-10 bg-blue-700 rounded-full flex justify-center items-center text-white text-2xl">
                        <GrDashboard />
                    </div>
                    <p className="text-black opacity-90 font-Genos mt-5">Total Project</p>
                    <p className="text-black opacity-90 font-Teko text-5xl">50</p>
                </div>
                <div className="border border-black w-full h-40 rounded-xl p-5">
                    <div className=" size-10 bg-blue-700 rounded-full flex justify-center items-center text-white text-2xl">
                        <GrDashboard />
                    </div>
                    <p className="text-black opacity-90 font-Genos mt-5">Total Project</p>
                    <p className="text-black opacity-90 font-Teko text-5xl">50</p>
                </div>
                <div className="border border-black w-full h-40 rounded-xl p-5">
                    <div className=" size-10 bg-blue-700 rounded-full flex justify-center items-center text-white text-2xl">
                        <GrDashboard />
                    </div>
                    <p className="text-black opacity-90 font-Genos mt-5">Total Project</p>
                    <p className="text-black opacity-90 font-Teko text-5xl">50</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mt-5 w-full">
                <div className="col-span-2  border border-black rounded-xl overflow-hidden">
                    <p className="font-Teko text-black text-2xl text-center border-b-black border-b w-fit mx-auto cursor-pointer">Projects:</p>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-black font-Genos text-xl">
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody className="text-black opacity-90">
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                                {/* row 2 */}
                                <tr className="hover">
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
                <div className="col-span-1 border border-black rounded-xl">
                    <p className="font-Teko text-black text-2xl text-center border-b-black border-b w-fit mx-auto cursor-pointer">Last Task:</p>
                    <p className="text-black opacity-85 text-justify p-2  w-fit mx-auto h-52 overflow-hidden">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt dolor architecto, officiis eos veritatis reiciendis. Eos facere et numquam dolorem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est beatae commodi exercitationem quidem consectetur voluptate incidunt adipisci ad, tempore in?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eligendi, vel aperiam, numquam cumque voluptatem adipisci unde quaerat, similique voluptatibus soluta consequatur modi officia quod eum! Expedita, blanditiis id distinctio placeat animi iusto, omnis eligendi sapiente autem illo quod vero quasi veritatis est ea alias odit error doloribus tenetur maxime?
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;