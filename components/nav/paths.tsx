import {
  BanknotesIcon,
  BellAlertIcon, CalculatorIcon,
  CalendarIcon,
  ChartBarIcon,
  ClockIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  RectangleStackIcon,
  TableCellsIcon,
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
  // {
  //   title: "Calendar",
  //   url: "/dashboard/calendar",
  //   icon: <CalendarIcon className="w-4 h-4" />,
  // },
  {
    title: "Payments",
    icon: <BanknotesIcon className="w-4 h-4" />,
    paths: [
      {
        title: "Invoices",
        url: "/dashboard/payments/invoices",
        icon: <CurrencyDollarIcon className="w-4 h-4" />,
      },
      {
        title: "Analytics",
        url: "/dashboard/payments/analytics",
        icon: <ChartBarIcon className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Notifications",
    icon: <BellAlertIcon className="w-4 h-4" />,
    paths: [
      // {
      //   title: "Schedules",
      //   url: "/dashboard/notifications/schedules",
      //   icon: <ClockIcon className="w-4 h-4" />,
      // },
      {
        title: "Emails",
        url: "/dashboard/notifications/emails",
        icon: <InboxIcon className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Events",
    icon: <RectangleStackIcon className="w-4 h-4" />,
    paths: [
      // {
      //   title: "Services",
      //   url: "/dashboard/events/services",
      //   icon: <TableCellsIcon className="w-4 h-4" />,
      // },
      {
        title: "Calculator",
        url: "/dashboard/events/calculator",
        icon: <CalculatorIcon className="w-4 h-4" />,
      },
      // {
      //   title: "Analytics",
      //   url: "/dashboard/events/analytics",
      //   icon: <ChartBarIcon className="w-4 h-4" />,
      // },
    ],
  },
  // {
  //   title: "Settings",
  //   url: "/dashboard/settings",
  //   icon: <Cog6ToothIcon className="w-4 h-4" />,
  // },
];
