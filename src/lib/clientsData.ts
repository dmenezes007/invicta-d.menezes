export interface ContactPerson {
  name: string;
  phone: string;
}

export interface Client {
  id: string;
  name: string;
  state: string;
  contactPerson: ContactPerson;
  dpo: ContactPerson;
}

export const PUBLIC_SECTOR_CLIENTS: Client[] = [
  {
    id: 'cm-mc-ba',
    name: 'Câmara Municipal de Morro do Chapéu',
    state: 'BA',
    contactPerson: {
      name: 'A definir',
      phone: '(xx) xxxxx-xxxx',
    },
    dpo: {
      name: 'A definir (DPO)',
      phone: '(xx) xxxxx-xxxx',
    },
  },
  {
    id: 'cm-rj-ba',
    name: 'Câmara Municipal de Riachão do Jacuípe',
    state: 'BA',
    contactPerson: {
      name: 'A definir',
      phone: '(xx) xxxxx-xxxx',
    },
    dpo: {
      name: 'A definir (DPO)',
      phone: '(xx) xxxxx-xxxx',
    },
  },
  {
    id: 'cm-ib-ba',
    name: 'Câmara Municipal de Ibirapitanga',
    state: 'BA',
    contactPerson: {
      name: 'A definir',
      phone: '(xx) xxxxx-xxxx',
    },
    dpo: {
      name: 'A definir (DPO)',
      phone: '(xx) xxxxx-xxxx',
    },
  },
  {
    id: 'cm-mara-ba',
    name: 'Câmara Municipal de Maraú',
    state: 'BA',
    contactPerson: {
      name: 'A definir',
      phone: '(xx) xxxxx-xxxx',
    },
    dpo: {
      name: 'A definir (DPO)',
      phone: '(xx) xxxxx-xxxx',
    },
  },
];

export const PRIVATE_SECTOR_CLIENTS: Client[] = [
  {
    id: 'caw',
    name: 'Corbo, Aguiar & Waise Advogados Associados',
    state: 'BA',
    contactPerson: {
      name: 'A definir',
      phone: '(xx) xxxxx-xxxx',
    },
    dpo: {
      name: 'A definir (DPO)',
      phone: '(xx) xxxxx-xxxx',
    },
  },
];
