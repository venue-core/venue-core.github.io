import { redirect } from "next/navigation";

export const metadata = {
  title: "Emails - Notifications - OneVenue",
  description: "Empower venue managers to close more deals more efficiently",
};

export default function Emails() {
  redirect("/dashboard/notifications/emails/1");
  return (
    <header>
      <div className="mb-2 text-sm font-semibold text-blue-600 uppercase">
        Notifications
      </div>
      <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
        Emails
      </h1>
      <div className="mt-4"></div>
    </header>
  );
}
