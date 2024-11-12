import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Footer from "./Footer"

function Privacy() {
    return (
        <motion.div
            id="privacy"
            className="font-saira"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="bg-[var(--red-darker)] mb-10">
                <div className="max-w-screen-lg m-auto py-20 flex flex-col items-center overflow-x-hidden">
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
                        className="font-bold font-red text-7xl sm:text-9xl -mt-2 sm:-mt-6 leading-[56px] text-center"
                        initial={{ opacity: 0, x: 250 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 350 }}
                    >
                        PRIVACY POLICY
                    </motion.div>
                </div>
            </div>
            <div className="max-w-screen-lg m-auto mt-10 px-4 pb-20 text-2xl">
                <span className="font-bold uppercase">A1A Dryer Vent Experts</span> operates the https://www.a1adryerventexpert.com/ website, which provides information about our services. This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the A1A Dryer Vent Experts website.
                <br /><br />
                If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
                <br /><br />
                The terms used in this Privacy Policy have the same meanings as in our <Link to="/terms-and-conditions" className="underline hover:text-black">Terms and Conditions</Link> unless otherwise defined in this Privacy Policy.
                <br /><br />
                <span className="privhead">Information Collection and Use</span>
                For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.
                <br /><br />
                <span className="privhead">Log Data</span>
                We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer&apos;s Internet Protocol (“IP”) address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
                <br /><br />
                <span className="privhead">Cookies</span>
                Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer&apos;s hard drive.
                <br /><br />
                Our website uses these “cookies” to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.
                <br /><br />
                <span className="privhead">Service Providers</span>
                We may employ third-party companies and individuals due to the following reasons:
                <ul className="ml-6 my-4">
                    <li className="list-decimal">To facilitate our Service;</li>
                    <li className="list-decimal">To provide the Service on our behalf;</li>
                    <li className="list-decimal">To perform Service-related services; or</li>
                    <li className="list-decimal">To assist us in analyzing how our Service is used.</li>
                </ul>
                We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
                <br /><br />
                <span className="privhead">Security</span>
                We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                <br /><br />
                <span className="privhead">Links to Other Sites</span>
                Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we privheadly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                <br /><br />
                <span className="privhead">Children&apos;s Privacy</span>
                Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
                <br /><br />
                <span className="privhead">Changes to This Privacy Policy</span>
                We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
                <br /><br />
                <span className="privhead">Contact Us</span>
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to <Link to="/contact" className="underline hover:text-black">contact us</Link>.
            </div>
            <Footer />
        </motion.div>
        )
}

export default Privacy