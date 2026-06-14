-- Execute este SQL no Supabase SQL Editor
-- Menu: SQL Editor > New Query > cole e clique Run

create table if not exists records (
  id           bigint primary key,
  hospital     text,
  medico       text,
  nome         text,
  prontuario   text,
  idade        text,
  sexo         text,
  plano        text,
  doenca       text,
  setor        text,
  internacao   text,
  tipo         text,
  proc_sub     text,
  seguimento   text,
  desfecho     text,
  consulta     boolean,
  data_agendada text,
  ts           text,
  created_at   timestamptz default now()
);

-- Permitir leitura e escrita sem autenticação (simplificado para uso interno)
alter table records enable row level security;

create policy "allow_all" on records
  for all using (true) with check (true);
