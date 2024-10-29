import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adicionarContato, editarContato } from '../redux/contatosSlice';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const FormularioContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Botao = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

interface FormularioProps {
    contatoEditavel?: { id: string; nome: string; email: string; telefone: string } | null;
    limparEdicao: () => void;
  }  

const FormularioContato: React.FC<FormularioProps> = ({ contatoEditavel, limparEdicao }) => {
  const [nome, setNome] = useState(contatoEditavel?.nome || '');
  const [email, setEmail] = useState(contatoEditavel?.email || '');
  const [telefone, setTelefone] = useState(contatoEditavel?.telefone || '');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const novoContato = { id: contatoEditavel?.id || uuidv4(), nome, email, telefone };

    if (contatoEditavel) {
      dispatch(editarContato(novoContato));
      limparEdicao();
    } else {
      dispatch(adicionarContato(novoContato));
    }

    setNome('');
    setEmail('');
    setTelefone('');
  };

  return (
    <FormularioContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="tel"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <Botao type="submit">{contatoEditavel ? 'Editar' : 'Adicionar'}</Botao>
    </FormularioContainer>
  );
};

export default FormularioContato;
