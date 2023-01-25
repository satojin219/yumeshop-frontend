import { VFC } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { Label, LabelProps } from '../Label';

export interface WideCardProps {
  time: dayjs.Dayjs;
  labels: LabelProps[];
  text: string;
}

const Wrapper = styled.div`
  padding: 8px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;
const Time = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
`;
const CardHeaderWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
`;
const LabelWrapper = styled.div`
  display: flex;
  gap: 4px;
`;
const Text = styled.p`
  font-size: 12px;
  line-height: 20px;
`

export const WideCard: VFC<WideCardProps> = (props) => {
  const { time, labels, text } = props;
  return (
    <Wrapper>
      <CardHeaderWrapper>
        <Time>{time.format('YYYY/MM/DD')}</Time>
        <LabelWrapper>
          {labels.map((label: LabelProps) => (
            <Label name={label.name} color={label.color} key={label.name} />
          ))}
        </LabelWrapper>
      </CardHeaderWrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
};
