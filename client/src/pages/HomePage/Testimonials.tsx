import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

const Testimonials = () => {
  return (
    <div className="my-20 flex flex-col gap-14">
      <>
        <h1 className="text-3xl font-bold text-center">
          What our Users are saying
        </h1>
        <h5 className="text-lg mt-2 text-center">
          We are happy to get your reviews
        </h5>
      </>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-1 rounded-md bg-beige  px-6 py-8">
          <div className="flex justify-center">
            <FormatQuoteIcon fontSize="large" />
          </div>
          <h3 className="text-xl font-bold text-center">
            A Boon for my Business
          </h3>
          <p className="text-center mt-3">
            Joining this platform was a game-changer for my farm. The exposure
            it provided significantly boosted my sales. The easy-to-use
            interface and supportive community make it an invaluable resource
            for any farmer. Highly recommended!
          </p>
          <h5 className="text-center text-sm mt-3">
            Aryan Manji - <span className="italic">Farmer</span>
          </h5>
          <div className="text-sm text-gray-600 text-center">
            November 15, 2024
          </div>
        </div>
        <div className="col-span-1 rounded-md bg-beige  px-6 py-8">
          <div className="flex justify-center">
            <FormatQuoteIcon fontSize="large" />
          </div>
          <h3 className="text-xl font-bold text-center">
            Freshness Delivered to My Doorstep
          </h3>
          <p className="text-center mt-3">
          মোৰ দ্বাৰত একেধাৰে এতিয়া এইদৰে টাটকা সব্জি আৰু ফল কেতিয়াও পাই নাছিলোঁ। বিভিন্নতাটো আশ্চৰ্যজনক, আৰু গুণগত মান অপূৰ্ব। এই সেৱাই মোৰ পৰিয়ালৰ খোৱাৰ অভ্যাস সলনি কৰিছে। অত্যন্ত কৃতজ্ঞ এই সেৱাটোৰ বাবে!
          </p>
          <h5 className="text-center text-sm mt-3">
            Aman Khatoon - <span className="italic">Farmer</span>
          </h5>
          <div className="text-sm text-gray-600 text-center">
            March 10, 2025
          </div>
        </div>
        <div className="col-span-1 rounded-md bg-beige px-6 py-8">
          <div className="flex justify-center">
            <FormatQuoteIcon fontSize="large" />
          </div>
          <h3 className="text-xl font-bold text-center">
            Supporting Local Agriculture
          </h3>
          <p className="text-center mt-3">
          एक जागरूक उपभोक्ता के रूप में, यह प्लेटफ़ॉर्म मेरे मूल्यों के साथ पूरी तरह मेल खाता है। स्थानीय किसानों से सीधे जुड़कर हर खरीद को सार्थक बनाता है। पारदर्शिता और गुणवत्ता मुझे बार-बार यहां लौटने के लिए प्रेरित करती है। एक शानदार पहल!
          </p>
          <h5 className="text-center text-sm mt-3">
            Shyam laal  - <span className="italic">Farmer</span>
          </h5>
          <div className="text-sm text-gray-600 text-center">
            Feburary 15, 2025
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
