import React, { useRef } from 'react'

const UncontrolledInput = () => {
  const inputRef = useRef(null);
  const handleBlur = () => {
    console.log(inputRef.current.value);
  }
  return (
    <section>
      <h1>Using uncontrolled inputs: useRef</h1>
      <input type="text" onBlur={handleBlur} ref={inputRef} />
    </section>
  );
}

export default UncontrolledInput