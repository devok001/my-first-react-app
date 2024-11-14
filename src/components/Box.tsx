
interface BoxProps {
   value: string;
 }

function Box({value}:BoxProps){
   return <>
   <button className="btn btn-info" 
   style={{ height: '50px', width: '50px' }}>
      {value}
   </button>
   </>
}

export default Box;