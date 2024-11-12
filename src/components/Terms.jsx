import { motion } from "framer-motion"
import Footer from "./Footer"

function Terms() {
    return (
        <motion.div
            id="terms"
            className="font-saira"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="bg-[var(--red-darker)] mb-10">
                <div className="max-w-screen-lg m-auto py-20 flex flex-col items-center">
                    <motion.div
                        className="flex items-center"
                        initial={{ opacity: 0, x: 150 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 250 }}
                    >
                        <img src="logo_45x45.png" />
                        <h2 className="text-white text-4xl">A1A DRYER VENT EXPERTS</h2>
                    </motion.div>
                    <motion.div
                        className="font-bold font-red text-7xl sm:text-9xl -mt-2 leading-[56px] sm:leading-[100px] text-center"
                        initial={{ opacity: 0, x: 250 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 350 }}
                    >
                        TERMS AND CONDITIONS
                    </motion.div>
                </div>
            </div>
            <div className="max-w-screen-lg m-auto mt-10 px-4 text-2xl grid grid-cols-[auto_1fr] h-[650px]">
                Terms and Conditions...
            </div>
            <Footer />
        </motion.div>
        )
}

export default Terms