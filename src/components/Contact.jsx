import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Footer from "./Footer"
import Icon from "./Icon"

function Contact() {
    return (
        <motion.div
            id="contact"
            className="font-saira"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="bg-[var(--red-darker)] text-center py-12 overflow-x-hidden">
                <motion.img 
                    src="logo_180x180.png"
                    key="the_logo"
                    className="m-auto inline min-[599px]:mt-[-80px] min-[700px]:mt-[-100px]"
                    initial={{ scale: 0.25 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 350 }}
                />
                <motion.h1
                    className="text-[140px] font-bold min-[599px]:inline-block max-[699px]:text-[100px] relative"
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 350 }}
                >
                    <span className="font-red text-shadow-dark2">CONTACT US</span>
                    <span className="w-full block mt-1 top-[18px] left-[-54px] text-3xl text-white pb-20 max-[599px]:mt-[-146px] min-[599px]:absolute max-[699px]:top-0 min-[700px]:left-[-122px]">A1A DRYER VENT EXPERTS</span>
                </motion.h1>
            </div>
            
            
            
            
            <div className="max-w-screen-sm m-auto text-3xl">
                <div className="flex flex-col justify-center items-center mt-10 sm:flex-row sm:gap-10">
                    <Link to="tel:5617557522" className="text-5xl font-bold text-[var(--red-main)] cursor-pointer">(561)901-3464</Link>
                    <Link to="mailto:kcvents@gmail.com" className="text-[var(--red-main)] cursor-pointer hover:underline">kcvents@gmail.com</Link>
                    <div className="cursor-pointer">
                        <Icon id="facebook" classes="fill-[var(--red-main)] w-7 inline mt-[-7px] pr-1" />
                        <Icon id="instagram" classes="fill-[var(--red-main)] w-7 inline mt-[-7px] pr-1 ml-2" />
                        <Icon id="twitter" classes="fill-[var(--red-main)] w-7 inline mt-[-7px] pr-1 ml-2" />
                    </div>
                </div>
                <div className="px-4 text-justify py-10">Have questions about your dryer vents? Ready to schedule service or an inspection? Reach out to <strong>A1A Dryer Vent Experts</strong> today! Our knowledgeable team is standing by to assist you with all your dryer vent needs. Contact us now to ensure your home&apos;s safety and efficiency.</div>
                <form className="flex flex-col items-center gap-5 m-auto px-4">
                    <input type="text" className="w-full px-4 py-2 rounded-xl shadow-lg font-red" placeholder="Your name..." required />
                    <input type="email" className="w-full px-4 py-2 rounded-xl shadow-lg font-red" placeholder="Your email..." required />
                    <input type="text" className="w-full px-4 py-2 rounded-xl shadow-lg font-red" placeholder="Your address..." />
                    <textarea className="w-full h-[160px] px-4 py-2 rounded-xl shadow-lg font-red" placeholder="Your message..." required></textarea>
                    <button className="w-full bg-[var(--red-dark)] text-white text-3xl font-bold py-3 rounded-xl mt-10 hover:bg-[var(--red-main)]">
                        SEND YOUR MESSAGE
                    </button>
                </form>
                <div className="py-10 px-4 text-center text-lg text-black/50">Any data/information you send to us through our website is used for business purposes only.<br />We do not sell your data to any 3rd parties.</div>
            </div>
            <Footer />
        </motion.div>
    )
}

export default Contact