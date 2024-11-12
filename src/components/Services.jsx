import { motion } from "framer-motion"
import Footer from "./Footer"

function Services() {
    function onServiceClick(section) {
        document.getElementById(section).classList.contains('opacity-0') ? document.getElementById(section).classList.remove('opacity-0') : document.getElementById(section).classList.add('opacity-0')
    }
    return (
        <motion.div
            id="services"
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
                    className="text-[140px] font-bold min-[599px]:inline-block max-[699px]:text-[100px] relative font-red text-shadow-dark2"
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 350 }}
                >
                    SERVICES
                    <motion.span
                        className="w-full block mt-1 top-[18px] left-[-18px] text-3xl text-white pb-20 max-[599px]:mt-[-146px] min-[599px]:absolute max-[699px]:top-0 min-[700px]:left-[-73px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        A1A DRYER VENT EXPERTS
                    </motion.span>
                </motion.h1>
            </div>

            <div className="max-w-screen-lg m-auto my-10 px-4">
                <div id="service-cleaning" className="hero-bg hero3 mb-10 py-24 px-4 overflow-hidden rounded-xl shadow-xl text-center">
                    <h2 className="text-white text-6xl md:text-7xl font-bold leading-[50px] text-shadow-dark">DRYER VENT<br className="md:hidden" /> CLEANING</h2>
                    <div id="clean" onClick={() => onServiceClick("clean")} className="opacity-0 cursor-pointer text-black text-2xl bg-white absolute inset-0 flex flex-col justify-center text-left px-10 transition-opacity">
                        <h3 className="font-red font-bold text-4xl">CLEANING</h3>
                        We target hidden lint, dust, and debris buildup in dryer vents, ensuring optimal airflow and preventing fire hazards. Removing blockages enhances dryer efficiency and shortens drying times.
                    </div>
                </div>
                <div id="service-cleaning" className="hero-bg hero4 mb-10 py-24 px-4 overflow-hidden rounded-xl shadow-xl text-center">
                    <h2 className="text-white text-6xl md:text-7xl font-bold leading-[50px] text-shadow-dark">DRYER VENT<br className="md:hidden" /> INSTALLATION</h2>
                    <div id="install" onClick={() => onServiceClick("install") } className="opacity-0 cursor-pointer text-black text-2xl bg-white absolute inset-0 flex flex-col justify-center text-left px-10">
                        <h3 className="font-red font-bold text-4xl">INSTALLATION</h3>
                        We install dryer vents that promote airflow and minimize the risk of lint buildup, reducing fire hazards and enhancing appliance performance. Faster drying, longer life for your dryer.
                    </div>
                </div>
                <div id="service-cleaning" className="hero-bg hero5 py-24 px-4 overflow-hidden rounded-xl shadow-xl text-center">
                    <h2 className="text-white text-6xl md:text-7xl font-bold leading-[50px] text-shadow-dark">DRYER VENT<br className="md:hidden" /> REPAIR/REMODEL</h2>
                    <div id="repair" onClick={() => onServiceClick("repair")} className="opacity-0 cursor-pointer text-black text-2xl bg-white absolute inset-0 flex flex-col justify-center text-left px-10">
                        <h3 className="font-red font-bold text-4xl">REPAIR/REMODEL</h3>
                        If during our inspection we see that your vent system needs repaired, our team is able to repair, or if needed, remodel your vent system to get it running optimally.
                    </div>
                </div>
            </div>
            <Footer />
        </motion.div>
        )
}

export default Services