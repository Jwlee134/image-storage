import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const DetailContainer = styled.div`
  width: 90%;
  height: 90%;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 0.7);
    background-clip: padding-box;
    border-radius: 20px;
    border: 4px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
  display: flex;
  flex-direction: column;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    height: auto;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
`;

export const AuthorContainer = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  height: auto;
`;

export const InfoColumn = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  max-width: 60%;
  opacity: 0.7;
  line-height: 1.3;
`;

export const DownloadColumn = styled.div`
  display: flex;
  height: 50px;
`;

export const Img = styled.img<{ isProfile: boolean }>`
  width: auto;
  max-width: 100%;
  max-height: 100%;
  border-radius: ${(props) => (props.isProfile ? "50%" : "0")};
`;

export const NameSpace = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.div`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const InstaName = styled.div`
  font-size: 13px;
  font-weight: 300;
  opacity: 0.7;
`;

export const CloseFontAwesomeIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  position: sticky;
  top: 0px;
  opacity: 0.5;
  align-self: flex-end;
  margin-right: 10px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Download = styled.a`
  color: white;
  background-color: #2ecc71;
  padding: 10px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
`;

export const Size = styled.div`
  font-size: 11px;
  font-weight: 400;
  text-align: center;
  margin-top: 3px;
`;

export const AreaFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 7px;
  font-size: 15px;
`;

export const ColumnText = styled.div`
  font-size: 12px;
  margin-bottom: 15px;
`;

export const ReadMore = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;
