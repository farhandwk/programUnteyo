import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Asumsi file-file ini ada di proyek Anda
import Header from "./Header" 
import Footer from "./Footer"
import "./App.css"

// Di lingkungan lokal Anda, Anda bisa menggunakan impor ini:
import bg1 from "./assets/bg1.jpeg"
import bg2 from "./assets/bg2.png"
import bg3 from "./assets/bg3.jpeg"

const divePrograms = [
    {id: 1, title: "Creative Media", text: "Unteyo Journey consistently produces and shares high-quality content designed for student empowerment. This includes everything from in-depth articles that foster critical thinking to practical guides filled with actionable resources for self-development. In addition to the content we provide, this pillar also functions as a dedicated creative outlet , offering an ecosystem where students can showcase their own projects and transform passive learning into active creation."},
    {id: 2, title: "Movement", text: "The Movement program is designed to bridge the gap between theoretical knowledge and real-world application. We inspire and facilitate tangible action by encouraging students to collaborate on innovative projects that create real solutions for the world around them. This is where ideas become impact, actively contributing to the development of a generation of innovators and problem-solvers ready to realize a national vision."},
    {id: 3, title: "Sharing Session", text: "Our Sharing Sessions are interactive and inspiring events designed to foster a dynamic and supportive community. These gatherings provide a valuable space for students to connect with peers and experts, engage in insightful discussions, and apply their learning to real-world challenges. It’s an opportunity to practice critical thinking and exchange knowledge on a wide range of academic and non-academic issues."},
    {id: 4, title: "Social Education", text: "Through Social Education, we provide the essential information and resources necessary for holistic student development. Our curated content is designed to cover the full student experience, addressing critical academic and non-academic topics. This pillar exists to equip students with the relevant knowledge and actionable tools they need to navigate their challenges and build a strong foundation for their future."},
    {id: 5, title: "Short Course", text: "Our Short Courses are structured workshops and practical guides focused on targeted skill development. These programs are dedicated to the cultivation of essential skills and mindsets—such as critical and design thinking—that are vital for becoming a high-caliber professional. Each course provides actionable knowledge, empowering students to move beyond passive learning and take an active role in shaping their own future."},
]
const faq = [
    {id: 1, title: "How can I join or participate in Unteyo Journey's programs?", text: "You can participate by joining our various events, such as workshops, webinars, and discussions, which we regularly organize. We announce these opportunities through our official channels. We recommend following our social media and checking our Event page for the latest program schedules and registration details. We welcome all proactive students ready to take an active role in their development."},
    {id: 2, title: "Who is the target audience for these programs? Is it only for university students?", text: "Our platform is designed for proactive students, from those in higher education to individuals preparing for their university years. We cater to forward-thinkers, creative problem-solvers, and anyone who looks beyond academic achievements and is actively seeking opportunities for self-development. If you are ready to move beyond passive learning, our programs are for you. (tambahkan fresh graduate)"},
    {id: 3, title: "What are the main benefits I will get from participating in these programs?", text: "By participating, you will gain holistic self-development that goes beyond academic achievements. Our programs are specifically designed to sharpen fundamental skills like critical and design thinking , while bridging the gap between theoretical knowledge and real-world application through interactive events. You will also become part of a supportive community ecosystem, connecting with peers and experts to turn your potential into tangible impact."},
    {id: 5, title: "What are some real examples of activities held under program pillars like 'Movement' or 'Sharing Session'?", text: "Our program pillars translate into various tangible activities. For example, a Sharing Session could be an interactive webinar with an industry expert or a facilitated discussion among students. A Movement is realized through a collaborative project to create real solutions for a community issue, allowing you to create real-world impact. Additionally, our Short Courses are practical workshops designed to teach specific skills, such as applying design thinking to a case study."},
    {id: 6, title: "Is there a fee to participate in the events or programs held?", text: "Our purpose is to be a dedicated student empowerment media platform by providing accessible information and resources. Many of our events and online content are available free of charge. For certain specialized workshops that require more extensive resources, a nominal fee may apply to cover costs. We are committed to transparency, and any associated costs will always be clearly stated in the program or event announcement."},
]

// === PERUBAHAN UTAMA ADA DI SINI ===
// Komponen Modal sekarang menampilkan konten unik berdasarkan ID
const Modal = ({ activeModalId, onClose }) => {
    if (!activeModalId) return null;

    // Fungsi untuk merender konten modal yang spesifik
    const renderModalContent = () => {
        switch (activeModalId) {
            case 1:
                return {
                    title: "Brief & Philosophy",
                    content: (
                        <section className="space-y-4 text-white flex flex-col items-center gap-0 w-full text-justify pb-12">
                            <span className='text-md'>Our programs form an integrated ecosystem designed to unlock student potential and drive real-world impact. Through pillars like Creative Media and Social Education, we promote holistic self-development by encouraging critical thinking, design thinking, and active learning. Each program challenges students to go beyond conventional approaches and become proactive problem-solvers.</span>
                            <span className='text-md'>We believe every student holds valuable potential. By addressing both academic and non-academic challenges, we nurture well-rounded individuals ready to face modern issues. Our mission is to equip students with the mindset, tools, and community support needed to transform passive learning into meaningful action and build a strong foundation for their future.</span>
                        </section>
                    )
                };
            case 2:
                return {
                    title: "Dive Into Our Programs",
                    content: (
                        <section className="space-y-4 text-white flex flex-col items-center gap-4 text-justify pb-12">
                            {divePrograms.map((item) => (
                                <div key={item.id} className='flex flex-col gap-2 items-center'>
                                    <h4 className='text-lg font-semibold'>{item.title}</h4>
                                    <span className='text-md'>{item.text}</span>
                                </div>
                            ))}
                        </section>
                    )
                };
            case 3:
                return {
                    title: "Frequetly Asked Questions",
                    content: (
                        <section className="space-y-4 text-white flex flex-col items-center gap-4 text-justify pb-12">
                            {faq.map((item) => (
                                <div key={item.id} className='flex flex-col gap-2 items-center'>
                                    <h4 className='text-lg font-semibold md:self-start'>{item.title}</h4>
                                    <span className='text-md'>{item.text}</span>
                                </div>
                            ))}
                        </section>
                    )
                };
            default:
                return { title: "", content: null };
        }
    };

    const { title, content } = renderModalContent();

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-6 pt-36"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    className="bg-black/90 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative flex flex-col items-center md:max-w-4xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors text-2xl font-bold">&times;</button>
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">{title}</h2>
                    <div className="text-gray-300">
                        {content}
                    </div>
                    <div className="flex mb-8 justify-center">
                        <button 
                            onClick={onClose}
                            className="bg-white/10 border border-white/20 text-white font-semibold px-6 py-2 rounded-full hover:bg-white/20 transition-colors duration-300"
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};


