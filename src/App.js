import * as React from "react";
import styled from "styled-components";

function MyComponent(props) {
  return (
    <Div>
      <Img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4fd3e49b0d7464811b7a31d8368199bb74e6ab93dd3910369347f272adc710c?"
      />
      <Div2>FILMOVI</Div2>
      <Div3>SERIJE</Div3>
      <Div4>GLUMCI</Div4>
      <Div5>NAGRADE</Div5>
      <Div6>
        <Div7>Pretraži</Div7>
        <Img2
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/00f88593f9d467bca1f0a70cf4df660ecde74175b4193a14fb011b3f261ad197?"
        />
      </Div6>
    </Div>
  );
}

const Div = styled.div`
  border-radius: 1px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  white-space: nowrap;
  padding: 22px 25px 22px 0;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding-right: 20px;
    white-space: initial;
  }
`;

const Img = styled.img`
  aspect-ratio: 5.56;
  object-fit: auto;
  object-position: center;
  width: 215px;
  align-self: stretch;
  max-width: 100%;
`;

const Div2 = styled.div`
  font-family: Inter, sans-serif;
  align-self: stretch;
  margin: auto 0;
`;

const Div3 = styled.div`
  font-family: Inter, sans-serif;
  align-self: stretch;
  margin: auto 0;
`;

const Div4 = styled.div`
  font-family: Inter, sans-serif;
  align-self: stretch;
  margin: auto 0;
`;

const Div5 = styled.div`
  color: #fffafa;
  font-family: Inter, sans-serif;
  align-self: stretch;
  margin: auto 0;
`;

const Div6 = styled.div`
  background-color: #f6eeee;
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: #747474;
  font-weight: 200;
  margin: auto 0;
  padding: 6px 3px 6px 9px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div7 = styled.div`
  font-family: Inter, sans-serif;
  align-self: start;
  margin-top: 8px;
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 21px;
`;



  
  

export default MyComponent;
