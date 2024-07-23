type UserStore = {
  user: {
    id: number;
    image: any;
    name_en: string;
    name_am: string;
    name_or: string;
    name_tr: string;
    created_at: string;
    updated_at: string;
  };
  setUser: (data: {
    id: number;
    image: any;
    name_en: string;
    name_am: string;
    name_or: string;
    name_tr: string;
    created_at: string;
    updated_at: string;
  }) => void;
};
