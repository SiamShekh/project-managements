import { GrGoogle } from "react-icons/gr";
import image from "../assets/images/coding.webp";
import { BsTwitterX } from "react-icons/bs";

const Login = () => {
    return (
        <div className="min-h-screen w-full flex justify-center md:justify-end items-center relative">
            <img src={image} alt="coding" className="w-full h-full object-cover absolute -z-10" />
            <div className="absolute w-full h-full bg-gradient-to-l from-black to-transparent"></div>

            <div className="z-10 md:mr-10 px-5 md:px-5">
                <div className="lg:my-10">
                    <p className="text-4xl font-Teko  text-white">Login to your Account</p>
                    <p className="text-xl font-Genos  text-white">See what is going on with your business</p>
                </div>
                <div className="px-5 py-2 rounded-xl border capitalize border-white text-white flex items-center gap-3 text-3xl font-Teko"><GrGoogle />contiune with google</div>
                <div className="divider font-Genos text-white opacity-70">or Sign in with Email                </div>

                <div className="">
                    <div className="">
                        <p className="text-white font-Teko text-xl">Email*</p>
                        <input type="text" placeholder="email" className="px-5 py-2 rounded-xl border capitalize border-white text-white flex items-center gap-3 w-full font-Teko" />
                    </div>
                    <div className="mt-5">
                        <p className="text-white font-Teko text-xl">Password*</p>
                        <input type="text" placeholder="password" className="px-5 py-2 rounded-xl border capitalize border-white text-white flex items-center gap-3 w-full font-Teko" />
                    </div>

                    <button className="text-white font-Teko text-2xl w-full bg-blue-500 py-2 rounded-lg mt-5">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;