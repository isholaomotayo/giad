/* charity dummy data list :-
- Navbar
- Banner section
- Feature section
- Branch section
- Work section
- Milestone block
- Humanity block
- Promotion block
- Donation section
- Blog section
- Client block
- Footer
  - menu widget
  - copyright 
  - social links
*/

/* ------------------------------------ */
// Navbar menu
/* ------------------------------------ */
export const menuItems = [
  {
    label: 'About Us',
    path: '/#feature',
    offset: '81'
  },
  {
    label: 'Our Work',
    path: '/#branch',
    offset: '100'
  },
  {
    label: 'Our Board Members',
    path: '/#work',
    offset: '81'
  },
  {
    label: 'Our Milestone',
    path: '/#milestone',
    offset: '81'
  },
  {
    label: 'Join the Initiative',
    path: '/join#signup',
    offset: '81'
  }

  // ,
  // {
  //   label: 'Our Blog',
  //   path: '#blog',
  //   offset: '81'
  // }
];

/* ------------------------------------ */
// Banner section data
/* ------------------------------------ */
import bannerSlide1 from '../../../../common/src/assets/image/charity/banner/slide1.jpg';
import bannerSlide2 from '../../../../common/src/assets/image/charity/banner/slide2.jpg';
import bannerSlide3 from '../../../../common/src/assets/image/charity/banner/slide3.jpg';
import bannerSlide4 from '../../../../common/src/assets/image/charity/banner/slide4.jpg';

export const bannerSlides = [
  {
    id: 1,
    thumb_url: bannerSlide1
  },
  {
    id: 2,
    thumb_url: bannerSlide2
  },
  {
    id: 3,
    thumb_url: bannerSlide3
  },
  {
    id: 4,
    thumb_url: bannerSlide4
  }
];

/* ------------------------------------ */
// Feature section data
/* ------------------------------------ */
import featureIcon1 from '../../../../common/src/assets/image/charity/feature/1.svg';
import featureIcon2 from '../../../../common/src/assets/image/charity/feature/2.svg';
import featureIcon3 from '../../../../common/src/assets/image/charity/feature/3.svg';
import featureIcon4 from '../../../../common/src/assets/image/charity/feature/4.svg';
import featureIcon5 from '../../../../common/src/assets/image/charity/feature/5.svg';
import featureIcon6 from '../../../../common/src/assets/image/charity/feature/6.svg';

export const featureData = {
  title: 'Our Projects',
  slogan: 'The organisation has carried out the following activities',
  features: [
    {
      id: 1,
      icon: featureIcon1,
      title: 'Establishment of manufacturing city',
      description:
        'Design and developed project proposal for the establishment of manufacturing city with a view reducing avoidable disasters of youths unemployment, grassroots crisis and attainment of sustainable development goals in Nigeria.'
    },
    {
      id: 2,
      icon: featureIcon2,
      title: 'Promotion of affordable education',
      description:
        'Promotion of affordable education through Edupark project (on-going).'
    },
    {
      id: 3,
      icon: featureIcon6,
      title: 'Environmental protection and awareness campaign',
      description:
        'Carried out environmental awareness campaign on the need to save the world environment through direct contact too market places, circulation of hand bills, posters and car sticker bringing information for grassroots awareness'
    },
    {
      id: 4,
      icon: featureIcon4,
      title: 'Reduction of youth restiveness',
      description:
        'Reduction of youth restiveness through Sports park initiative '
    },
    {
      id: 5,
      icon: featureIcon5,
      title: 'Promotion of skills gap bridge ',
      description:
        'Promotion of skills gap bridge through Industrial skills initiative .'
    },

    {
      id: 6,
      icon: featureIcon3,
      title: 'Promotion of health of citizen',
      description:
        'Promotion of health of citizen through establishment of Medical Park (on-going).'
    }
  ]
};

/* ------------------------------------ */
// Branch section data
/* ------------------------------------ */
import thumbImage from '../../../../common/src/assets/image/charity/branch/image.jpg';
import thumbImage1 from '../../../../common/src/assets/image/charity/branch/image1.jpg';
import thumbImage2 from '../../../../common/src/assets/image/charity/branch/image2.jpg';
import thumbImage3 from '../../../../common/src/assets/image/charity/branch/image3.jpg';
import thumbImage4 from '../../../../common/src/assets/image/charity/branch/image4.jpg';
import thumbImage5 from '../../../../common/src/assets/image/charity/branch/image5.jpg';

