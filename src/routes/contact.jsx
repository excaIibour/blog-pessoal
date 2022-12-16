import "./contact.css";

export default function Contact() {
  const contact = {
    avatar: "https://kinsta.com/wp-content/uploads/2020/04/code-review-tools.png",
    linkedin: "https://www.linkedin.com/in/joseane-de-oliveira-ba25a2217/",
    linkedinicon: "https://t.ctcdn.com.br/09Y6BbLFxNn7XGCYRGzEI0p0oy8=/400x400/smart/filters:format(webp)/i490027.jpeg",
    whatsapp: "https://api.whatsapp.com/send?phone=5551995654476",
    whatsappicon: "https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360",
    email: "mailto:jojovieiradeoliveira@gmail.com",
    emailicon: "https://i.pinimg.com/originals/22/9c/5f/229c5fac1b099af08897217e15f7c375.jpg",
    note: "Me chama nas redes! :)",
    notes: "Vai ser um prazer falar com você.",
  };

  return (
    <div id="contact">
      <div className="avatar">
        <img
          key={contact.avatar}
          src={contact.avatar || null}
        />
      </div>

      <div className="content">

        {contact.note && <h1>{contact.note}</h1>}

        <div className="row">
        {contact.linkedin && (
          <p>
            <a
              target="_blank"
              href={`${contact.linkedin}`}
            >
            <img src={contact.linkedinicon}/>
            </a>
          </p>
        )}

        {contact.whatsapp && (
          <p>
            <a
              target="_blank"
              href={`${contact.whatsapp}`}
            >
            <img src={contact.whatsappicon}/>
            </a>
          </p>
        )}

        {contact.email && (
          <p>
            <a
              target="_blank"
              href={`${contact.email}`}
            >
            <img src={contact.emailicon}/>
            </a>
          </p>
        )}

        </div>

        {contact.notes && <p>{contact.notes}</p>}

      </div>
    </div>
  );
}