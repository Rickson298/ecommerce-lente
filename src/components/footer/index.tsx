import { FooterContainer, PaymentMethods } from "./styles";
import { SiNubank } from "react-icons/si";
import { BsPaypal } from "react-icons/bs";
import { RiMastercardFill, RiVisaLine } from "react-icons/ri";

export function Footer() {
  return (
    <FooterContainer>
      <PaymentMethods>
        Formas de pagamento
        <div className="container_icons_payments">
          <SiNubank size="35px" />
          <RiMastercardFill size="35px" />
          <RiVisaLine size="35px" />
          <BsPaypal size="25px" />
        </div>
      </PaymentMethods>
      <span>
        Iris Corporation ® - TODOS OS DIREITOS RESERVADOS - OS PREÇOS E
        PROMOÇÕES SÃO VÁLIDAS APENAS PARA PRODUTOS VENDIDOS PELA
        irisCorporation.COM.BR. OS PREÇOS DE LOJAS FÍSICAS PODEM VARIAR. NÃO
        FAZEMOS TROCAS EM LOJAS FÍSICAS, APENAS PELO ATENDIMENTO.
      </span>
    </FooterContainer>
  );
}