export const branchData = [
  {
    id: 1,
    menuItem: 'Manufacturing',
    image: thumbImage5,
    slogan: 'Capitalize on Growth Opportunities in the Nigerian Economy',
    title: `We’ve funded <strong>12,925</strong> 
    water projects for 
    <strong>5.2 million</strong> people
    around the world.`,
    description: `Nigeria's population is an estimated 187 million people. This population suggests a massive potential workforce as well as a huge consumer base. For  a manufacturer, this is an ideal scenario, not only do you have potential customers, but you also have potential employees. The Nigerian government is eager to expand the manufacturing capability in the country, and to that end, they are offering incentives for manufacturers that are able to locally source their raw materials, for example, agro-allied manufacturers processing foodstuffs such as fruit juices and vegetable oils. Any manufacturing industry that provides multiplier effect solutions for the economy is also looked upon favorably. An example of this would be machine tools, flat sheet metal, and spare parts manufacturing.
      Finally, any investment in research institutes, especially those that focus on adaptive research and commercialization of local inventions, is looked upon favorably by the Nigerian government.
      `,
    linkUrl: '#1',
    linkText: 'SEE MORE OF OUR IMPACT'
  },
  {
    id: 2,
    menuItem: 'Agriculture',
    image: thumbImage2,
    slogan: 'Capitalize on Growth Opportunities in the Nigerian Economy',
    title: `We’ve funded <strong>19,571</strong> 
    water projects for 
    <strong>6.7 million</strong> people
    around the world.`,
    description: `Nearly one-third of all employed Nigerians find themselves working in the agricultural sector, which is one of the country's main foreign exchange earners. The Nigerian government has set up incentives to help modernize and mechanize their agricultural industry. Not only will locally grow foodstuffs be promoted on behalf of the investor, business and enabling companies may receive the pioneer company status and qualify for tax incentives. Subsidies on fertilizer and zero import duties on raw materials needed to manufacture livestock feed are some of the other incentives to attract investors to this sector. Another is the release of grants from the Raw Materials Research and Development Council for research and development that leads to the greater domestic use of Nigeria's raw materials.`,
    linkUrl: '#1',
    linkText: 'SEE MORE OF OUR IMPACT'
  },
  {
    id: 3,
    menuItem: 'Investments',
    image: thumbImage,
    slogan: 'Capitalize on Growth Opportunities in the Nigerian Economy',
    title: `We’ve funded <strong>29,725</strong> 
    water projects for 
    <strong>8.4 million</strong> people
    around the world.`,
    description: `The Nigerian economy is poised for unprecedented growth. With the rebasing of the Gross Domestic Product (GDP), the Federal Government of Nigeria is encouraging the private sector to take the lead in investment. With improvements in key economic indicators and Nigeria's status as a relatively stable economic center in Africa, the importance of improvements to Nigeria's requires little explanation. Nigeria, with its large economy, oil and gas resources and access to international capital flows, provides an ideal base from which to acquire additional investments in the region.
      The past years have been one of economic progress in Nigeria, with Africa's largest economy managing to crawl back into growth territory in the second quarter of 2017. The Nigerian government has realized that they need to make the country as attractive and lucrative as possible for offshore investors to bring their capital, skills and business trade into the country`,
    linkUrl: '#1',
    linkText: 'SEE MORE OF OUR IMPACT'
  },
  {
    id: 4,
    menuItem: 'ICT',
    image: thumbImage3,
    slogan: 'Capitalize on Growth Opportunities in the Nigerian Economy',
    title: `We’ve funded <strong>10,792</strong> 
    water projects for 
    <strong>4.9 million</strong> people
    around the world.`,
    description:
      'Nigeria is one of the fastest growing internet users in the world. According to Statistics by a global statistics company, there are approximately 76.2 million Nigerian internet users as of 2017. This is an increase of nearly 50 percent from the 2013 figure of 51.8 million. There are millions of Nigerians who are interested in involving themselves in Information Communications and Technology Services (ICTS). This new economy does not require someone to be in a specific location to provide the service needed, rather they can be located anywhere in the world.',
    linkUrl: '#1',
    linkText: 'SEE MORE OF OUR IMPACT'
  },
  {
    id: 5,
    menuItem: 'Education',
    image: thumbImage4,
    slogan: 'Capitalize on Growth Opportunities in the Nigerian Economy',
    title: `We’ve funded <strong>10,071</strong> 
    water projects for 
    <strong>3.7 million</strong> people
    around the world.`,
    description: `The need for skilled tradespersons, computer programmers, and agricultural workers will only increase in demand as Nigeria transforms it's economy and becomes an international economic power. At present, there is an opportunity for private education to offer specific programs that are in demand in the country. Nigeria is a country with vast underemployment and by offering distance learning or night schools, there is potential for strong investment returns in for profit education.
      As an example, one can look at the success of Curro in South Africa, which began as a private for-profit primary and secondary schools but now even has a post-secondary offering. If a Nigerian model were created that focused on skills development, the potential returns could be very lucrative. Nigeria is in the fortunate position to offer investment opportunities to both local and international persons and companies. The need to develop the Nigerian economy offers lucrative potential returns for those looking to invest in the above sectors, including manufacturing and private education. These areas are in some ways interconnected, and by increasing the investment and development in one area, there is tremendous potential for spillover into the other, sectors.
      `,
    linkUrl: '#1',
    linkText: 'SEE MORE OF OUR IMPACT'
  }
];

