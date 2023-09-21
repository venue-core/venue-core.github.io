import Form from "@/app/(demo)/dashboard/notifications/emails/1/form";

export const metadata = {
  title: "Email - Notifications - OneVenue",
  description: "Empower venue managers to close more deals more efficiently",
};

export default function Email() {
  return (
    <header>
      <div className="mb-2 text-sm font-semibold text-blue-600 uppercase">
        Notifications
      </div>
      <Form />
    </header>
  );
}
