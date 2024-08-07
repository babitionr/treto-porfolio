import Handlebars from "handlebars";
import "./index.less";

const skills = [
  {
    name: "FIGMA",
    complete: "60%",
    icon: "fa-brands fa-figma",
    width: "w-3/5",
  },
  {
    name: "PHP / C++",
    complete: "80%",
    icon: "fa-brands fa-php",
    width: "w-4/5",
  },
  {
    name: "JAVESCRIPT",
    complete: "75%",
    icon: "fa-brands fa-js",
    width: "w-3/4",
  },
  {
    name: "REACT / NEST.JS",
    complete: "75%",
    icon: "fa-brands fa-react",
    width: "w-3/4",
  },
  {
    name: "HTML5 / CSS3",
    complete: "90%",
    icon: "fa-brands fa-html5",
    width: "w-90%",
  },
  {
    name: "VUE.JS",
    complete: "55%",
    icon: "fa-brands fa-vuejs",
    width: "w-1/2",
  },
];

const skillsElement: HTMLElement | null = document.getElementById("skills");

if (skillsElement) {
  const source = `<div class="w-1/2 mb-10 px-3 max-xl:w-full">
  <div class="box-icon flex justify-between">
    <div class="flex">
      <div
        class="flex relative w-16 h-16 text-3xl border-solid border-2 border-black pb-1 justify-center items-center before:absolute before:-left-2 before:-top-2 before:bg-custom-color before:w-full before:h-full before:-z-10"
      >
        <i class="{{icon}}"></i>
      </div>
    </div>
    <div class="w-calc-100-minus-90">
      <span class="font-semibold text-base uppercase"
        >{{name}}</span
      >
      <div
        class="border-b-2 border-solid border-b-gray-300 py-1 ml-2"
      >
        <div
          class="{{width}} relative -left-2 h-3 border-b-2 border-r-2 border-orange-600"
        >
          <span
            class="absolute top-0 right-0 translate-x-4 -translate-y-6"
            >{{complete}}</span
          >
        </div>
      </div>
    </div>
  </div>
</div>`;

  const template = Handlebars.compile(source);
  const skillsHTML = skills.map((skill) => template(skill)).join("");

  skillsElement.innerHTML = skillsHTML;
}

const contacts = [
  {
    method: "EMAIL",
    elements: ["hello@treto.co", "projects@treto.co"],
  },
  { method: "PHONE", elements: ["+ 56 3636 60 60 ", "+ 56 6363 06 06"] },
];

const contactsElement: HTMLElement | null =
  document.getElementById("container-contact");
console.log(contactsElement);

if (contactsElement) {
  const source = `<div
  class="box-email relative mb-7 p-7 border-solid border-2 border-black"
>
  <div
    class="absolute left-1 -right-2 -bottom-2 top-1 border-2 border-solid border-zinc-300"
  ></div>
  <p class="uppercase font-semibold mb-5">{{method}}</p>
  <p>
    {{# each elements}}<a class="text-lg">{{this}}</a> </br> {{/each}}

  </p>
</div>`;

  const template = Handlebars.compile(source);

  const contactsHTML = contacts.map((contact) => template(contact)).join("");
  // console.log(contactsHTML);
  contactsElement.innerHTML = contactsHTML;
}

// Handlebars Education
const edu = [
  {
    icon: "+",
    img: "https://html.bslthemes.com/treto/img/certificate.jpg",
    name: "Backend Programming",
    start: "2020",
    end: "2021",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
  },
  {
    icon: "+",
    img: "https://html.bslthemes.com/treto/img/certificate.jpg",
    name: "Master in Graphic",
    start: "2019",
    end: "2020",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
  },
  {
    icon: "+",
    img: "https://html.bslthemes.com/treto/img/certificate.jpg",
    name: "Bachelors of FineArt",
    start: "2017",
    end: "2018",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
  },
];

const educationElement: HTMLElement | null =
  document.getElementById("content-edu");

if (educationElement) {
  const source = `<div class="flex mb-10 px-1">
  <div class="flex justify-start items-start">
    <div
      class="relative border-2 border-solid border-black box-border w-16 h-16 flex justify-center items-center pb-2"
    >
      <div
        class="absolute bg-zinc-200 -top-3.5 -left-3.5 w-16 h-16 -z-10"
      ></div>
      <div
        class="absolute -top-14 left-auto -right-7 box-phone w-16 h-16 -z-10"
      ></div>
      <a
        href="{{img}}"
        class="text-black font-Jost-Font font-normal text-3xl image-link"
        >{{icon}}</a
      >
    </div>
  </div>

  <div class="pl-10 pt-1">
    <p
      class="text-black uppercase font-Jost-Font font-semibold text-base mb-2"
    >
      {{name}}
    </p>

    <p
      class="text-black uppercase font-Jost-Font font-medium text-sm mb-5"
    >
      {{start}} <span class="text-orange-600"> to </span> {{end}}
    </p>

    <p
      class="text-black font-Jost-Font font-light text-lg leading-8"
    >
      {{para}}
    </p>
  </div>
</div>`;
  const template = Handlebars.compile(source);
  const contentEduHTML = edu.map((el) => template(el)).join("");

  educationElement.innerHTML = contentEduHTML;
}
// Handlebars Education end

