import React from "react";
import Sidebar from "../../Components/Sidebar/Index";
import { Container } from "../../Components/Container";
import { Heading, Heading2 } from "../../Components/Heading";
import { Wrapper } from "../../Components/Wrapper";
import { HorizontalLine2 } from "../MyProfileScreen/ProfileComponent";
import { historyScreenStaticContent as content ,ArrHistory} from "./Constant";
import { HistoryCard } from "src/components/Cards/HistoryCard";
import { HistoryList } from "./HistoryComponent";

const History = () => {
  return (
    <Wrapper>
       <div className="membership_top_div">
      <Heading>{content.historyH1}</Heading>
      <HorizontalLine2 />
      </div>
      <div className="whole_box">
        <Sidebar />
        <Container style={{width:"100%",maxWidth:"1050px",minWidth:"300px"}} >
          <div className="history_box">
          <Heading2>{content.historyH2}</Heading2>
          <HistoryList >
            {
              ArrHistory.map((value)=>{
                return <HistoryCard {...value}/>
              })
            }
            
            <HistoryCard />
          </HistoryList>
          </div>

        </Container>
      </div>
    </Wrapper>
  );
};

export default History;
