import { createSlice } from '@reduxjs/toolkit';

// Menu structure converted from Vuex store
const menuList = [
  {
    name: "About SRC",
    link: "/about-us/",
    choice: true,
    target: "",
    options: [
      {
        name: "Council",
        subMenu: true,
        target: "",
        redirect: "#",
        subMenuOptions: [
          {
            name: "Advisory Board",
            redirect: "/advisory/",
          },
          {
            name: "Team",
            redirect: "/team/",
          },
        ]
      },
      {
        name: "Capabilities",
        link: "/capabilities/",
        subMenu: true,
        target: "",
        subMenuOptions: [
          {
            name: "Research",
            subMenu: false,
            redirect: "/capabilities/research/",
            target: "",
          },
          {
            name: "Consulting/Advisory",
            subMenu: false,
            redirect: "/capabilities/consulting_and_advisory/",
            target: "",
          },
          {
            name: "Environment,Social & Governance",
            subMenu: false,
            redirect: "/capabilities/esg/",
            target: "",
          },
          {
            name: "Intellectual Support",
            subMenu: false,
            redirect: "/capabilities/intellectual_support/",
            target: "",
          },
          {
            name: "Media Advocacy",
            subMenu: false,
            redirect: "/capabilities/media_advocacy/",
            target: "",
          },
          {
            name: "Digital Documentation",
            subMenu: false,
            redirect: "/capabilities/digital_documentation/",
            target: "",
          },
          {
            name: "Documentry",
            subMenu: false,
            redirect: "/capabilities/documentry/",
            target: "",
          },
        ]
      },
    ]
  },
  {
    name: "CSR",
    link: "",
    choice: true,
    target: "",
    options: [
      {
        name: "Projects",
        target: "",
        redirect: "/csr/projects/",
      },
      {
        name: "Ventures",
        redirect: "/ventures/",
        target: "",
        choice: false,
        subMenuOptions: [
          {
            name: "Mahindra",
            redirect: "/static/pdf/Mahindra_Coffee_Table_Book.pdf",
            target: "_blank",
            subMenu: true,
          },
          {
            name: "Ministry Of Agriculture",
            redirect: "#",
            subMenu: true,
            subMenuOptions: [
              {
                name: "Agri Mechanization",
                redirect: "/static/pdf/Agri_Mech.pdf",
                target: "_blank"
              },
              {
                name: "Plant Protection",
                redirect: "",
                target: "_blank"
              },
            ]
          },
          {
            name: "Khadi",
            target: "_blank",
            redirect: "/static/pdf/Khadi_for_Make_in_India.pdf",
            subMenu: false,
          },
          {
            name: "NDMC",
            redirect: "/static/pdf/NDMC.pdf",
            target: "_blank",
            subMenu: false,
          },
          {
            name: "RPF",
            redirect: "/static/pdf/RPF.pdf",
            target: "_blank",
            subMenu: false,
          },
          {
            name: "Lakshdweep",
            redirect: "/static/pdf/Lakshdweep.pdf",
            target: "_blank",
            subMenu: false,
          },
          {
            name: "Delhi Police",
            redirect: "/static/pdf/Delhi_Police.pdf",
            target: "_blank",
            subMenu: false,
          },
        ]
      },
    ]
  },
  {
    name: "ESF",
    link: "/",
    target: "",
    choice: true,
    options: [
      {
        name: "Organizational Structure",
        target: "_blank",
        redirect: "/static/pdf/organization-structure.pdf"
      },
    ]
  },
  {
    name: "Learning & Development",
    link: "",
    target: "",
    choice: true,
    options: [
      {
        name: "Workshops",
        subMenu: false,
        target: "",
        redirect: ""
      },
    ]
  },
  {
    name: "Tenders",
    link: "/tenders",
    choice: true,
    target: "",
    options: [
      {
        name: "View Tenders",
        subMenu: false,
        target: "",
        redirect: "/tenders"
      },
    ]
  },
  {
    name: "Events",
    link: "",
    target: "",
    choice: true,
    options: [
      {
        name: "Upcoming",
        subMenu: true,
        target: "",
        redirect: "#",
        subMenuOptions: [
          {
            name: "Traffic Mobility",
            redirect: "#",
          },
          {
            target: "_blank",
            name: "100 Years of Independence",
            redirect: "/static/pdf/100_years_of_independence.pdf",
          },
        ]
      },
      {
        name: "Summit",
        subMenu: true,
        target: "",
        redirect: "#",
        subMenuOptions: [
          {
            name: "SEE Summit 2022",
            target: "",
            redirect: "/concept-note/",
          },
          {
            name: "2021",
            redirect: "/static/pdf/SRC_SUMMIT_2021.pdf",
            target: "_blank",
          },
          {
            name: "2020",
            redirect: '/static/pdf/SRC_SUMMIT_2020_1.pdf',
            target: "_blank",
          },
        ]
      },
      {
        name: "Social",
        subMenu: true,
        target: "",
        redirect: "#",
        subMenuOptions: [
          {
            name: "Treedrive",
            redirect: "#",
          },
        ]
      },
    ]
  },
  {
    name: "Memberships",
    link: "/",
    choice: true,
    target: "",
    options: [
      {
        name: "Voluntary",
        subMenu: false,
        target: "",
        redirect: "/membership/voluntary/"
      },
      {
        name: "Internships",
        subMenu: false,
        target: "",
        redirect: "/membership/internship/"
      },
      {
        name: "Pledge",
        subMenu: false,
        target: "",
        redirect: "/pledge"
      },
    ]
  },
  {
    name: "Career",
    link: "",
    choice: false,
    target: ""
  },
];

