import SvgIcon from "../components/SvgIcon";

export const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: (
      <SvgIcon>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </SvgIcon>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: (
      <SvgIcon>
        <path d="M15 21v-8h3l.5-4H15V7c0-1.2.4-2 2-2h2V1.5C18.3 1.3 17.2 1.2 16 1.2c-3.2 0-5 1.9-5 5.4V9H8v4h3v8Z" />
      </SvgIcon>
    ),
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    icon: (
      <SvgIcon>
        <path d="M22 5.9a8 8 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.8A12 12 0 0 1 2.8 4.5a4.2 4.2 0 0 0 1.3 5.6 4.1 4.1 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 1 18.6a11.8 11.8 0 0 0 6.4 1.9c7.7 0 11.9-6.4 11.9-11.9v-.5A8.5 8.5 0 0 0 22 5.9Z" />
      </SvgIcon>
    ),
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/",
    icon: (
      <SvgIcon>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="m10 9 5 3-5 3Z" />
      </SvgIcon>
    ),
  },
];
