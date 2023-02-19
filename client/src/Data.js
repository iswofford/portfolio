import Slide1  from "../src/Images/web_fidelity.jpg";
import Slide2  from "../src/Images/web_TDA.jpg";
import Slide3  from "../src/Images/Optum-3.png";
import Slide4  from "../src/Images/Optum-4.png";
import Slide5  from "../src/Images/Optum-5.png";
import Slide6  from "../src/Images/web_shuuz.jpg";
import Slide7  from "../src/Images/web_netzoom.jpg";
import Slide8  from "../src/Images/web_oven2.jpg";
import Slide9  from "../src/Images/web_nt.jpg";
import Slide10  from "../src/Images/web_ipad.jpg";
import Slide11  from "../src/Images/web_med.jpg";
import Slide12  from "../src/Images/web_led.jpg";
import Slide13  from "../src/Images/web_allstate.jpg";
export const projects = [
    {
      id: 1,
      title: "First Bank Republic- Digital Statements project",
      body: [
        {
          description:
            "⦁ Overall the project is confidential. Tehnologies I used React, TypeScript, Jest, Aws, Node, Redux-toolkit",
        },
        {
          description: `⦁ TypeScript experience involved: 
      ⦁ work with  built in types like union, string, boolean, 
      array, void, null,enum, tuple, null,intersection, generic
       types for state  tye events type.
      `,
        },
        {
          description: `TypeScript experience involved: 
    ⦁ Used interfaces to define props and state,then using the useState
     hook using type annotations to specify that the setState function expects
      a value of that type.
    `,
        },
        {
          description: `TypeScript experience involved: 
         ⦁ worked with generic types and built reusable ocmponents
  `,
        },
        {
          description: `⦁ Redux-toolkit experience involved: 
          I used createAsyncThunk() from Redux-toolkit for asynchronous 
          actions and handling their results.
          In the slice, I defined the fetchData async thunk and
          the initial state of the data, which includes an empty array 
          for the data itself, a boolean to indicate whether the data is 
          currently being fetched, and a string to hold any error messages 
          that might occur.
           `,
        },
        {
          description: `⦁ In the extraReducers section of the slice, 
      I defined how to handle the different states of the fetchData 
      async thunk. When the pending action is dispatched, I set the
      isLoading flag to true and clear any existing errors. 
      When the fulfilled action is dispatched, I set the isLoading 
      flag to false and update the data with the fetched data. 
      When the rejected action is dispatched, I set the isLoading flag
      to false and store the error message. I then c use the
      fetchData async thunk in the component to fetch the data and 
      display it to the user. 
`,
        },
      ],
    },
    {
      id: 2,
      title: "Ascension- Urgent care project",
      body: [
        {
          description:
            "⦁	Using React Redux, In a Agile environment, I built a UI within a popup enabling users' to rate their experience using the urgent care video chat system. In this UI, I dynamically built a dropdown menu from back-end data allowing the user to choose their preferred clinic. This back-end data was stored in the redux store, within a consumer feedback object with keys questionType and responseObject. For this dropdown, I added an onchange event where I set the user input in the redux store, within the responseObject.",
        },
        {
          description:
            "⦁	I also used a pre-made React widget from NPM, allowing the user to choose star-ratings (1-5 stars) for various aspects of their visit. I wired-up this pre-existing widget to our redux store, replacing its default state with redux, and creating an action “setConsumerFeedback” which sets the user’s star-rating within the redux store, using dispatch method.",
        },
        {
          description:
            "⦁	I also used a pre-made React widget from NPM, allowing the user to choose star-ratings (1-5 stars) for various aspects of their visit. I wired-up this pre-existing widget to our redux store, replacing its default state with redux, and creating an action “setConsumerFeedback” which sets the user’s star-rating within the redux store, using dispatch method.",
        },
        {
          description:
            "⦁	In addition, I also built a dynamic menu bar system where I pass an array of objects which define my menu item tabs. I dynamically drove the visibility of these tabs based on whether or not a system notification was present in the UI.",
        },
        {
          description:
            "⦁	Another feature I built was called “linked child profile”, where I used our proprietary popup widget which was a wrapper over the Boostrap modal. This feature was a UI system enabling a parental guardian to request access to their child’s profile from another guardian (spouse) who already has access. This system used redux to set user input in the store, and build a final payload which is sent to the back-end via redux action. In our system, all API calls are executed as a redux action, with actions serving the dual purpose validation/setting redux store, and data access layer for external API calls.",
        },
      ],
    },

    {
      id: 3,
      title: "OneMain Financial - Loan app project",
      body: [
        {
          description: `⦁ The project involved setting up
      "Chase orbital Gateway Hosted Payment" system o new page
      "chase-debit-card-registration, which is sent to Chase for validation
      ,then sent to CLASS,which stand for customer landing and solicitating 
      system( is for team memmbers to access a cutomer account) where it is saved.
      The page accomodated 2 scenarios user has sessionId(loggedin) and single payment flow`,
        },
        {
          description: `⦁ Another projectI woked on was a backedn project using node-influx library module 
      I createdan Api to write data an query data from InfluxDB. I created the LogginService
      using a class in my service and instantitate it in my driver class. I wrote unit tests
      using mocha, chai and snon libraries and generated the coverage report using nyc npm.
      I filtered the logs and displayed the graph.
       
      `,
        },
        {
          description: `⦁ Another project that I worket on was a dashboard that had several points of functionality:
    it displayed current branch and let's you change the branch and generate a pin, 
    it displayed 2 tables for LQA and eSign. I fully  wired up the
    reponsive design and optimized the layout for pagination to create more real estate on Ipads,
    and search functionality. i also work on debugging and fixing bugs. On the dropdown records per
    page was hardcoded(if you had 5 records you should not be able to select 25)
     I made a new functionality to dynamically drive this.I also added a frosting 
     system if there are o or 1 page, then you do not need pagination`,
        },
        {
          description: `⦁ Another project I worked was called Cashback reward programs.The custumer can earn 
  back on purchases made from linked eligible credit cards. I built the following features: 
  toggling by digital offer and nearby, dynamically grid and a expandable pannel that displayed info about the offer and the link to the offer
  `,
        },
      ],
    },
    {
      id: 4,
      title: "Dow -Modernised IT for news and update project",
      body: [
        {
          description: `⦁ As a developer at Dow, I was tasked with creating a 
      mobile app using Ionic, Cordova and Angular 4.The app's target
      audience was Dow employee, designed to present them with the newest
      update and news regarding their modernized IT department. 
      The app used gamefication to engaged users's attention. 
      Users were able to aquire points and unlock levels and specific feautures,
      while receiving the newest news and updates from Dow IT`,
        },
        {
          description: `⦁ I engineered the app's multi-tiered design pattern, 
    creating the service layer,  page components, and re-usable components. 
    The service layer used RxJs(Reactive Extensive Library for JavaScript), 
    using subject, observable, and subscription to manage asyncronous API calls.
    These common API calls were shared`,
        },
        {
          description: `⦁ Addition feautures included a quiz section, survery section, 
  and ability to manage favorite article.
  Overall, I sucessfully leveraged cutting-edge tehnology, to create and engaging, 
  informative, and entertaining experience for Dow employees.`,
        },
      ],
    },
    {
      id: 5,
      title:
        "Confidential client- Full stack project usign React, Redux, Node.js,TypeScript,Aws",
      body: [
        {
          description: `⦁ I worked on search, pagination, sorting the data , ui features utilizing state management and set and refresh a cookie in a Nest.js backend and access and update it in a React frontend `,
        },
        {
          description: `⦁  In the Nest.js ( node) backend, I define an endpoint to set the cookie with specific attributes using the res.cookie() method.`,
        },
        {
          description: `⦁  In the React frontend, I used the axios library to make a GET request to the endpoint with the withCredentials option set to true to include the cookie in subsequent requests.`,
        },
        {
          description: `⦁ To refresh the cookie in React after a certain time period, I used the useCookies hook from the react-cookie library to get the current cookie value and the setCookie function to update the cookie value. `,
        },
        {
          description: `⦁  I set the new cookie value and call the .save() method on the cookies object to refresh the cookie.`,
        },
        {
          description: `⦁  Retrived an object from Amazon S3 bucket, send files to S3 using AWS SDK  and from DynamoDB using
    getItem method`,
        },
      ],
    },
    {
      id: 6,
      title: "Accenture CIO - Manage my price project",
      body: [
        {
          description: `⦁ This was a project that involved managing the resources. 
      On front end using Angular and on backend repos such as NodeJS and C# 
      API's that fed the front ends.`,
        },
      ],
    },
    {
      id: 7,
      title: "Allstate-  Re-built billing and payment notification project ",
      body: [
        {
          description: `⦁ Developed re-usable components utilizing new feutures of Angular such 
      as transclusion. I also worked with RxJs and the Redux pattern, managing client-side state 
      and performed unit test withJasmine and Karma`,
        },
      ],
    },
    {
      id: 8,
      title: "Wiliams Sonomas- E-commerce platform project",
      body: [
        {
          description: `⦁  One of the feauture that I work on it was called Urgency messaging.
     The goal was to display the numberof the recently added carted items if available
     which was configurable if the cartCounted falled between min and max threshold. 
     It was designed to appear directly above the Add to cart and to display the number 
     of the recenlty added carted items.
      `,
        },
        {
          description: `⦁  I also work on analytics using digital data events, the events fired on age load `,
        },
      ],
    },
    {
      id: 9,
      title: "Projects with other skills- C# and SQL",
      body: [
        {
          description: `⦁ I used C# as data access layer to execute 
      SQL queries and created web mtehods to handle Ajax call
      I performed basic CRUD operations using SQL.`,
        },
      ],
    },
    {
      id: 10,
      title: "Chick-fil-A- International act of kindness project",
      body: [
        {
          description: `⦁ One fo the poject I worked on was an online 
      Ipad course for internal employee of restaurant which involved
      ways of wow guests and strenghten relationship with them.
      The goal was to provide updated engaging content to existing cutomers`,
        },
      ],
    },
];

