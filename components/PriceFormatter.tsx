import { cn } from "@/lib/utils"

interface Props {
  amount?: number
  className?: string
}

const PriceFormatter = ({ amount = 0, className }: Props) => {
  const formattedPrice = Number(amount).toLocaleString('fr-MA', {
    style: 'currency',
    currency: 'MAD',
    minimumFractionDigits: 2,
  })

  return (
    <span className={cn('text-sm font-semibold text-darkColor', className)}>
      {formattedPrice}
    </span>
  )
}

export default PriceFormatter
