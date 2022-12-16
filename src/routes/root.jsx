import { Outlet, Link } from "react-router-dom";


export default function Root() {
    return (
      <>
        <div id="page">
          <div className="curriculo">
            <div className="informacoes">
              <div className="row">
              <div className="perfil">
              <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEK7dHO6TZoAw/profile-displayphoto-shrink_400_400/0/1659358317695?e=1676505600&v=beta&t=DYbYZX7Y7eXn5ZRU8h-HpLMOeoYSs_4gmv7Hqdh55lM"></img>
              <section className="nome">
              <h1>Joseane de Oliveira</h1>
              <p><strong>Desenvolvedora de Software</strong></p>
              <p>Graduanda em <strong>Engenharia de Controle e Automação</strong> pela Universidade Estadual do Rio Grande do Sul (UERGS) desde 2021/2</p>
              </section>
              </div>
              <div className="demais-informacoes">
                <section className="informacoes-pessoais">
                <h2><strong>Informações Pessoais</strong></h2>
                <h3>Nacionalidade</h3>
                <p>Brasileira</p>
                <h3>Cidade</h3>
                <p>Viamão/RS</p>
                <h3>Skills</h3>
                <p>
                  <li>
                    C#;
                  </li>
                  <li>
                    JS (React);
                  </li>
                  <li>
                    HTML5, CSS3;
                  </li>
                  <li>
                    Cypress;
                  </li>
                  <li>
                    Microsoft Azure.
                  </li>
                </p>
                </section>
                <section className="informacoes-profissionais">
                    <h2>Experiência profissional</h2>
                    <div className="empresa">
                    <h3>
                        <li>
                          Estágio em Desenvolvimento de Software
                        </li>
                    </h3>
                    <p>Sequor Industrial Software | 03/2022 - atualmente </p>
                    <p>Auxilio na documentação de produtos novos da empresa, como Manual do Usuário (focado no usuário final) e Manual do Desenvolvedor para novos colaboradores desenvolvedores. Aplicação dos conhecimentos em Desenvolvimento WEB Frontend com as linguagens de marcação e estilização HTML5, CSS3 e programação com JavaScript (focado na biblioteca ReactJS). Introdução ao Banco de Dados SQL Server, à linguagem C# para o Backend e à cloud Azure.</p>
                    <h2>Cursos de aperfeiçoamento</h2>
                    </div>
                  <section className="carrossel">
                  <section className="um">
                  <a className="curso-um" href="https://www.udemy.com/certificate/UC-679c90ae-809a-4550-a01d-81423013e1b1/">
                  <figure className="figura-um">
                    <img src="https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo.png"></img>
                    <p>Testes Automáticos</p>
                  </figure>
                  </a>
                  </section>
                  <section className="dois">
                  <a className="curso-dois" href="https://www.udemy.com/certificate/UC-ccd9c830-7580-47bb-89b8-0cbe790d1637/">
                  <figure className="figura-dois">
                    <img src="https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo.png"></img>
                    <p>HTML e CSS Essencial</p>
                  </figure>
                  </a>
                  </section>
                  <section className="três">
                  <a className="curso-tres" href="https://www.udemy.com/certificate/UC-f7cb43be-8a66-4b71-8391-d60e9eb6b10a/">
                  <figure className="figura-tres">
                    <img src="https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo.png"></img>
                    <p>Azure Fundamentals</p>
                  </figure>
                  </a>
                  </section>
                </section>
                </section>
              </div>
              </div>
          <footer className="contacts">
              <Link to={`contact/1`}><strong>Me contate</strong></Link>
          </footer>
          </div>
        </div>
        <div id="detail">
        <Outlet />
        </div>
      </div>
      </>
    );
  }