import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removerContato } from '../redux/contatosSlice';

interface ContatoProps {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  onEdit: (id: string) => void;
}

const ContatoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
  background-color: #2c2c2c;
  border-radius: 5px;
  color: white;
`;

const Botao = styled.button`
  margin-left: 10px;
  background-color: #ff5c5c;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const ContatoItem: React.FC<ContatoProps> = ({ id, nome, email, telefone, onEdit }) => {
  const dispatch = useDispatch();

  return (
    <ContatoContainer>
      <div>
        <p><strong>Nome:</strong> {nome}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Telefone:</strong> {telefone}</p>
      </div>
      <div>
        <Botao onClick={() => onEdit(id)}>Editar</Botao>
        <Botao onClick={() => dispatch(removerContato(id))}>Remover</Botao>
      </div>
    </ContatoContainer>
  );
};

export default ContatoItem;
