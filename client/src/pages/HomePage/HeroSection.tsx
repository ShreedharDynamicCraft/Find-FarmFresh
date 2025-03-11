import { useContext, useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AuthenticationContext from '../../context/authentication';
import { motion } from 'framer-motion';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide'; // Import Slide component

// Define type for language options
type LanguageOption = 'english' | 'hindi' | 'manipuri' | 'assamese';

// Define content type structure
type ContentType = {
  [key in LanguageOption]: {
    title: string;
    description: string;
    createAccount: string;
    viewProducts: string;
  }
};

const HeroSection = () => {
  const { logInData } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const [language, setLanguage] = useState<LanguageOption>('english');
  const [isVisible, setIsVisible] = useState(true);
  const [showSnackbar, setShowSnackbar] = useState(true);

  function TransitionUp(props: any) {
    return <Slide {...props} direction="up" />;
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const imageHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const buttonHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      backgroundColor: language === 'english' ? "#4a7c59" : "#558b65",
      transition: { duration: 0.2 }
    }
  };

  const content: ContentType = {
    english: {
      title: "From farm to table, Just a click away",
      description: "Welcome to our online marketplace connecting you directly to local farmers! Discover an abundance of freshly harvested produce, grown with care and passion. Embrace the farm-to-table experience from the comfort of your home. Join us in supporting local agriculture while savoring the taste of truly fresh, seasonal delights.",
      createAccount: "Create Account",
      viewProducts: "View Products"
    },
    hindi: {
      title: "खेत से मेज तक, बस एक क्लिक दूर",
      description: "हमारे ऑनलाइन मार्केटप्लेस में आपका स्वागत है जो आपको सीधे स्थानीय किसानों से जोड़ता है! ताजा कटाई किए गए उत्पादों की प्रचुरता का पता लगाएं, जिन्हें देखभाल और जुनून के साथ उगाया गया है। अपने घर के आराम से खेत-से-मेज के अनुभव को अपनाएं। वास्तव में ताजा, मौसमी व्यंजनों के स्वाद का आनंद लेते हुए स्थानीय कृषि का समर्थन करने में हमारे साथ जुड़ें।",
      createAccount: "खाता बनाएं",
      viewProducts: "उत्पाद देखें"
    },
    manipuri: {
      title: "লৌ মরীদগী মেজ ফাওবা, ক্লিক অমখক্তদা",
      description: "নশাগী ঔনলাইন মার্কেটপ্লেসতা তরামনা লোকেল ফার্মরশিংগা দাইরেক্ত কনেক্ত তৌনবগীদমক ত্রাইবিরকপা অদুবু! অথিংবা অমসুং পাম্বা মতেং পাংনা থৌনাওনা শেম্বা পোৎথোক কয়া থীদোকউ। নহাক্কী যুমদগী ফার্মদগী-মেজ ফাওবগী এক্সপেরিয়েন্স লৌ। অচৌবা মঙাল্লা অমসুং মঙাল্লা পোৎথোকশিংগী মঙাল অদু শক্তাকনিংবগীদমক লোকেল এগ্রিকল্চর সপোর্ট তৌবদা ঈশিং তিল্লো।",
      createAccount: "একাউন্ট সৃষ্টি করুন",
      viewProducts: "পণ্য দেখুন"
    },
    assamese: {
      title: "খেতিপথাৰৰ পৰা মেজলৈ, মাত্ৰ এটা ক্লিকত",
      description: "আপোনাক পোনে পোনে স্থানীয় কৃষকৰ লগত সংযোগ কৰা আমাৰ অনলাইন বজাৰত আদৰণি জনাইছো! যত্নেৰে আৰু আবেগেৰে উৎপাদিত সদ্য চপোৱা শস্যৰ প্ৰাচুৰ্য আৱিষ্কাৰ কৰক। আপোনাৰ ঘৰৰ আৰামৰ পৰা খেতিৰ-পৰা-মেজলৈকে অভিজ্ঞতা গ্ৰহণ কৰক। সঁচাকৈয়ে সতেজ, ঋতুকালীন খাদ্যৰ সোৱাদ উপভোগ কৰি স্থানীয় কৃষিক সমৰ্থন কৰাত আমাৰ লগত যোগদান কৰক।",
      createAccount: "একাউণ্ট সৃষ্টি কৰক",
      viewProducts: "পণ্য চাওক"
    }
  };

  const changeLanguage = (newLanguage: LanguageOption) => {
    setIsVisible(false);
    setTimeout(() => {
      setLanguage(newLanguage);
      setIsVisible(true);
    }, 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSnackbar(false);
    }, 10000); // Display for 10 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
      className="flex flex-col md:flex-row gap-5 mb-20 mt-10 justify-between items-center"
    >
      <Snackbar 
        open={showSnackbar} 
        autoHideDuration={10000} // Display for 10 seconds
        TransitionComponent={TransitionUp}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert 
          elevation={6} 
          variant="filled" 
          severity="info" 
          className="text-xl font-bold p-6" // Make it bigger
        >
          🚜 Welcome to our marketplace!  
          <br /> 🌍 Multi-language support: **अब हम आपके गाँव में!**  
        </MuiAlert>
      </Snackbar>
      <motion.div 
        className='flex flex-col'
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="absolute top-24 right-10 flex gap-2 bg-white p-2 rounded-lg shadow-md z-10">
          <button 
            onClick={() => changeLanguage('english')} 
            className={`px-2 py-1 rounded-md text-sm ${language === 'english' ? 'bg-appleGreen text-white' : 'bg-gray-100'}`}
          >
            English
          </button>
          <button 
            onClick={() => changeLanguage('hindi')} 
            className={`px-2 py-1 rounded-md text-sm ${language === 'hindi' ? 'bg-appleGreen text-white' : 'bg-gray-100'}`}
          >
            हिंदी
          </button>
          <button 
            onClick={() => changeLanguage('manipuri')} 
            className={`px-2 py-1 rounded-md text-sm ${language === 'manipuri' ? 'bg-appleGreen text-white' : 'bg-gray-100'}`}
          >
            মণিপুরী
          </button>
          <button 
            onClick={() => changeLanguage('assamese')} 
            className={`px-2 py-1 rounded-md text-sm ${language === 'assamese' ? 'bg-appleGreen text-white' : 'bg-gray-100'}`}
          >
            অসমীয়া
          </button>
        </div>
        
        <motion.div 
          className="text-4xl md:text-5xl font-bold"
          variants={fadeIn}
        >
          {content[language].title}
        </motion.div>
        
        <motion.div 
          className="mt-8 text-lg"
          variants={fadeIn}
        >
          {content[language].description}
        </motion.div>
        
        <motion.div 
          className="mt-8 flex flex-wrap gap-4"
          variants={fadeIn}
        >
          <motion.button
            initial="rest"
            whileHover="hover"
            variants={buttonHover}
            className="text-lg px-4 py-3 bg-appleGreen text-white flex items-center rounded-md"
            type="button"
            onClick={() => {
              if (logInData.loggedIn) {
                navigate('/my-profile');
              } else {
                navigate('/sign-up');
              }
            }}
          >
            {content[language].createAccount}
            <KeyboardArrowRightIcon />
          </motion.button>
          
          <NavLink to="/store">
            <motion.button 
              initial="rest"
              whileHover="hover"
              variants={buttonHover}
              className="text-lg px-4 py-3 bg-teaGreen1 flex items-center rounded-md"
            >
              {content[language].viewProducts}
              <KeyboardArrowRightIcon />
            </motion.button>
          </NavLink>
        </motion.div>
      </motion.div>

      <motion.div 
        className="flex flex-col gap-5 mt-10 md:mt-0"
        variants={staggerChildren}
      >
        <motion.div 
          className="h-64 md:h-80 w-full md:w-112 overflow-hidden rounded-lg"
          variants={fadeIn}
        >
          <motion.img
            initial="rest"
            whileHover="hover"
            variants={imageHover}
            className="object-cover w-full h-full rounded-lg"
            src="/farmer-main-page.jpg"
            alt="Farmer working in field"
          />
        </motion.div>
        
        <motion.div 
          className="flex gap-5 flex-col sm:flex-row"
          variants={staggerChildren}
        >
          <motion.div 
            className="w-full sm:w-80 h-40 overflow-hidden rounded-lg"
            variants={fadeIn}
          >
            <motion.img
              initial="rest"
              whileHover="hover"
              variants={imageHover}
              className="object-cover w-full h-full rounded-lg"
              src="/cow-eatting-grass.jpg"
              alt="Cow eating grass"
            />
          </motion.div>
          
          <motion.div 
            className="w-full sm:w-80 h-40 overflow-hidden rounded-lg"
            variants={fadeIn}
          >
            <motion.img
              initial="rest"
              whileHover="hover"
              variants={imageHover}
              className="object-cover w-full h-full rounded-lg"
              src="/vegetables-field.jpg"
              alt="Field of vegetables"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;