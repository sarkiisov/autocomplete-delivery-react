export type AddressBookItem = {
  id: string;
  timestamp: number;
  details: {
    [key: string]: string;
  };
};

export type AddressBookState = {
  addresses: AddressBookItem[];
};
