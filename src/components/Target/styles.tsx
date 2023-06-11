import styled from 'styled-components';

export const TargetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 240px;
  margin-top: 40px;

  .Target__wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 24px;

    .Target__value {
      & > span {
        font-weight: bold;
      }
    }
    .Target__text {
    }
  }
`;
