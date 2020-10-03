import React from 'react';
import coverImage from '../../assets/img/JULIA-030719-165119-8663.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About me</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: '100%' }}
        alt="cover"
      />
    </section>
  );
}
export default About;