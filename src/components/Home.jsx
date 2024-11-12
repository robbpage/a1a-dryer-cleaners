import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Icon from "./Icon"
import Footer from "./Footer"

const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
}



function Home() {
    return (
    <motion.div
        id="home"
        className="font-saira text-3xl"
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity: 0 }}
    >
        <div className="hero-bg hero1">
                <motion.img 
                    src="logo_360x360.png"
                    key="the_logo"
                    className="m-auto"
                    initial={{ scale: 0.25 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 350 }}
                />
            <h1 className="font-saira font-bold text-center leading-[70px]">
                <div className="text-rose-800 text-[64px] text-shadow-dark">A1A DRYER VENT</div>
                <span className="text-[120px] gradient-expert">EXPERTS</span><br />
                <Link to="tel:5617557522" className="block -mt-4 text-7xl md:text-9xl text-white pb-[80px]">(561)901-3464</Link>
            </h1>
        </div>
        <div className="max-w-screen-lg m-auto mt-20 px-4">
            We specialize in ensuring your home remains safe and efficient by offering top-notch services in dryer vent cleaning, repair/remodel, and installation. With a dedicated team of experts, we take pride in preventing potential fire hazards associated with clogged or poorly maintained dryer vents.
        </div>
        <motion.div 
            className="max-w-screen-lg m-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 px-4 text-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
        >
            <motion.div variants={variants} className="bg-white rounded-xl shadow-xl pb-4">
                <img src="/vent-cleaning.png" className="rounded-t-xl mb-3 w-full" />
                <div className="font-bold font-red text-4xl px-4 pb-3"><span className="hidden">DRYER VENT </span>CLEANING</div>
                <div className="px-4 text-gray-500">We meticulously assess and optimize airflow, conducting thorough tests both before and after our services, ensuring that <span className="text-rose-950">we not only meet but exceed your expectations.</span></div>
            </motion.div>
            <motion.div variants={variants}  className="bg-white rounded-xl shadow-xl pb-4">
                <img src="/vent-installation.png" className="rounded-t-xl mb-3 w-full" />
                <div className="font-bold font-red text-4xl px-4 pb-3"><span className="hidden">DRYER VENT </span>INSTALLATION</div>
                <div className="px-4 pb-5 text-gray-500">
                    Our commitment to seamless service delivery means that we anticipate every need, ensuring that our team has <span className="text-rose-950">all the necessary materials on hand.</span>
                </div>
            </motion.div>
            <motion.div variants={variants}  className="bg-white rounded-xl shadow-xl pb-4">
                <img src="/vent-repair.png" className="rounded-t-xl mb-3 w-full" />
                <div className="font-bold font-red text-4xl px-4 pb-3"><span className="hidden">DRYER VENT </span>REPAIR/REMODEL</div>
                <div className="px-4 pb-5 text-gray-500">
                    Our operations adhere meticulously to industry standards and regulations, ensuring that every aspect of our work is <span className="text-rose-950">always up to code.</span>
                </div>
            </motion.div>
        </motion.div>
        <div className="max-w-screen-lg m-auto px-4 mt-20 text-center">
            Head over to our <Link to="/services" className="link">Services</Link> page for more information.
        </div>
        <div className="bg-[var(--red-dark)] mt-[100px] pt-32 pb-24">
            <div className="max-w-screen-lg m-auto text-center px-4">
                <div className="text-white text-7xl font-bold uppercase">Over 15,000 house fires per year<br className="hidden md:visible" /> are caused by dryer vent fires</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mt-20">
                    <div className="flex flex-col items-center text-white">
                        <Icon id="fire" classes="fill-white w-10" />
                        <span className="text-white text-2xl mt-5"><span className="font-bold text-white">Ensure</span> your home&apos;s safety. Regularly maintained dryer vents safeguard your family from potential fire hazards.</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Icon id="pricetag" classes="fill-white w-10" />
                        <span className="text-white text-2xl mt-5"><span className="font-bold text-white">Optimize savings.</span> A well-maintained dryer vent not only lowers energy costs but also reduces the need for appliance repairs.</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Icon id="fast" classes="fill-white w-10" />
                        <span className="text-white text-2xl mt-5"><span className="font-bold text-white">Efficiency</span> meets longevity. A clean dryer vent reduces drying times and extends the lifespan of both your dryer and clothing.</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Icon id="secure" classes="fill-white w-9" />
                        <span className="text-white text-2xl mt-5"><span className="font-bold text-white">Be proactive.</span> Proactively take measures to prevent the risk of a deadly house fire or carbon monoxide poisoning.</span>
                    </div>
                </div>
                <div className="text-center text-white pt-20">Head over to our <Link to="/benefits" className="link hover:text-[var(--red-darker)]">Benefits</Link> page for more information.</div>
            </div>
        </div>
        

        <div className="hero-bg hero2 min-h-[100vh] md:min-h-[700px] flex flex-col items-center justify-center overflow-x-hidden z-0">
            <motion.span
                className="text-white text-8xl md:text-9xl font-bold text-shadow-dark text-center"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
            >
                PREVENT FIRES.
            </motion.span>
            <motion.span
                className="text-white text-8xl md:text-9xl font-bold text-shadow-dark text-center"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                viewport={{ once: true }}
            >
                CLEAN YOUR DRYERS.
            </motion.span>
        </div>
        <motion.div
            className="max-w-screen-lg m-auto px-4"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            viewport={{ once: true }}
        >
            <div className="text-center font-bold font-red py-20">
                <span className="text-9xl block font-red leading-[90px] mb-5">DON&apos;T WAIT!</span>
                <span className="text-5xl font-red-darker leading-[30px]">CALL TODAY AND SCHEDULE YOUR INSPECTION</span>
                <Link to="tel:5617557522" className="block font-red-dark text-7xl md:text-9xl leading-[150px]">(561)901-3464</Link>
            </div>
            We specialize in comprehensive dryer vent services, including cleaning, remodeling, and installation. With a mission to ensure your home&apos;s safety, we tackle the silent threat of dryer fires by expertly maintaining and upgrading your dryer vents. Our dedicated team combines precision and care to provide top-notch services that not only safeguard your property but also optimize your dryer&apos;s performance.<br /><br />

            Experience peace of mind knowing that A1A Dryer Vent Experts is committed to creating a safer environment for your home. Choose us for excellence, reliability, and a commitment to fire prevention - <strong>because your safety is our priority!</strong>
            <div className="overflow-hidden pb-[56.25%] relative h-0 z-10 mt-20 px-4 rounded-2xl shadow-2xl">
                <iframe 
                    className="absolute top-0 left-0 h-full w-full"
                    width="853"
                    height="480"
                    src="https://www.youtube.com/embed/sSvjAQ0xauM"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        </motion.div>
        <div className="w-full bg-black/10 py-20 px-4 mt-20">
            <div className="max-w-screen-lg m-auto text-center">
                <span className="text-8xl font-bold text-[var(--red-main)]">ANY QUESTIONS?</span><br />
                <span className="text-9xl font-bold font-red-darker leading-[100px]">LET&apos;S CHAT</span>
                <form className="mt-10 flex flex-col items-center gap-5">
                    <input type="text" className="w-full md:w-2/3 px-4 py-2 rounded-xl shadow-lg font-red" placeholder="Your name..." required />
                    <input type="email" className="w-full md:w-2/3 px-4 py-2 rounded-xl shadow-lg font-red" placeholder="Your email..." required />
                    <input type="text" className="w-full md:w-2/3 px-4 py-2 rounded-xl shadow-lg font-red" placeholder="Your address..." />
                    <textarea name="" id="" className="w-full md:w-2/3 h-[160px] px-4 py-2 rounded-xl shadow-lg font-red" placeholder="Your message..." required></textarea>
                    <button className="w-full md:w-2/3 bg-[var(--red-main)] text-white font-bold py-3 rounded-xl hover:bg-[var(--red-dark)] mt-10">
                        SEND YOUR MESSAGE
                    </button>
                </form>
            </div>
        </div>
        <Footer />
    </motion.div>
    )
}

export default Home