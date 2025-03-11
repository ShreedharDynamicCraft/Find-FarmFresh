import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import Select, { SelectChangeEvent } from '@mui/material/Select'; // Import SelectChangeEvent for the event type
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl'; // used for the dropdown specially for the label
import InputLabel from '@mui/material/InputLabel';

type Language = 'English' | 'Hindi' | 'Assamese' | 'Manipuri';

type FAQ = {
  question: string;
  answer: string;
};

type FAQData = {
  [key in Language]: FAQ[];
};

const faqData: FAQData = {
  English: [
    {
      question: 'How can I trust the quality of the produce when ordering from different farmers?',
      answer: 'We prioritize transparency. Each farmer\'s profile provides details on their practices, and customer reviews offer insights. We facilitate direct communication between you and the farmers, ensuring a trustworthy connection.',
    },
    {
      question: 'Is customization available for orders, or are they pre-set packages?',
      answer: 'Absolutely! Our platform empowers you to tailor your orders. Choose specific items, quantities, and preferred farmers to create a personalized shopping experience.',
    },
    {
      question: 'What if I, as a farmer, cannot provide delivery services?',
      answer: 'No worries! You can still showcase your products for online visibility. Simply choose the option to display your produce without "Delivery Services" functionality. This allows consumers to see your offerings and contact you directly for further arrangements, fostering a seamless connection.',
    },
    {
      question: 'How can I stay updated on a specific farmer\'s offerings and updates? Can I follow them on the platform?',
      answer: 'Absolutely! Our platform allows you to follow your favorite farmers. By doing so, you\'ll receive notifications about their latest produce, promotions, and any updates they share. It\'s a great way to stay connected and informed about your preferred farmers\' offerings.',
    },
    {
      question: 'Are there any membership or subscription fees for using the platform?',
      answer: 'No, our platform is free for both farmers and consumers to join. There are no membership or subscription fees. We believe in providing an open and accessible marketplace that benefits both farmers and consumers alike.',
    },
  ],
  Hindi: [
    {
      question: 'विभिन्न किसानों से ऑर्डर करते समय मैं उत्पाद की गुणवत्ता पर कैसे भरोसा कर सकता हूं?',
      answer: 'हम पारदर्शिता को प्राथमिकता देते हैं। प्रत्येक किसान का प्रोफ़ाइल उनके अभ्यासों के बारे में विवरण प्रदान करता है, और ग्राहक समीक्षाएं अंतर्दृष्टि प्रदान करती हैं। हम आपके और किसानों के बीच सीधे संचार की सुविधा प्रदान करते हैं, जिससे एक विश्वसनीय संबंध सुनिश्चित होता है।',
    },
    // Add other Hindi FAQs here
  ],
  Assamese: [
    {
      question: 'বিভিন্ন খেতিয়কৰ পৰা অৰ্ডাৰ কৰোতে মই উৎপাদনৰ গুণাগুণৰ ওপৰত কেনেকৈ বিশ্বাস কৰিব পাৰো?',
      answer: 'আমি স্বচ্ছতাক অগ্ৰাধিকাৰ দিওঁ। প্ৰতিজন খেতিয়কৰ প্ৰ’ফাইলত তেওঁলোকৰ অনুশীলনৰ বিষয়ে বিৱৰণ প্ৰদান কৰা হয়, আৰু গ্ৰাহকৰ প্ৰতিবেদনসমূহে অন্তৰ্দৃষ্টি প্ৰদান কৰে। আমি আপোনাক আৰু খেতিয়কৰ মাজত প্ৰত্যক্ষ সংযোগ স্থাপন কৰো, যাতে এটা বিশ্বাসযোগ্য সংযোগ নিশ্চিত হয়।',
    },
    // Add other Assamese FAQs here
  ],
  Manipuri: [
    {
      question: 'খেতিয়কবোরর কাছ থেকে অর্ডার করার সময় আমি কিভাবে উৎপাদনের গুণমানের উপর বিশ্বাস রাখতে পারি?',
      answer: 'আমরা স্বচ্ছতাকে অগ্রাধিকার দিই। প্রতিটি খেতিয়কের প্রোফাইলে তাদের অনুশীলনের বিবরণ দেওয়া হয়, এবং গ্রাহক পর্যালোচনাগুলি অন্তর্দৃষ্টি প্রদান করে। আমরা আপনাকে এবং খেতিয়কদের মধ্যে সরাসরি যোগাযোগের সুবিধা দিই, যাতে একটি বিশ্বাসযোগ্য সংযোগ নিশ্চিত হয়।',
    },
    // Add other Manipuri FAQs here
  ],
};

const FrequentlyAskedQns = () => {
  const [language, setLanguage] = useState<Language>('English');

  // Use SelectChangeEvent for the event type
  const handleLanguageChange = (event: SelectChangeEvent<Language>) => {
    setLanguage(event.target.value as Language);
  };

  return (
    <div className="my-20 flex flex-col gap-14">
      <h1 className="text-3xl text-center font-bold">FAQs</h1>
      <div className="flex justify-center px-32">
        <div className="flex flex-col">
          <FormControl fullWidth>
            <InputLabel id="language-select-label">Language</InputLabel>
            <Select
              labelId="language-select-label"
              id="language-select"
              value={language}
              label="Language"
              onChange={handleLanguageChange}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Hindi">Hindi</MenuItem>
              <MenuItem value="Assamese">Assamese</MenuItem>
              <MenuItem value="Manipuri">Manipuri</MenuItem>
            </Select>
          </FormControl>
          {faqData[language].map((faq: FAQ, index: number) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
                style={{ backgroundColor: '#F3EFF5' }}
              >
                {faq.question}
              </AccordionSummary>
              <AccordionDetails>{faq.answer}</AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQns;