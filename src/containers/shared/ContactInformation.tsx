import { Card } from "@/components";
import { Contact } from "@/types/contact";

interface Props {
  contact: Contact;
}

export default function ContactInformation(props: Props) {
  const { contact } = props;

  return (
    <section className="container">
      <Card>
        <div className="p-2">
          <h2 className="text-xl font-bold">Kontaktinformation</h2>
          <ul className="flex flex-col gap-2">
            <li>
              {contact.name} <span className="italic">{contact.title}</span>
            </li>
            <li>
              <a href={`tel:${contact.tel}`}>{contact.tel}</a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>{contact.address}</li>
          </ul>
        </div>
      </Card>
    </section>
  );
}
