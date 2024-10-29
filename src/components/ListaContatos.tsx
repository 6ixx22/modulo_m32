import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ContatoItem from './ContatoItem';
import FormularioContato from './FormularioContatos';

const ListaContatos: React.FC = () => {
  const contatos = useSelector((state: RootState) => state.contatos.lista);
  const [contatoEditavel, setContatoEditavel] = useState<{ id: string; nome: string; email: string; telefone: string } | null>(null);


  return (
    <>
      <FormularioContato
        contatoEditavel={contatoEditavel}
        limparEdicao={() => setContatoEditavel(null)}
      />
      {contatos.map((contato) => (
        <ContatoItem
          key={contato.id}
          {...contato}
          onEdit={(id) => setContatoEditavel(contatos.find(c => c.id === id) || null)}
        />
      ))}
    </>
  );
};

export default ListaContatos;
