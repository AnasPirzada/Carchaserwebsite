import React from "react";
import TeamCard from "./TeamCard";
// import person1 from "./people1.png";
// import person2 from "./people2.png";
// import person3 from "./people3.png";
// import person4 from "./people4.png";
// import person5 from "./people5.png";
// import person6 from "./people6.png";
// import person7 from "./people7.png";
// import person8 from "./people8.png";

const Teamsection = () => {
  const teamMembers = [
    {
      id: 1,
      title: "Guy Hawkins",
      subtitle: "Senior Product Manager",
      image: "./people1.png",
    },
    {
      id: 2,
      title: "Ronald Richards",
      subtitle: "Product Executive",
      image: "./people2.png",
    },
    {
      id: 3,
      title: "Bessie Cooper",
      subtitle: "Product Admin",
      image: "./people3.png",
    },
    {
      id: 4,
      title: "Kristin Watson",
      subtitle: "Interaction Designer",
      image: "./people4.png",
    },
    {
      id: 5,
      title: "Ralph Edwards",
      subtitle: "Data Analyst",
      image: "./people5.png",
    },
    {
      id: 6,
      title: "Leslie Alexander",
      subtitle: "Data Analyst Lead",
      image: "./people6.png",
    },
    {
      id: 7,
      title: "Arlene McCoy",
      subtitle: "User Interface Developer",
      image: "./people7.png",
    },
    {
      id: 8,
      title: "Cody Fisher",
      subtitle: "Full Stack Software Engineeri",
      image: "./people8.png",
    },
  ];
  return (
    <>
      <div>
        <div className="text-center">
          <p style={{ color: "#1985D2" }}> Our Team </p>
          <h1>Our Amazing People</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Ut enim ad minim.
          </p>
        </div>
        <div className="container my-5">
          <div className="row">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-lg-3 col-sm-6">
                <TeamCard
                  title={member.title}
                  subtitle={member.subtitle}
                  image={member.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Teamsection;
