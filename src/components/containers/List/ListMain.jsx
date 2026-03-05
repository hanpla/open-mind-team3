import * as S from "@/styles/ListPage.style";
import { useState } from "react";


export default function ListMain(){
    const [sortBy, setSortBy] = useState("latest");

    return(
        <S.MainSection>
        <S.MainHeader>
          <h1>누구에게 질문할까요?</h1>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="latest">최신순</option>
            <option value="name">이름순</option>
          </select>
        </S.MainHeader>

        <S.CardGrid>
          {[...Array(8)].map((_, i) => (
            <S.CardItem key={i}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "#ddd",
                  }}
                />
                <div style={{ fontWeight: "bold" }}></div>
              </div>
              <div style={{ fontSize: "14px", color: "#818181" }}>
                받은 질문 9개
              </div>
            </S.CardItem>
          ))}
        </S.CardGrid>
      </S.MainSection>
    )

}