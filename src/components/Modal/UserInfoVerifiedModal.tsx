import styled from '@emotion/styled';

import Modal from '@/components/Modal';
import { Button, Input, Radio, RadioGroup } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

type MembershipProps = {
  email: string;
  name: string;
  contact: string;
  gender: string;
  address: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;
  min-height: 350px;
  padding: 32px 24px;
  color: black;
  font-family: Noto Sans KR;
`;

const TextBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 380px;
  padding: 0.75rem 0;
  font-size: 24px;
  font-weight: 600;
  gap: 2rem;
`;

const ModalTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.p`
  height: auto;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
`;

const Description = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const CustomButton = styled(Button)`
  width: 100%;
  height: 48px;
  color: white;
  background-color: cornflowerblue;
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 0;

  & > input {
    width: 100%;
  }
`;

const InputTitle = styled.p`
  font-size: 1.25rem;
  text-align: left;
`;

const VerifyOtpBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const initialMembership = {
  email: '',
  name: '',
  contact: '',
  gender: '',
  address: '',
};

const expireAt = 300;
const reExpireAt = 30;

const UserInfoVerifiedModal = ({ isOpen, onClose }: Props) => {
  const [step, setStep] = useState(0);
  const [time, setTime] = useState(0);
  const [resendTime, setResendTime] = useState(0);
  const [memberShipInfo, setMembershipInfo] = useState(initialMembership);

  const handleTimerStart = (sendType?: string) => {
    setTime(expireAt);

    if (sendType === 'resend') {
      setResendTime(reExpireAt);
    }
  };

  const handleStepClock = (step: number) => () => {
    if (step < 0) {
      setStep(0);
      return;
    }

    if (step > 3) {
      setStep(3);
      return;
    }

    setStep(step);
  };

  const handleMemberShipInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLSelectElement;
    setMembershipInfo({ ...memberShipInfo, [name]: value });
    console.log(e);
  };

  // const inputList = [
  //   {
  //     type: 'email',
  //     name: 'email',
  //     title: '이메일',
  //     value: memberShipInfo.email,
  //     placeholder: '이메일을 입력해주세요',
  //   },
  //   {
  //     type: 'text',
  //     name: 'name',
  //     title: '이메일',
  //     value: memberShipInfo.email,
  //     placeholder: '이메일을 입력해주세요',
  //   },
  //   {
  //     type: 'email',
  //     name: 'email',
  //     title: '이메일',
  //     value: memberShipInfo.email,
  //     placeholder: '이메일을 입력해주세요',
  //   },
  //   {
  //     type: 'email',
  //     name: 'email',
  //     title: '이메일',
  //     value: memberShipInfo.email,
  //     placeholder: '이메일을 입력해주세요',
  //   },
  // ];

  // useEffect(() => {
  //   console.log('step >', step);
  // }, [step]);

  // useEffect(() => {
  //   console.log('memberShipInfo >', memberShipInfo);
  // }, [memberShipInfo]);

  useEffect(() => {
    handleTimerStart();
  }, []);

  return (
    <Modal bgColor="transparent" onClose={onClose}>
      <Container>
        <TextBox>
          <ModalTitleBlock>
            <TitleBlock>
              <Title>정회원 인증</Title>
              <div>{step}</div>
            </TitleBlock>

            <Description>
              서비스를 이용하기 위해서는 정회원 인증이 필요합니다
            </Description>
          </ModalTitleBlock>

          <InputBlock>
            {step === 0 && (
              <>
                <InputTitle>이메일 :</InputTitle>
                <Input
                  type="email"
                  value={memberShipInfo.email}
                  placeholder="이메일을 입력해주세요"
                  onChange={handleMemberShipInputChange}
                />

                <VerifyOtpBlock>
                  <InputTitle>인증번호 :</InputTitle>
                  <Button>재발송</Button>
                </VerifyOtpBlock>

                <InputWrapper>
                  <Input
                    type="email"
                    value={memberShipInfo.email}
                    placeholder="전송받은 OTP 번호를 입력해주세요"
                    onChange={handleMemberShipInputChange}
                  />

                  <Button>인증하기</Button>
                </InputWrapper>
              </>
            )}

            {step === 1 && (
              <>
                <InputTitle>이름:</InputTitle>
                <InputWrapper>
                  <Input
                    type="text"
                    value={memberShipInfo.name}
                    placeholder="이름을 입력해주세요"
                    onChange={handleMemberShipInputChange}
                  />
                </InputWrapper>

                <InputTitle>연락처:</InputTitle>
                <InputWrapper>
                  <Input
                    type="phone"
                    value={memberShipInfo.email}
                    placeholder="연락처를 입력해주세요"
                    onChange={handleMemberShipInputChange}
                  />
                </InputWrapper>

                <InputWrapper>
                  <InputTitle>성별:</InputTitle>
                  <RadioGroup
                    onChange={(value) =>
                      setMembershipInfo({ ...memberShipInfo, gender: value })
                    }
                    value={memberShipInfo.gender}
                  >
                    <InputWrapper>
                      <Radio value="male">남</Radio>
                      <Radio value="female">녀</Radio>
                      <Radio value="other">상관없음</Radio>
                    </InputWrapper>
                  </RadioGroup>
                </InputWrapper>
              </>
            )}

            {step === 2 && (
              <>
                <InputTitle>활동 주소:</InputTitle>
                <InputWrapper>
                  <Input
                    type="address"
                    value={memberShipInfo.email}
                    placeholder="본인의 활동 주소를 입력해주세요"
                    onChange={handleMemberShipInputChange}
                  />
                </InputWrapper>
              </>
            )}
          </InputBlock>
        </TextBox>

        {step !== 3 && (
          <ButtonBlock>
            <CustomButton
              isDisabled={step === 0}
              disabled={step === 0}
              onClick={handleStepClock(step - 1)}
            >
              Prev
            </CustomButton>
            <CustomButton
              isDisabled={step === 3}
              disabled={step === 3}
              onClick={handleStepClock(step + 1)}
            >
              Next
            </CustomButton>
          </ButtonBlock>
        )}

        {step === 3 && (
          <ButtonBlock>
            <CustomButton variant="ghost" onClick={handleStepClock(2)}>
              뒤로가기
            </CustomButton>
            <CustomButton>회원가입</CustomButton>
          </ButtonBlock>
        )}
      </Container>
    </Modal>
  );
};

export default UserInfoVerifiedModal;
