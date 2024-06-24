import {Dispatch, SetStateAction} from "react";

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]
type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>,
  tip: number,
}
export default function TipPercentageForm({setTip, tip}: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form>
        {tipOptions.map(tipOption => (
          <div key={tipOption.id}>
            <input
              type="radio"
              id={tipOption.id}
              name="tipPercentage"
              value={tipOption.value}
              className="mr-2"
              onChange={e => setTip(+e.target.value)}
              checked={tip === tipOption.value}
            />
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
          </div>
        ))}
      </form>
    </div>
  )
}