/* ------------------------------------ */
// Work feature data
/* ------------------------------------ */
import mapPin from '../../../../common/src/assets/image/charity/map-pin.svg';
import searchIcon from '../../../../common/src/assets/image/charity/search-icon.svg';
import studying from '../../../../common/src/assets/image/charity/studying.svg';

export const workData = {
  title: 'Our Key Objectives',
  slogan: `The general objectives include: promotion of disaster prevention, reduction and management, good environment in Africa. To lend credence to government efforts towards a better and safer environment or advocate for safer and friendly environment. Al so to promote, encourage, sponsor and/or subsidize the development and dissemination of knowledge, technology and education`,
  features: [
    {
      id: 1,
      icon: mapPin,
      title: 'Prevention of Disasters',
      description: `specific objectives include amongst other, prevention of violent crimes, corruption, cultural erosion, desertification, harmful traditional practice, child labor, industrial dumping, pollution, vandalization of public property `
    },
    {
      id: 2,
      icon: searchIcon,
      title: 'Research and Development',
      description: `To sensitize the manufacturers and all producers to improve their environmental performances. We also conduct research and disseminate information on trends and technologies for sound environmental control and management`
    },
    {
      id: 3,
      icon: studying,
      title: 'Public education and information Dissemination',
      description: ` GIAD is commited to continiously  publishing educative booklets or pamphlets relative to these objectives for the purpose of educating or counselling the need of the society`
    }
  ]
};
/* ------------------------------------ */
// Milestone block data
/* ------------------------------------ */
export const milestoneData = {
  title: `People's Automotive,
   Construction and Manufacturing City`,
  amount: '₦725B',
  text: 'A Private Initiative for the development of 2000 Hectares Property',
  counterItems: [
    {
      id: 1,
      amount: '15',
      title: 'SKills Upgrade Tracks'
    },
    {
      id: 2,
      amount: '53',
      title: 'Industries Developments'
    },
    {
      id: 3,
      amount: '71',
      title: 'New Products Developed'
    },
    {
      id: 4,
      amount: '18K',
      title: 'Potential Jobs Cerated  '
    }
  ]
};

/* ------------------------------------ */
// Humanity block data
/* ------------------------------------ */
import humanityGlob from '../../../../common/src/assets/image/charity/city2.jpg';

export const humanityData = {
  image: humanityGlob,
  slogan: `THE PEOPLE'S AUTOMOTIVE, CONSTRUCTION AND MANUFACTURING CITY`,
  title: 'Join the Initiative',
  text: `Become an Investor in the Largest Technology and manufacturing project in Africa. By following the steps below`,
  lists: [
    {
      id: 1,
      text: 'Create an investors account'
    },
    {
      id: 2,
      text: 'Pay the application fee and submit your application form'
    },
    {
      id: 3,
      text: 'Start investing'
    }
  ]
};

/* ------------------------------------ */
// Promotion block data
/* ------------------------------------ */
import happyKids from '../../../../common/src/assets/image/charity/manufacturing-city.jpg';

export const promotionData = {
  slogan: 'Become an Investor',
  title: 'Fill the form below to create your investors profile',
  text1:
    'Investors have full access to all project documents, progress reports and updates',
  text2:
    'To become an investor, fill the form below and pay the registration fee of ₦ 50,000.00.',
  lists: [
    {
      id: 1,
      text: 'Let them drink pure'
    },
    {
      id: 2,
      text: 'Ensure them medicare'
    },
    {
      id: 3,
      text: 'create opportunity of education'
    }
  ],
  image: happyKids
};

/* ------------------------------------ */
// Donation form data
/* ------------------------------------ */
export const paymentPolicy = [
  {
    id: 1,
    title: 'One Time',
    value: 'oneTime',
    text: 'One Time donation given'
  },
  {
    id: 2,
    title: 'Ongoing',
    value: 'ongoing',
    text: 'Everymonth donation given'
  }
];

