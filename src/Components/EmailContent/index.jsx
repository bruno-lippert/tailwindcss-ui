import EmailCloseButton from "./EmailCloseButton";
import EmailData from "./EmailData";
import EmailTitle from "./EmailTitle";

export default function EmailContent({ email, setOpenEmail }) {
  const sendDate = new Date(email.createdAt);
  const formattedDate = sendDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <div className="p-2 md:p-4 absolute lg:relative h-full w-full bg-background-secondary grow-2 basis-96">
      <EmailCloseButton onClick={() => setOpenEmail(null)} />
      <EmailTitle>{email.subject}</EmailTitle>
      <EmailData>De: {`<${email.from}>`}</EmailData>
      <EmailData>Para: {`<john.doe@mail.com>`}</EmailData>
      <EmailData>Em: {formattedDate}</EmailData>
      <hr className="my-4" />
      <div>{email.body}</div>
    </div>
  );
}
