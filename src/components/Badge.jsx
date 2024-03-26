// src/components/Badge.js
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getTotalCartQuantity } from "../features/cart/cartSlice";

const BadgeContainer = styled.div`
  position: relative;
`;

const BadgeDot = styled.div`
  background: red;
  color: white;
  border-radius: 50%;
  padding: 0;
  position: absolute;
  top: -1.3em;
  right: 0;
  font-size: 0.5em;
  width: 15px; /* Adjust the size as needed */
  height: 15px; /* Adjust the size as needed */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Badge = () => {
  const count = useSelector(getTotalCartQuantity);
  return (
    <>
      {count !== undefined ? (
        <>
          <BadgeContainer>
            <BadgeDot>
              {count && count > 0 && <span className="p-0">{count}</span>}
            </BadgeDot>
          </BadgeContainer>
        </>
      ) : null}
    </>
  );
};

export default Badge;
