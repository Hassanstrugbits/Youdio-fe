import React from "react";
import {
  SingleImage,
  CardsBox,
  Sec,
  TextSec,
  TwoCardsBox,
  ReviewCards,
  Box,
  CenterButton,
} from "./singleInstructorStyle";
import { icons } from "src/helpers";
import { H1, P1, H2, Section } from "src/components";
import { SingleinstClassStaticContent, ArrReview } from "./constant";
import {
  SingleInstructorCard,
  TwoCardInstructor,
} from "src/components/Cards/SingleInstructorCard";
import { ReviewCard } from "src/components/Cards";

function SingleInstructor() {
  // single id data fetch function
  // const [user, setUser] = useState([]);

  // const { id } = useParams();
  // console.log(id, "userid");

  // const getUser = async () => {
  //   const response = await fetch(`---/${id}`).catch((err) => {
  //     console.log("Err", err);
  //   });
  //   setUser(await response.json());
  // };

  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <React.Fragment>
      <Sec backgroundImage={icons.singBgInstructor} paddingBlock="15.2vw">
        <H1>{SingleinstClassStaticContent.singleInstructorH1}</H1>
        <P1>{SingleinstClassStaticContent.singleInstructorP1}</P1>
      </Sec>
      <SingleImage>
        <img src={icons.singleInstructorImg} alt="" />
      </SingleImage>

      <TextSec backgroundColor="#fff">
        <H2 className="h2">
          {SingleinstClassStaticContent.singleInstructorH2}
        </H2>
        <P1 className="p1">
          {SingleinstClassStaticContent.singleInstructorPara1}
        </P1>
        <P1 className="p2">
          {SingleinstClassStaticContent.singleInstructorPara2}
        </P1>
        <div className="seperatorLine"></div>
      </TextSec>

      {/* <StyledDiv /> */}

      {/* Single-Instructor Cards Section */}
      <Section backgroundColor="#fff">
        <H2 style={{ textAlign: "center" }}>
          {SingleinstClassStaticContent.singleInstructorCardH2}
        </H2>
        <CardsBox>
          {[...Array(6).keys()].map((val) => (
            <SingleInstructorCard key={`card-${val}`} />
          ))}
        </CardsBox>
        <div className="seperatorLine"></div>
      </Section>

      {/* Horizontal Line */}
      {/* <StyledDiv /> */}

      {/* Two Card Section */}
      <Section backgroundColor="#fff">
        <H2 style={{ textAlign: "center" }}>
          {SingleinstClassStaticContent.TwoInstructorCardH2}
        </H2>
        <TwoCardsBox>
          {[...Array(2).keys()].map((val) => (
            <TwoCardInstructor key={`card-${val}`} />
          ))}
        </TwoCardsBox>
        <div className="seperatorLine"></div>
      </Section>

      {/* Horizontal Line */}
      {/* <StyledDiv /> */}

      {/* Review-Card */}
      <Section backgroundColor="#fff">
        <H2 style={{ textAlign: "center" }}>
          {SingleinstClassStaticContent.ReviewH2}
        </H2>
        <ReviewCards>
          {ArrReview.map((review) => {
            const { id } = review;
            return <ReviewCard key={id} {...review} />;
          })}
        </ReviewCards>
      </Section>

      <Box>
        <CenterButton>{SingleinstClassStaticContent.ButtonH4}</CenterButton>
      </Box>
    </React.Fragment>
  );
}

export default SingleInstructor;
