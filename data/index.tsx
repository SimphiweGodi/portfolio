import { url } from "node:inspector";
import { urlToHttpOptions } from "node:url";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Experience", link: "#experience" },
    { name: "Approach", link: "#approach" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Restaurant Website",
      des: "Explore the wonders of our flame grill restaurant website. Using Php",
      img: "/grill.png",
      iconLists: ["/html.png", "/php.png"],
      link: "https://sgindustry.co.za/projects/grill-restaurant/",
    },
    {
      id: 2,
      title: "Barber & nail salon",
      des: "Easily book your hair & nail appointment using this website.",
      img: "/barber.png",
      iconLists: ["/html.png", "/php.png"],
      link: "https://sgindustry.co.za/projects/famous-barber/",
    },
    {
      id: 3,
      title: "Dental clinic website",
      des: "Easily book your Dental appointment using this website.",
      img: "/hospital.png",
      iconLists: ["/html.png", "/php.png"],
      link: "https://sgindustry.co.za/projects/dental-clinic/",
    },
    {
      id: 4,
      title: "Photographer",
      des: "Photographer portfolio",
      img: "/ryan.png",
      iconLists: ["/html.png", "/php.png"],
      link: "https://sgindustry.co.za/projects/richard-ryan-master/",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Simphiwe was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Simphiwe's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Simphiwe is the ideal partner.",
      name: "Samuel",
      title: "Director of Dots Connect Technologies",
    },
    {
      quote:
        "Collaborating with Simphiwe was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Simphiwe's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Simphiwe is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of Dots Connect Technologies",
    },
    {
      quote:
        "Collaborating with Simphiwe was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Simphiwe's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Simphiwe is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of Dots Connect Technologies",
    },
    {
      quote:
        "Collaborating with Simphiwe was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Simphiwe's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Simphiwe is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of Dots Connect Technologies",
    },
    {
      quote:
        "Collaborating with Simphiwe was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Simphiwe's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Simphiwe is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of Dots Connect Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Full-stack Developer Intern",
      desc: "Assisted in the development of a web-based platform using React.js & Laravel, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance web Dev Project",
      desc: "Led the dev of a web app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://sgindustry.co.za/",
    },
    {
      id: 2,
      img: "/twit.svg",
      link: "https://sgindustry.co.za/",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://sgindustry.co.za/",
    },
  ];