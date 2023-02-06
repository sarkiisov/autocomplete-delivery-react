export type AddressBookStateItem = {
  id: string;
  bookNumber?: number;
  timestamp: number;
  details: {
    [key: string]: string;
  };
};

export type AddressBookState = AddressBookStateItem[];
