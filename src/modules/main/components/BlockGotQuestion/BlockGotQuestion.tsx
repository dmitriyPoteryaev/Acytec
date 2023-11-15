import React, { useState } from "react";

import Button from "@shared/components/Button";
import CustomInput from "@shared/components/CustomInput/CustomInput";
import CustomQuestionInput from "@shared/components/CustomQuestionInput";
import styled from "styled-components";

const ImgSignInput = require("@assets/SignInput.svg").default as string;

const LayoutBlockGotQuestion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 145px;
  width: 100%;
`;
const TitleBlockGotQuestion = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: black;
  text-align: center;
  width: 100%;
  margin-bottom: 51.6px;
  font-size: 60px;
`;

const NoteBlockGotQuestion = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: #212529;
  text-align: center;
  width: 100%;
  margin-bottom: 36.31px;
  font-size: 20px;
`;

const NoteAttentionInput = styled.span`
  position: absolute;
  top: -30px;
  left: 0px;
`;

const NoteAttentionQuestionInput = styled.span`
  position: absolute;
  top: 0px;
  left: 0px;
`;

const SingAttention = styled.span`
  position: absolute;
`;

const LayoutInput = styled.label`
  position: relative;
  margin-top: 30px;
`;

const LayoutQuestionInput = styled.label`
  position: relative;
  margin-top: 30px;
  margin-bottom: 147px;
`;

const Sign = styled.img`
  position: absolute;
  z-index: 10;
  width: 20px;
  height: 20px;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
`;

const BlockGotQuestion = () => {
  const [form, setForm] = useState({
    email: "",
    text: "",
  });

  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <LayoutBlockGotQuestion>
      <TitleBlockGotQuestion>Got questions?</TitleBlockGotQuestion>
      <NoteBlockGotQuestion>
        Drop them below! We're here to chat and give you all the scoop on
        akYtec's products. Let's connect!
      </NoteBlockGotQuestion>
      <LayoutInput>
        {isEmpty && !!!form.email.trim() && <Sign src={ImgSignInput} />}
        <NoteAttentionInput>Email</NoteAttentionInput>

        {isEmpty && !!!form.email.trim() && (
          <SingAttention style={{ top: "60px", left: "30px" }}>
            Field input error
          </SingAttention>
        )}
        <CustomInput
          value={form.email}
          onChange={(value: string) => {
            setForm((prevState: any) => {
              return { ...prevState, email: value };
            });
          }}
        />
      </LayoutInput>
      <LayoutQuestionInput>
        {isEmpty && !!!form.text.trim() && <Sign src={ImgSignInput} />}
        <NoteAttentionQuestionInput>Your question</NoteAttentionQuestionInput>

        {isEmpty && !!!form.text.trim() && (
          <SingAttention style={{ top: "240px", left: "30px" }}>
            Field input error
          </SingAttention>
        )}
        <CustomQuestionInput
          value={form.text}
          onChange={(value: string) => {
            setForm((prevState: any) => {
              return { ...prevState, text: value };
            });
          }}
        />
      </LayoutQuestionInput>
      <div
        style={{
          width: "100%",
          height: "60px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          width="15"
          weightFont="700"
          onClick={() => {
            setIsEmpty(true);
          }}
        >
          SUBMIT
        </Button>
      </div>
    </LayoutBlockGotQuestion>
  );
};

export default BlockGotQuestion;