const GridBox = ({ children, className, onClick, onMouseEnter, onMouseLeave, imageUrl, isExpanded, backgroundPosition }) => (
    <div 
        className={`flex items-center justify-center rounded-2xl transition-all duration-700 ease-in-out cursor-pointer overflow-hidden relative ${className}`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <div
            className={`absolute inset-0 bg-cover  transition-all duration-700 ease-in-out ${isExpanded ? 'scale-110 blur-sm ' : 'scale-100 blur-0'} ${backgroundPosition}`}
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 w-full h-full">
            {children}
        </div>
    </div>
);

const DefaultContent = ({ title }) => (
    <div 
        className="relative flex items-center justify-center w-full h-full text-white text-center"
    >
        <div className="absolute inset-0 bg-black/50"></div>
        <h3 className="relative z-10 text-xl font-bold p-4 lg:text-2xl">{title}</h3>
    </div>
);

const ExpandedContent = ({ title, description, onLearnMore }) => (
    <div className="flex flex-col items-start justify-end w-full h-full p-8 text-white bg-gradient-to-t from-black/60 to-transparent">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-white/80 mb-4">{description}</p>
        <button 
            onClick={onLearnMore} 
            className="bg-white text-black font-semibold px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors"
        >
            Learn More
        </button>
    </div>
);

function InteractiveGridLayout({ onOpenModal }) {
    const [activeBox, setActiveBox] = useState(0);
    const [hoveredBox, setHoveredBox] = useState(0);
    
    const handleBoxClick = (boxNumber) => {
        setActiveBox(prev => (prev === boxNumber ? 0 : boxNumber));
    };

    const handleDesktopHover = (boxNumber) => {
        if (window.innerWidth >= 1024) {
            setHoveredBox(boxNumber);
        }
    };

    const getBoxClasses = (boxNumber) => {
        const mobileHeight = activeBox === 0 ? 'h-64' : (activeBox === boxNumber ? 'h-128' : 'h-64');
        const desktopWidth = hoveredBox === 0 ? 'md:w-1/3' : (hoveredBox === boxNumber ? 'md:w-full' : 'md:w-1/6');
        return `${mobileHeight} ${desktopWidth} md:h-128`;
    };
    
    // Di komputer Anda, ganti URL ini dengan variabel impor Anda (misal: bgWhite).
    const boxesData = [
        { id: 1, imageUrl: bg1, title: "Brief & Philosphy", description: "How our program's means to us & others" },
        { id: 2, imageUrl: bg2, title: "Dive Into Our Program", description: "See what's we bring thourgh our program's." },
        { id: 3, imageUrl: bg3, title: "FAQ", description: "Frequently Asked Questions about our program's." }
    ];

    const isHintVisible = hoveredBox === 0 && activeBox === 0;

    return (
        <div className="w-full p-4 lg:px-6 flex flex-col items-center">
            <div className="h-10 flex items-center md:hidden">
                <AnimatePresence>
                    {isHintVisible && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="text-gray-400 text-sm">Click a card to see the effect</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-6">
                {boxesData.map(box => {
                    const isExpanded = hoveredBox === box.id || activeBox === box.id;
                    const backgroundPosition = box.id == 2 ? 'bg-start' : 'bg-center'
                    return (
                        <GridBox 
                            key={box.id}
                            onClick={() => handleBoxClick(box.id)}
                            onMouseEnter={() => handleDesktopHover(box.id)}
                            onMouseLeave={() => handleDesktopHover(0)}
                            className={getBoxClasses(box.id)}
                            imageUrl={box.imageUrl}
                            isExpanded={isExpanded}
                            backgroundPosition={backgroundPosition}
                        >
                            <div className={`absolute inset-0 transition-opacity duration-500 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}>
                                <DefaultContent title={box.title} />
                            </div>
                            <div className={`absolute inset-0 transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
                                <ExpandedContent 
                                    title={box.title} 
                                    description={box.description} 
                                    // PERUBAHAN: Sekarang hanya mengirim ID
                                    onLearnMore={() => onOpenModal(box.id)}
                                />
                            </div>
                        </GridBox>
                    );
                })}
            </div>

            <div className="h-10 hidden md:flex items-center">
                <AnimatePresence>
                    {isHintVisible && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="text-gray-400 text-sm">Hover a card to see the effect</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

// Komponen App utama
export default function App() {
    // PERUBAHAN: State sekarang menyimpan ID, bukan seluruh objek
    const [activeModalId, setActiveModalId] = useState(null);

    return (
        <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center font-[helvetica]">
            <Header/>
            <div className="text-center mb-4 text-white pt-36 md:mb-8">
                <h1 className="text-2xl font-bold lg:text-4xl">Programs</h1>
            </div>
            <InteractiveGridLayout onOpenModal={setActiveModalId} />
            <Footer/>
            <Modal activeModalId={activeModalId} onClose={() => setActiveModalId(null)} />
        </div>
    );
}
