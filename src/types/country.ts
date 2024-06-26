export type Country = {
  name: {
    common: string;
  };
  capital: string[];
  flags: {
    png: string;
  };
};

export type SelectedCountry = Country & {
  isSelected: boolean;
};