// Handlebars Experience
const exp = [
  {
    name: "Freelancer",
    start: "today",
    end: "",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
  },
  {
    name: "Agency Macll",
    start: "2019",
    end: "2022",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
  },
  {
    name: "Envato",
    start: "2017",
    end: "2019",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
  },
  {
    name: "Themeforest",
    start: "2014",
    end: "2017",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
  },
];

const experienceElement: HTMLElement | null =
  document.getElementById("content-exp");

if (experienceElement) {
  const source = `<div class="swiper-slide">
  <div class="mr-10 mb-7 flex">
    <div class="w-full">
      <p
        class="text-black uppercase font-Jost-Font font-semibold text-base mb-2"
      >
      {{name}}
      </p>

      <p
        class="text-black uppercase font-Jost-Font font-medium text-sm mb-5"
      >
        {{start}} <span class="text-orange-600"> to </span> {{end}}
      </p>

      <p
        class="text-black font-Jost-Font font-light text-lg leading-8"
      >
        {{para}}
      </p>
    </div>
  </div>
</div>`;
  const template = Handlebars.compile(source);
  const contentExpHTML = exp.map((el) => template(el)).join("");

  experienceElement.innerHTML = contentExpHTML;
}
// Handlebars Experience end

// Handlebars Service
const ser = [
  {
    icon: "fa-solid fa-code",
    name: "Web Development",
    cost: "$29",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
  },
  {
    icon: "fa-solid fa-palette",
    name: "Branding",
    cost: "$39",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
  },
  {
    icon: "fas fa-server",
    name: "Server Managment",
    cost: "$49",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.",
  },
];

const serviceElement: HTMLElement | null =
  document.getElementById("content-ser");

if (serviceElement) {
  const source = `<div class="flex mb-10 2xl:pr-14 xl:pr-14">
  <div class="flex justify-start items-start">
    <div
      class="relative border-2 border-solid border-black box-border w-16 h-16 flex justify-center items-center pb-2"
    >
      <div
        class="absolute bg-zinc-200 -top-3.5 -left-3.5 w-16 h-16 -z-10"
      ></div>
      <div
        class="absolute -top-14 left-auto -right-7 box-phone w-16 h-16 -z-10"
      ></div>
      <div class="text-black font-Jost-Font font-normal text-3xl">
        <i class="{{icon}}"></i>
      </div>
    </div>
  </div>

  <div class="pl-10 pt-1">
    <p
      class="text-black uppercase font-Jost-Font font-semibold text-base mb-2"
    >
      {{name}}
    </p>

    <p
      class="text-black uppercase font-Jost-Font font-medium text-sm mb-5"
    >
      {{cost}} <span class="text-orange-600"> per hour </span>
    </p>

    <p
      class="text-black font-Jost-Font font-light text-lg leading-8"
    >
      {{para}}
    </p>
  </div>
</div>`;
  const template = Handlebars.compile(source);
  const contentSerHTML = ser.map((el) => template(el)).join("");

  serviceElement.innerHTML = contentSerHTML;
}
// Handlebars Service end

