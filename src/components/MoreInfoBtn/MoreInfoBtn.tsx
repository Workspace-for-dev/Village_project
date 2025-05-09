import { BtnWrapper } from "./styles";

type MoreInfoBtnProps = {
  title: string;
};

function MoreInfoBtn({ title }: MoreInfoBtnProps) {
  return (
    <BtnWrapper>
      {title}
    </BtnWrapper>
  );
}

export default MoreInfoBtn;
