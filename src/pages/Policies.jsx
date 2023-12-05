import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"

const Policies = () => {
  return (
    <div>
      <NavBar />

      <section className="privacy-policy">
        <h2>Política de Privacidade</h2>
        <p>A sua privacidade é importante para nós. Para entender como tratamos as suas informações pessoais, leia a nossa Política de Privacidade completa a seguir.</p>

        <p>A Empresa Wise Care está comprometida em proteger a privacidade das informações pessoais dos nossos visitantes e clientes.
          Esta política de privacidade explica como coletamos,
          usamos, compartilhamos e protegemos suas informações pessoais.
        </p>

        <h2>Coleta de Informações Pessoais</h2>

        <p>Coletamos informações pessoais, como nome, endereço, e-mail,
          número de telefone e outras informações relevantes,
          quando você nos fornece voluntariamente,
          seja por meio do preenchimento de formulários em nosso site,
          contato direto ou outros meios de comunicação.
        </p>

        <h2>Uso de Informações Pessoais</h2>

        <p>Usamos as informações pessoais fornecidas para os seguintes fins:</p>

        <p><span>Fornecer nossos serviços de cuidados de idosos.</span></p>
        <p><span>Processar pagamentos e faturamento.</span></p>
        <p><span>Comunicar informações relacionadas aos serviços.</span></p>
        <p><span>Melhorar e personalizar a experiência do usuário.</span></p>
        <p><span>Cumprir com obrigações legais.</span></p>

        <h2>Compartilhamento de Informações</h2>

        <p>Compartilhamos informações pessoais apenas com cuidadores,
          profissionais de saúde e outras partes que sejam essenciais para a prestação de nossos serviços.
          Não vendemos ou alugamos informações pessoais a terceiros.
        </p>

        <h2>Segurança de Dados</h2>

        <p>Implementamos medidas de segurança,
          como criptografia de dados e controle de acesso,
          para proteger suas informações pessoais contra acesso não autorizado e uso indevido.
        </p>

        <h2>Cookies e Rastreamento</h2>

        <p>Nosso site pode usar cookies e tecnologias de rastreamento para melhorar a experiência do usuário.
          Você pode gerenciar as preferências de cookies através das configurações do seu navegador.
        </p>

        <h2>Acesso e Controle</h2>

        <p>Você pode solicitar acesso,
          correção, atualização ou exclusão de suas informações pessoais entrando em contato conosco.
        </p>

        <h2>Período de Retenção</h2>

        <p>Mantemos informações pessoais pelo tempo necessário
          para cumprir com nossas obrigações legais e contratuais.
        </p>

        <h2>Comunicações de Marketing </h2>

        <p>Você pode optar por receber ou não receber comunicações de marketing da nossa empresa.
          Oferecemos a opção de cancelar a inscrição em nossos e-mails promocionais.
        </p>

        <h2>Menores de Idade</h2>

        <p>Não coletamos informações pessoais de menores de idade.
          Caso você acredite que informações de uma criança tenham sido fornecidas,
          entre em contato conosco para a remoção imediata.
        </p>

        <h2>Alterações na Política</h2>

        <p>Esta política de privacidade está sujeita a alterações.
          Notificaremos sobre mudanças significativas por meio de nosso site.
        </p>

        <h2>Informações de Contato</h2>

        <p>Se tiver dúvidas ou preocupações sobre nossa política de privacidade, entre em <u><Link to="/contact">Contato</Link></u> conosco.</p>
      </section>
    </div>
  )
}

export default Policies