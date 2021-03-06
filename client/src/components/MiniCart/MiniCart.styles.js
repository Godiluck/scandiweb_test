import styled, {css} from "styled-components";

export const MiniCartOuterContainer = styled.div`
  width: 350px;
  height: 484px;
  padding: 10px;
  position: absolute;
  top: 64px;
  right: 44px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;

  @media screen and (max-width: 480px) {
    width: 280px;
    height: 480px;
    padding: 16px;
    top: 35px;
    right: 16px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 16px;
    top: 56px;
    right: 16px;
  }
`;

export const MiniCartInnerContainer = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.span`
  margin-bottom: 24px;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
`;

export const Total = styled.span`
  font-weight: 500;
  font-size: 16px;
`;

export const TotalPrice = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

export const MiniCartButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

// GO TO BAG
const typeView = css`
  border: 1px solid black;
  background: white;
`;

// CHECK OUT
const typeNotView = css`
  color: white;
  background: #5ece7b;
`;

// CHECK OUT HOVER
const typeCheck = css`
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
`;

// GTB HOVER
const typeNotCheck = css`
  color: white;
  background: #5ece7b;
  border: 1px solid #5ece7b;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
`;

export const MiniCartButton = styled.div`
  padding: 13px 30px;
  
  ${({type}) => (type === 'view' ? typeView : typeNotView)};
  
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  
  &:hover{
    
    ${({type}) => (type === 'check' ? typeCheck : typeNotCheck)};
    cursor: pointer;
  }
  
  @media screen and (max-width: 480px) {
    padding: 16px 32px;
  }
`;

export const EmptyCartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptyCart = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
`;