export const currencyOptions = [
  {
    id: 1,
    value: 'ngn',
    title: '₦ NGN'
  },
  {
    id: 2,
    value: 'usd',
    title: '$ USD'
  }
];

/* ------------------------------------ */
// Blog post data
/* ------------------------------------ */
import thumb1 from '../../../../common/src/assets/image/charity/blog/thumb-1.png';
import thumb2 from '../../../../common/src/assets/image/charity/blog/thumb-2.png';

export const posts = [
  {
    id: 1,
    title: 'Uganda Embraces South Sudanese Refugees, For Now',
    excerpt:
      '72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…',
    thumbUrl: thumb1,
    btnText: 'Learn More ',
    btnUrl: '#1'
  },
  {
    id: 2,
    title: 'BRITs Week 2019 together with O2 is here',
    excerpt:
      '72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…',
    thumbUrl: thumb2,
    btnText: 'Learn More ',
    btnUrl: '#1'
  }
];

/* ------------------------------------ */
// Client block data
/* ------------------------------------ */
import windows from '../../../../common/src/assets/image/charity/clients/1.png';
import airbnb from '../../../../common/src/assets/image/charity/clients/2.png';
import adidas from '../../../../common/src/assets/image/charity/clients/3.png';
import ibm from '../../../../common/src/assets/image/charity/clients/4.png';
import amazon from '../../../../common/src/assets/image/charity/clients/5.png';
import google from '../../../../common/src/assets/image/charity/clients/6.png';

export const clients = [
  {
    id: 1,
    logo: windows,
    name: 'windows',
    link: '#1'
  },
  {
    id: 2,
    logo: airbnb,
    name: 'airbnb',
    link: '#2'
  },
  {
    id: 3,
    logo: adidas,
    name: 'adidas',
    link: '#3'
  },
  {
    id: 4,
    logo: ibm,
    name: 'ibm',
    link: '#4'
  },
  {
    id: 5,
    logo: amazon,
    name: 'amazon',
    link: '#5'
  },
  {
    id: 6,
    logo: google,
    name: 'google',
    link: '#6'
  }
];

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
export const menuWidgets = [
  {
    id: 1,
    title: 'FUNDRAISE FOR',
    menu: [
      {
        id: 1,
        text: 'Medical',
        link: '#1'
      },
      {
        id: 2,
        text: 'Emergency',
        link: '#1'
      },
      {
        id: 3,
        text: 'Memorial',
        link: '#1'
      },
      {
        id: 4,
        text: 'Education',
        link: '#1'
      },
      {
        id: 5,
        text: 'Charity',
        link: '#1'
      },
      {
        id: 6,
        text: 'Nonprofit organization',
        link: '#1'
      }
    ]
  },
  {
    id: 2,
    title: 'LEARN MORE',
    menu: [
      {
        id: 1,
        text: 'How invisiblechildren works',
        link: '#1'
      },
      {
        id: 2,
        text: 'Pricing and Fees',
        link: '#1'
      },
      {
        id: 3,
        text: 'Common questions',
        link: '#1'
      },
      {
        id: 4,
        text: 'Success stories',
        link: '#1'
      },
      {
        id: 5,
        text: 'Supported countries',
        link: '#1'
      }
    ]
  },
  {
    id: 3,
    title: 'RESOURCES',
    menu: [
      {
        id: 1,
        text: 'Help center',
        link: '#1'
      },
      {
        id: 2,
        text: 'Blog',
        link: '#1'
      },
      {
        id: 3,
        text: 'GoFundMe Stories',
        link: '#1'
      },
      {
        id: 4,
        text: 'Press center',
        link: '#1'
      },
      {
        id: 5,
        text: 'Careers',
        link: '#1'
      },
      {
        id: 6,
        text: 'About',
        link: '#1'
      }
    ]
  }
];

export const copyright = [
  {
    id: 1,
    text: 'Privacy Policy',
    link: '1#'
  },
  {
    id: 2,
    text: 'Terms and Conditions',
    link: '1#'
  }
];

import { Icon } from 'react-icons-kit';
import { linkedin } from 'react-icons-kit/fa/linkedin';
import { facebook } from 'react-icons-kit/fa/facebook';
import { twitter } from 'react-icons-kit/fa/twitter';
import { github } from 'react-icons-kit/fa/github';

export const socialLinks = [
  {
    id: 1,
    icon: <Icon icon={linkedin} />,
    name: 'linkedin',
    link: '1#'
  },
  {
    id: 2,
    icon: <Icon icon={facebook} />,
    name: 'facebook',
    link: '2#'
  },
  {
    id: 3,
    icon: <Icon icon={twitter} />,
    name: 'twitter',
    link: '3#'
  }
];
