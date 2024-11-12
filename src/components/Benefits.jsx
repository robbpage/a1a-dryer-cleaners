import { motion } from "framer-motion"
import Footer from "./Footer"
import Icon from "./Icon"

function Benefits() {
    return (
        <motion.div
            id="benefits"
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
                    BENEFITS
                    <span className="w-full block mt-1 top-[18px] left-[-18px] text-3xl text-white pb-20 max-[599px]:mt-[-146px] min-[599px]:absolute max-[699px]:top-0 min-[700px]:left-[-73px]">A1A DRYER VENT EXPERTS</span>
                </motion.h1>
            </div>
            <div className="max-w-screen-lg m-auto mt-10 px-4 text-3xl">
                Most people never even think about it. Our dryer vents sit ignored for years, silently building up lint and debris blockages. It&apos;s easy to miss as the effects are gradual over time but eventually you realize that your dryer takes a LOT longer to dry than it used to. Or you have to run it twice just to get the clothing dry. Or maybe you even smell a faint burning odor...
                <div className="font-red font-bold text-5xl my-14 text-center">THE BENEFITS OF REGULAR DRYER VENT CLEANING</div>
                <div className="flex justify-between items-center">
                    <div className="hidden sm:block"><Icon id="fire" classes="fill-[var(--red-main)] w-[150px] pr-10" /></div>
                    <div className=""><strong className="font-black/50">Reduced risk of a house fire.</strong> Lint is a leading cause of combustion and accounts for 28% of all residential dryer fires, according to the National Fire Incident Reporting System (http://www.usfa.fema.gov/downloads/pdf/statistics/v13i7.pdf). Failure to the clean dryer vent is a contributing cause in many dryer fires.</div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="hidden sm:block"><Icon id="money" classes="fill-[var(--red-main)] w-[150px] pr-10 pt-10" /></div>
                    <div className=" pt-10"><strong className="font-black/50">Lowered energy costs.</strong> Lint buildup in your dryer vent means your dryer will take longer to dry your clothes. And that means, you&apos;ll have to run your dryer more, which leads to higher utility bills. By cleaning your dryer vent, your dryer will run more efficiently and save you money.</div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="hidden sm:block"><Icon id="dryer" classes="fill-[var(--red-main)] w-[150px] pr-10 pt-10" /></div>
                    <div className=" pt-10"><strong className="font-black/50">Extended dryer life.</strong> A blocked dryer vent can cause your dryer to work harder, which means it can wear down faster, requiring costly maintenance repairs. Also lint buildup can cause your dryer to overheat, damaging sensitive sensors. Properly maintained dryer vents enable your dryer to work more efficiently, extending the life of your dryer.</div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="hidden sm:block"><Icon id="shirt" classes="fill-[var(--red-main)] w-[150px] pr-10 pt-10" /></div>
                    <div className="pt-10"><strong className="font-black/50">Increased life of your clothes.</strong> When your dryer vent is blocked, your dryer can overheat, damaging the fibers in your clothes. Additionally, you&apos;ll have to run your clothes through your dryer longer, which can cause the clothing fibers to wear out faster. </div>
                </div>
            </div>
            <div className="hero-bg hero6 min-h-[700px] mt-20 flex flex-col justify-center items-center text-center px-4">
                <span className="text-white text-7xl font-bold">CLEAN YOUR LINT FILTER WITH EVERY LOAD.</span>
                <span className="text-white text-7xl font-bold">HAVE YOUR DRYER VENTS CLEANED ONCE PER YEAR.</span>
            </div>
            <Footer />
        </motion.div>
        )
}

export default Benefits