// Handlebars Testimonials
const tes = [
  {
    img: "https://html.bslthemes.com/treto/img/faces/clients/1.jpg",
    alt: "client1",
    firstName: "Isabella",
    lastName: "Wilson",
    position: "Director at Geands Hotel",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
  {
    img: "https://html.bslthemes.com/treto/img/faces/clients/2.jpg",
    alt: "client2",
    firstName: "Isabella",
    lastName: "Wilson",
    position: "Director at Geands Hotel",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
  {
    img: "https://html.bslthemes.com/treto/img/faces/clients/3.jpg",
    alt: "client3",
    firstName: "Isabella",
    lastName: "Wilson",
    position: "Director at Geands Hotel",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
  {
    img: "https://html.bslthemes.com/treto/img/faces/clients/4.jpg",
    alt: "client4",
    firstName: "Isabella",
    lastName: "Wilson",
    position: "Director at Geands Hotel",
    para: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
];

const testimonialsElement: HTMLElement | null =
  document.getElementById("content-tes");

if (testimonialsElement) {
  const source = `<div class="swiper-slide">
  <div
    class="flex mb-10 2xl:flex-row xl:flex-row lg:flex-row flex-col"
  >
    <div
      class="flex justify-start items-start 2xl:w-1/3 xl:w-1/3 lg:w-1/3 w-full"
    >
      <div
        class="relative flex justify-center items-center pb-2"
      >
        <div
          class="border-2 border-solid box-border absolute border-black top-3.5 left-3.5 -right-3.5 -bottom-2 w-full"
        ></div>
        <img
          src="{{img}}"
          alt="{{alt}}"
          class="w-40 h-40"
        />
      </div>
    </div>

    <div
      class="2xl:w-2/3 xl:w-2/3 lg:w-2/3 w-full mr-20 2xl:mt-0 xl:mt-0 lg:mt-0 mt-10"
    >
      <p
        class="text-black pl-5 font-Jost-Font font-light text-lg leading-8 mb-7 text-wrap"
      >
        {{para}}
      </p>

      <p
        class="text-black uppercase font-Jost-Font font-semibold text-base mb-2"
      >
        {{firstName}}
        <span class="text-orange-600"> {{lastName}} </span>
      </p>

      <p
        class="text-black font-Jost-Font font-light text-lg leading-8 mb-7"
      >
        {{position}}
      </p>
    </div>
  </div>
</div>`;
  const template = Handlebars.compile(source);
  const contentTesHTML = tes.map((el) => template(el)).join("");

  testimonialsElement.innerHTML = contentTesHTML;
}
// Handlebars Testimonials end

const navDatas = [
  {
    name: "Home",
    childrens: [
      { name: "Type1", chil: [] },
      { name: "Type2", chil: [] },
    ],
  },
  {
    name: "Prices",
    childrens: [],
  },
  {
    name: "Portfolio",
    childrens: [],
  },
  {
    name: "Blog",
    childrens: [],
  },
  {
    name: "Contact me",
    childrens: [],
  },
];

const navDeskTop: HTMLElement | null = document.getElementById("nav-desktop");

if (navDeskTop) {
  const source = `
  {{#if childrens}}
  <li
  class="group hover:text-orange-600 relative flex items-center mr-10"
>
  <div class="cursor-pointer duration-500">
    <a>{{name}}</a>
    <ul
      class="hidden group-hover:block bg-white duration-500 absolute top-20 -left-9 px-7 py-7 border-2 border-solid border-gray-300"
    >
    {{#each childrens}}
    <li class="group-hover:block">
      <a class="text-black hover:text-orange-600 duration-500"
        >{{name}}</a
      >
    </li>
    {{/each}}

    </ul>
  </div>
</li>
{{else}}
<li class="h-20 relative flex items-center mr-10">
  <a class="cursor-pointer hover:text-orange-600 duration-500"
    >{{name}}</a>
</li>
{{/if}}
  `;
  const template = Handlebars.compile(source);
  const navDeskHTML = navDatas.map((nav) => template(nav)).join("");

  navDeskTop.innerHTML = navDeskHTML;
}

const navRespone: HTMLElement | null = document.getElementById("nav-respon");

if (navRespone) {
  const source = `
  {{#if childrens}}
  <li class="navmb p-3">
    <a
      class="group hover:animate-slideDown hover:text-orange-600 duration-500 cursor-pointer"
    >
      {{name}}
      <ul
        class="dropdown-m hidden group-hover:block bg-gray-300 duration-500 top-full left-0 px-7 py-7"
      >
        {{#each childrens}}
        <li class="mb-5">
          <a
            class="text-black hover:text-orange-600 duration-500 cursor-pointer"
          >{{name}}</a>
        </li>
        {{/each}}
      </ul>
    </a>
  </li>

  {{else}}
  <li class="p-3">
    <p class="hover:text-orange-600duration-500 cursor-pointer">
      {{name}}
     </p>
  </li>
  {{/if}}
  `;
  const template = Handlebars.compile(source);
  const navResponeHTML = navDatas.map((nav) => template(nav)).join("");

  navRespone.innerHTML = navResponeHTML;
}

const navIcons = [
  { icon: "fa-brands fa-facebook" },
  { icon: "fa-brands fa-instagram" },
  { icon: "fa-brands fa-linkedin" },
  { icon: "fa-brands fa-youtube" },
];

const navIcon: HTMLElement | null = document.getElementById("nav-icon");
if (navIcon) {
  const source = `<li class="list-none mr-6 mt-10">
  <a
    href="#"
    class="social-icon hover:text-orange-600 duration-500"
  >
    <i class="{{icon}} text-lg"></i>
  </a>
</li>`;

  const template = Handlebars.compile(source);
  const navIconHTML = navIcons.map((item) => template(item)).join("");
  navIcon.innerHTML = navIconHTML;
}
