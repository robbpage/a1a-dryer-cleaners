import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Icon from "./Icon"

function Footer() {
    return (
        <footer className="w-full bg-[var(--red-darker)] pt-[50px] px-4">
            <div className="max-w-screen-lg m-auto grid md:grid-cols-[auto_1fr] gap-10">
                <div className="flex justify-center md:justify-left">
                    <motion.img 
                        src="logo_180x180.png"
                        key="the_logo"
                        className="mt-6"
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 350 }}
                    />
                    <h5 className="font-saira font-bold text-center leading-[40px] min-[410px]:leading-[50px] mt-7">
                        <div className="text-white text-[30px] min-[410px]:text-[44px]">A1A DRYER VENT</div>
                        <span className="text-[60px] min-[410px]:text-[84px] text-white">EXPERTS</span><br />
                        <Link to="tel:5617557522" className="block -mt-2 text-4xl min-[410px]:text-5xl md:text-7xl md:text-[52px] font-red">(561)901-3464</Link>
                    </h5>
                </div>
                <div className="text-center mt-2 text-[24px] md:text-right">
                    <div className="text-white">
                        Boynton Beach, FL<Icon id="location" classes="fill-white w-8 inline mt-[-7px] ml-1" />
                    </div>
                    <div className="text-white">
                        <Link to="mailto:kcvents@gmail.com" target="_blank" className="hover:underline">
                            kcvents@gmail.com<Icon id="email" classes="fill-white w-8 inline mt-[-7px] ml-1" />
                        </Link>
                    </div>
                    <div className="text-white">
                        <Link to="https://www.facebook.com" target="_blank" className="hover:underline">
                            Facebook<Icon id="facebook" classes="fill-white w-7 inline mt-[-7px] pr-1 ml-2" />
                        </Link>
                    </div>
                    <div className="text-white">
                        <Link to="https://www.twitter.com" target="_blank" className="hover:underline">Twitter<Icon id="twitter" classes="fill-white w-7 inline mt-[-7px] pr-1 ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-lg m-auto text-center min-[699px]:flex min-[699px]:justify-between py-4 border-t-[1px] border-black/50 mt-10">
                <span className="text-white text-2xl inline-block self-center">
                    <span className="text-white text-shadow-dark uppercase max-[490px]:block inline">© { new Date().getFullYear() } <strong className="text-white">A1A Dryer Vent Experts</strong></span> All rights reserved
                </span>
                <span className="text-2xl inline-block self-center">
                    <Link to="/privacy-policy" className="text-white text-2xl hover:underline">Privacy Policy</Link>
                    <Link to="/terms-and-conditions" className="text-white text-2xl ml-5 hover:underline">Terms and Conditions</Link>
                </span>
            </div>
        </footer>
    )
}

export default Footer