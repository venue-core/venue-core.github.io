import {
  BellAlertIcon,
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  HomeIcon,
  InboxIcon,
  NewspaperIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";

export interface Path {
  icon: React.ReactNode;
  title: string;
  url?: string;
  paths?: Path[];
}

export const PATHS: Path[] = [
  {
    title: "Home",
    url: "/dashboard",
    icon: <HomeIcon className="w-4 h-4" />,
  },
  {
    title: "Payments",
    icon: <CurrencyDollarIcon className="w-4 h-4" />,
    paths: [
      {
        title: "Invoices",
        url: "/dashboard/payments/invoices",
        icon: <ClockIcon className="w-4 h-4" />,
      },
      {
        title: "Analytics",
        url: "/dashboard/payments/analytics",
        icon: <InboxIcon className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Notifications",
    icon: <BellAlertIcon className="w-4 h-4" />,
    paths: [
      {
        title: "Schedules",
        url: "/dashboard/notifications/schedules",
        icon: <ClockIcon className="w-4 h-4" />,
      },
      {
        title: "Emails",
        url: "/dashboard/notifications/emails",
        icon: <InboxIcon className="w-4 h-4" />,
      },
      // {
      //   title: "Templates",
      //   icon: <NewspaperIcon className="w-4 h-4" />,
      //   paths: [
      //     {
      //       title: "Emails",
      //       url: "/dashboard/notifications/emails",
      //       icon: <InboxIcon className="w-4 h-4" />,
      //     },
      //     {
      //       title: "Text Messages",
      //       url: "/dashboard/notifications/texts",
      //       icon: <ChatBubbleBottomCenterTextIcon className="w-4 h-4" />,
      //     },
      //   ],
      // },
    ],
  },
  {
    title: "Products",
    url: "/dashboard/products",
    icon: <RectangleStackIcon className="w-4 h-4" />,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: <Cog6ToothIcon className="w-4 h-4" />,
  },
];
