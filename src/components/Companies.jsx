import {
  microsoft,
  keller,
  laudio,
  macmillan,
  memora,
  ping,
  ucsf,
  phil,
} from "../assets";


const Companies = ({company}) => {
  return (
    <div className="flex items-center justify-center p-4">
          <img className="" src={company} alt={company} />
        </div>
  )
}

export default Companies