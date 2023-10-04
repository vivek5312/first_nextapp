import Link from "next/link";

const About = () => {
 const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  return (
    <div>
      <h1>My About Page</h1>
      {details.map((detail) => (
        <div key={detail.id}>
           <Link href={`/about/${detail.id}`} >
          <p>{detail.name} {detail.role}</p>
          </Link>
        </div> 
      ))}
    </div>
  );
};
export default About;
