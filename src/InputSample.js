import React, { useState } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  })
  const { name, nickname } = inputs; // 쉽게 사용하기 위해 구조화할당을 통해 추출
  const onChange = (e) => {
    const { name, value } = e.target; // 구조화할당

    // 리액트에서는 객체를 업데이트할떈 기존 객체를 복사해야함 스프레드문법사용
    // const nextInputs = {
    //   ...inputs,
    //   [name]: value, 그냥 name으로 하면 문자열로 인식해서 []로 감싸줘야함
    // }

    setInputs({
      ...inputs,
      [name]: value,
    })
  }
  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
  }
  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input name="nickname" placeholder="닉네임"onChange={onChange} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  )
}

export default InputSample