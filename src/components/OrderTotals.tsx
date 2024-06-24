import {OrderItem} from "../types";
import {useMemo} from "react";
import {formatCurrency} from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[],
  tip: number,
  placeOrder: () => void,
}
export default function OrderTotals({order, tip, placeOrder}: OrderTotalsProps) {

  const subtotalAmount = useMemo(
    () => {
      return order.reduce(
        (total, item) => total + (item.quantity + item.price),
        0
      )
    },
    [order]
  )
  const tipAmount = useMemo(
    () => {
      return subtotalAmount * tip;
    }, [subtotalAmount, tip]
  )

  const totalAmount = useMemo(() => {
      return subtotalAmount + tipAmount
    }, [subtotalAmount, tipAmount]
  )

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>Subtotal a pagar:{' '}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>Propina:{' '}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>Total a Pagar:{' '}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black hover:bg-stone-900 active:scale-[.98] transition-transform p-3 uppercase text-white font-bold mt-10 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-black disabled:active:scale-100"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  )
}