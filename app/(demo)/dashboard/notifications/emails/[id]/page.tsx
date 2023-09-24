import Form from "@/app/(demo)/dashboard/notifications/emails/[id]/form";

export const metadata = {
  title: "Email - Notifications - OneVenue",
  description: "Empower venue managers to close more deals more efficiently",
};

export async function generateStaticParams() {
  return [{ id: "1" }];
}

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