export const projectSliderData = [
    {
      id:1,
      img: Slide1
    },
    {
      id: 2,
      img: Slide2
    },
    {
      id: 3,
      img: Slide3
    },
    {
      id: 4,
      img: Slide4
    },
    {
      id: 5,
      img: Slide5
    },
    {
      id: 6,
      img: Slide6
    },
    {
      id: 7,
      img: Slide7
    },
    {
      id: 8,
      img: Slide8
    },
    {
      id: 9,
      img: Slide9
    },
    {
      id: 10,
      img: Slide10
    },
    {
      id: 11,
      img: Slide11
    },
    {
      id: 12,
      img: Slide12
    },
    {
      id: 13,
      img: Slide13
    },
];

export   const testimonialsData = [
  {
    name: "Spencer D",
    des: `I have worked with Irina on an Accenture project involving 
    front end frameworks.We also worked on backend repos such as 
    nodeJS and C# API's that fed the front ends. 
    Irina is very intelligent and hardworking. She has a passion
     for learning new technologies. I would highly recommend 
     Irina to be part of any development team knowing she would make 
     a huge impact in a positive way.`,
  },
  {
    name: "Jose P",
    des: `I have been in the IT industry for 30 years and it is hard
    to find such an intelligent and hard-working indiviual. 
    I am beyond impressed by the work that Irina has done.
     She is so much fun to work with and her personality 
     shines through her work. Any company would be lucky 
     to have her! I look forward to seeing her grow as 
     her career takes off.`
  },
  {
    name: "Mitch K",
    des:  `It is rare to come across such a talented indivdual such as Irina. 
    Her work reflects how much she loves what she does, and that 
    is very hard to find these days. I had the opportunity of working 
    with her on a project for my business website. She brought my ideas to live, 
    and that is all a business owner can ask for! I would recommend Irina
     to anyone.`
  },

  {
    name: "Tom G",
    des: `
     As a Creative professional it is a dream to work with such an organized
     and intelligent team member. Her attention to detail and 
     delivering product that is so precise to my designs is the 
     best I have seen. 
     I highly recommend Irina and look forward to more projects together. `,
    img: "https://images.pexels.com/photos/11791288/pexels-photo-11791288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];