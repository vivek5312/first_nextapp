'use-client'
const Developer = ({ params }) => {
  console.log(params)
  return (
    <div>
      <h1>Developer Role</h1>
      <p>{params.name}</p>
    </div>
  )
}
export default Developer;



