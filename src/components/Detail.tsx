import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  DetailContainer,
  ImgContainer,
  AuthorContainer,
  Column,
  Img,
  NameSpace,
  Name,
  InstaName,
  InfoContainer,
  Download,
  Size,
  AreaFontAwesomeIcon,
  ColumnText,
  InfoColumn,
  ReadMore,
  DownloadColumn,
} from "../css/detail";
import { RootState } from "../store";
import { fetchItem } from "../store/detail";

interface IId {
  id: string;
  children: React.ReactNode;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Detail = ({ id, children, setIsModal }: IId) => {
  const { item, loading } = useSelector((state: RootState) => state.detail);
  const dispatch = useDispatch();
  const [toggleReadMore, setToggleReadMore] = useState(false);
  const container = useRef<HTMLDivElement | null>(null);

  const handleReadMore = () => setToggleReadMore((prev) => !prev);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (!container) return;
      if (e.target === container.current) {
        setIsModal(false);
        document.body.style.overflow = "unset";
      }
    },
    [setIsModal]
  );

  useEffect(() => {
    dispatch(fetchItem(id));
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [dispatch, id, handleClick]);

  return (
    <Container ref={container}>
      <DetailContainer>
        {loading ? (
          ""
        ) : (
          <>
            {children}
            <AuthorContainer>
              <Column>
                <Img isProfile={true} src={item?.user.profile_image.medium} />
                <NameSpace>
                  <Name>{item?.user.username}</Name>
                  <a
                    href={`https://www.instagram.com/${item?.user.instagram_username}/`}
                    target="blank"
                  >
                    <InstaName>
                      {item?.user.instagram_username &&
                        `@${item?.user.instagram_username}`}
                    </InstaName>
                  </a>
                </NameSpace>
              </Column>
            </AuthorContainer>
            <ImgContainer>
              <Img isProfile={false} src={item?.urls.full} />
            </ImgContainer>
            <InfoContainer>
              <InfoColumn>
                {item?.location?.city || item?.location?.country ? (
                  <>
                    <ColumnText>
                      <AreaFontAwesomeIcon icon={faMapMarkerAlt} />
                      <span>
                        {item?.location.city && `${item?.location.city}, `}
                      </span>
                      <span>{item?.location.country}</span>
                    </ColumnText>
                  </>
                ) : null}
                <ColumnText>
                  {item?.description && item.description.length > 50 ? (
                    <>
                      {toggleReadMore ? (
                        <span>{item?.description} </span>
                      ) : (
                        <span>{item?.description.substring(0, 49)}... </span>
                      )}
                      <ReadMore onClick={handleReadMore}>
                        {toggleReadMore ? "Hide" : "Read More"}
                      </ReadMore>
                    </>
                  ) : (
                    item?.description
                  )}
                </ColumnText>
              </InfoColumn>
              <DownloadColumn>
                <Download
                  href={`https://unsplash.com/photos/${id}/download?force=true`}
                >
                  Download
                  <Size>({`${item?.width} x ${item?.height}`})</Size>
                </Download>
              </DownloadColumn>
            </InfoContainer>
          </>
        )}
      </DetailContainer>
    </Container>
  );
};

export default Detail;
