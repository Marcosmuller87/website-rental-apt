import React from "react";
import "../../App.css";
import "./Serviços.css";

function Serviços() {
  return (
    <div className="serviços-container">
      <div className="serviços-wrapper">
        <h2 className="serviços-title">Serviços do Edifico</h2>
        <ul className="serviços-list">
          <li className="serviços-item">Elevador</li>
          <li className="serviços-item">
            Uma vaga de garagem coberta dentro
            <br /> do edificio incluida
          </li>
          <li className="serviços-item">
            Estacionameto pago em frente ao edificio
          </li>
          <li className="serviços-item">
            Entrada Principal e entrada de banhista
          </li>
          <li className="serviços-item">Torneira para lavar os pes</li>
          <li className="serviços-item">
            Carrinho de compras para subir as malas
          </li>
          <li className="serviços-item">
            Cameras de segurança em areas
            <br /> comuns do edifico
          </li>
          <li className="serviços-item">Porteria ate 21:00 hs</li>
        </ul>
      </div>
      <div className="serviços-wrapper">
        <h2 className="serviços-title">Serviços do Apartamento</h2>
        <ul className="serviços-list">
          <li className="serviços-item">Um quarto de casal com TV</li>
          <li className="serviços-item">
            Um quarto com duas beliches (4 pessoas)
          </li>
          <li className="serviços-item">TV grande na sala</li>
          <li className="serviços-item">Cozinha completa</li>
          <li className="serviços-item">
            Pia para lavar roupa e estendedor de roupa
          </li>
          <li className="serviços-item">Misteira</li>
          <li className="serviços-item">Liquidificador</li>
        </ul>
      </div>
      <div className="serviços-wrapper">
        <h2 className="serviços-title">Regras do Edificio</h2>
        <ul className="serviços-list">
          <li className="serviços-item">
            Uso de mascara obrigatoria en areas comuns
          </li>
          <li className="serviços-item">Horario de silencio as 22:00</li>
        </ul>
      </div>
      <div className="foot-wrapper">
        <h3 className="serviços-title">
          Horario de entrada no Apartamento: &nbsp; Desde 14:00 hs
        </h3>
        <h3 className="serviços-title">
          Horario de saida do Apartamento: &nbsp; Ate 12:00 hs
        </h3>
      </div>
    </div>
  );
}

export default Serviços;
