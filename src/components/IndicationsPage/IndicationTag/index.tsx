import React from "react";
import { IIndication } from "@/types/Iindication";

interface IIndicationTag {
  indication: IIndication;
}

const IndicationTag: React.FC<IIndicationTag> = ({
  indication,
}: IIndicationTag) => {
  return (
    <div>
      <h3>{indication.name}</h3>
    </div>
  );
};

export default IndicationTag;
