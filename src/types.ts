export type ResultT = {
  data: {
    currentQuantity: number;
    dateBurning: string;
    forBurningQuantity: number;
    typeBonusName: string;
  };

  resultOperation: {
    codeResult: number;
    duration: number;
    idLog: string;
    message: string;
    messageDev: null;
    status: number;
  };
};
