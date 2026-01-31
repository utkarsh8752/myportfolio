
// function Contact() {
//   return (
//     <div>

//          <section className="contact-section py-16 px-6 md:px-20 bg-blue-500 text-gray-900">
//       <h1 className="text-4xl font-bold text-center mb-2">Contact Me</h1>
//       <p className="text-center text-lg text-white mb-10">
//         Have a project in mind? Let's talk!
//       </p>

//       {/* Form */}
//       <form
//         action="https://formspree.io/f/YOUR_FORM_ID"
//         method="POST"
//         className="max-w-2xl mx-auto bg-white-100 p-8 rounded-xl shadow-md space-y-4"
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           required
//           className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           required
//           className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         <textarea
//           name="message"
//           rows="6"
//           placeholder="Your Message"
//           required
//           className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         ></textarea>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-semibold"
//         >
//           Send Message
//         </button>
//       </form>

//       {/* Contact Info */}
//       <div className="contact-info text-center mt-12 space-y-2">
//         <p><b>Email:</b> eng.utkarshmishra@gmail.com</p>
//         <p><b>Phone:</b> +91 8104591013</p>
//         <p>
//           <b>Location:</b> Vasai East Salt Plant, Vasai East, Vasai-Virar,  
//           Rajavali, Maharashtra (401208) India
//         </p>

//         <div className="flex justify-center mt-6">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.374059119956!2d72.85732047419272!3d19.396237541843174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7af2ff3482713%3A0x5afbb8ac6ecad6dc!2sWaghral%20Pada%20Rd%2C%20Vasai%20East%20Salt%20Plant%2C%20Vasai%20East%2C%20Vasai-Virar%2C%20Rajavali%2C%20Maharashtra%20401208!5e0!3m2!1sen!2sin!4v1761237341741!5m2!1sen!2sin"
//             width="600"
//             height="450"
//             className="rounded-xl shadow-md w-full md:w-[600px]"
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       </div>
//     </section>
//     </div>
//   );
// }


// export default Contact

function Contact() {
  return (
    <div>
      <section className="contact-section py-16 px-6 md:px-20 bg-gradient-to-br from-[#001d33] via-[#002b4f] to-[#003b6d] text-white">
        <h1 className="text-4xl font-bold text-center mb-2">Contact Me</h1>
        <p className="text-center text-lg mb-10">
          Have a project in mind? Let's talk!
        </p>

        {/* Form */}
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="max-w-2xl mx-auto bg-white text-gray-900 p-8 rounded-xl shadow-2xl space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="contact-info text-center mt-12 space-y-2">
          <p><b>Email:</b> eng.utkarshmishra@gmail.com</p>
          <p><b>Phone:</b> +91 8104591013</p>
          <p>
            <b>Location:</b> Vasai East Salt Plant, Vasai-Virar, Maharashtra (401208), India
          </p>

          <div className="flex justify-center mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.374059119956!2d72.85732047419272!3d19.396237541843174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7af2ff3482713%3A0x5afbb8ac6ecad6dc!2sWaghral%20Pada%20Rd%2C%20Vasai%20East%20Salt%20Plant%2C%20Vasai-Virar%2C%20Rajavali%2C%20Maharashtra%20401208!5e0!3m2!1sen!2sin!4v1761237341741!5m2!1sen!2sin"
              width="600"
              height="450"
              className="rounded-xl shadow-md w-full md:w-[600px]"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