const initialState = {
  internship: 0,
  volunteer: 0,
  pledge: 0,
  mainDialog: false,
  menuList,
  gallery: [
    { src: '/static/slider/one.jpg' },
    { src: "/static/slider/two.jpg" },
  ],
  sideSwitch: false,
  homeData: {},
  eventTimeline: [
    {
      year: "2018",
      title: "Traffic 2018",
      description: "NATIONAL SEMINAR ON TRAFFIC MANAGEMENT & TECHNOLOGY"
    },
    {
      year: "2019",
      title: "ABOUT INDIA 2047",
      description: "National Seminar on 'India by 2047', organized by Social Responsibility Council (SRC), March, 2019, New Delhi"
    },
    {
      year: "2019",
      title: "See Summit 2019",
      description: "Sustainability means maintaining inter-generational equity. Sustainability means staying in business forever as it drives profitability. Sustainability means operating towards zero waste society and attaining SUSTAINABLE DEVELOPMENT GOALS. Sustainable Environment & Sustainable Energy are two sides of the same coin. Sustainable Energy means many things:"
    },
    {
      year: "2020",
      title: "See Summit 2020",
      description: "'Renewed Commitment for Smart, Clean & Green India', the flagship forum is trying to highlight and celebrate the multiple green initiatives of the Government and Corporate Sectors to build a much greener India."
    }
  ],
  supportersList: [
    {
      title: "Bankura Precision Agricultural Equipments",
      image: "",
      link: "http://www.bankuralaserlandleveler.co.in/"
    },
    {
      title: "Captain Tractors Pvt. Ltd.",
      image: "",
      link: "http://www.captaintractors.com/"
    },
    // ... other supporters (truncated for brevity)
  ],
  appBarColor: "#1D3A7C"
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setSideSwitch: (state) => {
      state.sideSwitch = !state.sideSwitch;
    },
    setHomeData: (state, action) => {
      state.homeData = action.payload;
    },
    setAppBarColor: (state, action) => {
      state.appBarColor = action.payload;
    },
    setInternshipValue: (state, action) => {
      state.internship = action.payload;
    },
    setVolunteerValue: (state, action) => {
      state.volunteer = action.payload;
    },
    setPledgeValue: (state, action) => {
      state.pledge = action.payload;
    },
    toggleMainDialog: (state) => {
      state.mainDialog = !state.mainDialog;
    },
  },
});

export const {
  setSideSwitch,
  setHomeData,
  setAppBarColor,
  setInternshipValue,
  setVolunteerValue,
  setPledgeValue,
  toggleMainDialog,
} = mainSlice.actions;

// Selectors
export const selectMenuList = (state) => state.main.menuList;
export const selectGalleryList = (state) => state.main.gallery;
export const selectSideSwitch = (state) => state.main.sideSwitch;
export const selectTimelineList = (state) => state.main.eventTimeline;
export const selectHomeData = (state) => state.main.homeData;
export const selectAppBarColor = (state) => state.main.appBarColor;
export const selectInternshipValue = (state) => state.main.internship;
export const selectVolunteerValue = (state) => state.main.volunteer;
export const selectPledgeValue = (state) => state.main.pledge;
export const selectMainDialog = (state) => state.main.mainDialog;

export default mainSlice.reducer;
